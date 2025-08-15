export const SkipOneTrustDirective = {
  inserted: (el) => {
    el.setAttribute('data-ot-ignore', '💩🍪');
    el.classList.add('optanon-category-C0001');
  },
};
