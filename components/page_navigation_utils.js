/**
 * Maps heading positions to valid scroll positions when some headings are
 * beyond the scrollable area.
 *
 * Here's a schematic of a typical scenario:
 *
 *                                 ┌─────────────────┐
 *                              │  │                 │    │
 *                              │  │  Heading A      │    │
 *                              │  │                 │    │
 *                              │  │                 │    │
 *                              │  │                 │    │
 *                              │  │  Heading B      │    │
 *           unscaledRegionSize │  │                 │    │
 *                              │  │                 │    │
 *                              │  │                 │    │
 *                              │  │                 │    │
 *                              │  │                 │    │
 *                              │  │                 │    │
 *                              │  │  Heading C      │    │ documentScrollHeight
 *                              ▼  │                 │    │
 *                              ┌───────────────────────┐ │
 *                         │  │ │  │                 │  │ │
 *                         │  │ │  │                 │  │ │
 *                         │  │ │  │                 │  │ │
 *          viewportHeight │  │ │  │                 │  │ │
 *                         │  │ │  │                 │  │ │
 *                         │  │ │  │                 │  │ │
 *                         │  │ │  │ Heading D       │  │ │
 *                         ▼  │ │  │                 │  │ │
 *                            │ └───────────────────────┘ │
 * targetRatio*viewportHeight │    │ Heading E       │    │
 *                            ▼    └─────────────────┘    ▼
 *
 * **Scaling Strategy:**
 * The function divides the document into two regions:
 * 1. **Unscaled region** where heading positions map directly to scroll positions
 * 2. **Scaled region** where heading positions are compressed using a scaling factor
 *    to fit within the remaining scrollable space
 *
 * In this example, headings D and E, being past the lowest possible scroll
 * position of viewport for this document, must be treated differently. Their scroll
 * must be treated as being higher up that they are to make them scroll
 *
 * Headings A, B and C are in the unscaled region, and so their scroll
 * positions can be kept as-is.
 *
 * In general, if all headings are *above* the lowest possible scroll position of the
 * viewport, then all heading positions are left as-is.
 *
 * If all headings are *below* the lowest possible scroll position of the
 * viewport, they are all compressed.
 *
 * @param {Object} params
 * @param {number[]} params.headingPositions - Array of heading y-positions in the document
 * @param {number} params.documentScrollHeight - Height of the document
 * @param {number} params.viewportHeight - Height of the viewport
 * @param {number} [params.targetRatio] - Controls the balance between moving fewer headings vs. less compression
 *
 * @returns {number[]} Mapped scroll positions for the given headings
 */
export function mapHeadingPositionsToScrollTops({
  headingPositions,
  documentScrollHeight,
  viewportHeight,

  // This is an empirically derived number that seems to give reasonable
  // results. It aims to minimize these two conflicting values:
  // - the number of headings to move that can already be scrolled to,
  // - the range that the last heading positions are squashed into.
  //
  // The bigger the number, the more heading positions get moved that don't
  // have to be, and the less squashed the range of the last few heading
  // positions are.
  targetRatio = 1.25,
}) {
  const hasUnscrollableHeadingPositions = headingPositions.some(
    (headingPosition) => headingPosition > documentScrollHeight - viewportHeight,
  );

  let scaledRegionSize = 0;
  let scalingFactor = 1;

  if (hasUnscrollableHeadingPositions) {
    const lastHeadingPosition = headingPositions[headingPositions.length - 1];
    const ratio = Math.min(targetRatio, documentScrollHeight / viewportHeight);
    scaledRegionSize = ratio * viewportHeight;
    scalingFactor =
      (viewportHeight * (ratio - 1)) /
      (lastHeadingPosition - (documentScrollHeight - ratio * viewportHeight));
  }

  const unscaledRegionSize = Math.max(0, documentScrollHeight - scaledRegionSize);

  return (
    headingPositions
      .map((headingPosition) => {
        if (headingPosition < unscaledRegionSize) {
          return headingPosition;
        }

        const scaledHeadingPosition =
          (headingPosition - unscaledRegionSize) * scalingFactor + unscaledRegionSize;

        return scaledHeadingPosition;
      })
      // Round up to the nearest integer, as `window.scrollTo` truncates
      // floating point values. The `scrollTop` property is floating point, even
      // before our rescaling calculations.
      .map((n) => Math.ceil(n))
  );
}

export function getActiveHeadingIndex({
  documentScrollTop,
  headingPositions,
  documentScrollHeight,
  viewportHeight,
}) {
  if (headingPositions.length === 0) return -1;
  if (documentScrollTop <= 0) return 0;

  const headingScrollTops = mapHeadingPositionsToScrollTops({
    headingPositions,
    documentScrollHeight,
    viewportHeight,
  });

  let index = 0;

  while (index < headingScrollTops.length - 1) {
    if (documentScrollTop < headingScrollTops[index + 1]) return index;
    index += 1;
  }

  return index;
}
