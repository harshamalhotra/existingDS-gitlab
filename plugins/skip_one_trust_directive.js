import Vue from 'vue';

Vue.directive('skipOneTrust', {
  inserted: (el) => {
    el.setAttribute('data-ot-ignore', '💩🍪');
    el.classList.add('optanon-category-C0001');
  },
});
