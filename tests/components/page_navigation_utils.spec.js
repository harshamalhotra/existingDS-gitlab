import {
  getActiveHeadingIndex,
  mapHeadingPositionsToScrollTops,
} from '../../components/page_navigation_utils';

const SCENARIOS = {
  tallPageTallSections: {
    headingPositions: [10, 20, 30, 40],
    documentScrollHeight: 50,
    viewportHeight: 5,
  },
  tallLastSection: {
    headingPositions: [5, 10, 15, 20],
    documentScrollHeight: 40,
    viewportHeight: 20,
  },
  typicalPage: {
    headingPositions: [10, 20, 30, 40, 50, 60, 70, 80, 90],
    documentScrollHeight: 100,
    viewportHeight: 25,
  },
  smallScrollRange: {
    headingPositions: [10, 20, 30, 40],
    documentScrollHeight: 50,
    viewportHeight: 40,
  },
  noScrollRange: {
    headingPositions: [10, 20, 30, 40],
    documentScrollHeight: 50,
    viewportHeight: 50,
  },
};

describe('mapHeadingPositionsToScrollTops', () => {
  it('tall page with tall sections maps positions to themselves', () => {
    expect(mapHeadingPositionsToScrollTops(SCENARIOS.tallPageTallSections)).toEqual([
      10, 20, 30, 40,
    ]);
  });

  it('page with tall last section maps positions to themselves', () => {
    expect(mapHeadingPositionsToScrollTops(SCENARIOS.tallLastSection)).toEqual([5, 10, 15, 20]);
  });

  it('typical page only moves last positions within scaling region', () => {
    expect(mapHeadingPositionsToScrollTops(SCENARIOS.typicalPage)).toEqual([
      10, 20, 30, 40, 50, 60, 70, 73, 75,
    ]);
  });

  it('page with small amount of scroll moves all positions', () => {
    expect(mapHeadingPositionsToScrollTops(SCENARIOS.smallScrollRange)).toEqual([3, 5, 8, 10]);
  });

  it('page with no scroll moves all positions to 0', () => {
    expect(mapHeadingPositionsToScrollTops(SCENARIOS.noScrollRange)).toEqual([0, 0, 0, 0]);
  });

  describe('invariants', () => {
    describe.each(Object.entries(SCENARIOS))('given scenario %s', (_, scenario) => {
      it('no mapped positions are out of bounds of the scrollable region', () => {
        const mappedPositions = mapHeadingPositionsToScrollTops(scenario);

        for (const position of mappedPositions) {
          expect(position).toBeGreaterThanOrEqual(0);
          expect(position).toBeLessThanOrEqual(
            scenario.documentScrollHeight - scenario.viewportHeight,
          );
        }
      });
    });
  });
});

describe('getActiveHeading', () => {
  describe('typical page', () => {
    let scenario;

    beforeEach(() => {
      scenario = SCENARIOS.typicalPage;
    });

    it('returns the third heading for the expected scroll region', () => {
      const index = 2;
      const headingPosition = scenario.headingPositions[index];

      // It's fast enough to check every integer in the range, so why not?
      for (
        let documentScrollTop = headingPosition;
        documentScrollTop < scenario.headingPositions[index + 1];
        documentScrollTop += 1
      ) {
        expect(
          getActiveHeadingIndex({
            documentScrollTop,
            ...scenario,
          }),
        ).toBe(index);
      }
    });
  });

  it('page with no scroll gives first heading', () => {
    expect(
      getActiveHeadingIndex({
        documentScrollTop: 0,
        ...SCENARIOS.noScrollRange,
      }),
    ).toEqual(0);
  });

  describe('invariants', () => {
    describe.each(Object.entries(SCENARIOS))('given scenario %s', (_, scenario) => {
      it('scrollTop < 0 returns the first heading', () => {
        expect(
          getActiveHeadingIndex({
            documentScrollTop: -1,
            ...scenario,
          }),
        ).toEqual(0);
      });

      it('scrollTop = 0 returns the first heading', () => {
        expect(
          getActiveHeadingIndex({
            documentScrollTop: 0,
            ...scenario,
          }),
        ).toEqual(0);
      });

      it('returns -1 if headingPositions is empty', () => {
        expect(
          getActiveHeadingIndex({
            ...scenario,
            headingPositions: [],
          }),
        ).toEqual(-1);
      });
    });

    describe.each(
      Object.entries(SCENARIOS).filter(
        ([, scenario]) => scenario.documentScrollHeight > scenario.viewportHeight,
      ),
    )('given scenario %s', (_, scenario) => {
      it('scrollTop = scrollHeight - viewportHeight (non-zero) maps the last heading', () => {
        expect(
          getActiveHeadingIndex({
            documentScrollTop: scenario.documentScrollHeight - scenario.viewportHeight,
            ...scenario,
          }),
        ).toEqual(scenario.headingPositions.length - 1);
      });

      it('scrollTop > scrollHeight - viewportHeight (non-zero) maps the last heading', () => {
        expect(
          getActiveHeadingIndex({
            documentScrollTop: scenario.documentScrollHeight - scenario.viewportHeight + 1,
            ...scenario,
          }),
        ).toEqual(scenario.headingPositions.length - 1);
      });
    });
  });
});
