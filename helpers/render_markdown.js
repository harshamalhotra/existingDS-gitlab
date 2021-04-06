import markdowner from 'markdown-it';
import markdownAnchor from 'markdown-it-anchor';

export function initMarkdownIt() {
  return markdowner({
    html: true,
    xhtmlOut: true,
    typographer: true,
  }).use(markdownAnchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#',
    slugify: (s) => encodeURIComponent(s.toLowerCase().replace(/[^a-z0-9]+/g, '-')),
  });
}
