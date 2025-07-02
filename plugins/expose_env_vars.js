export default (_ctx, inject) => {
  inject('gitlabUiUrl', process.env.GITLAB_UI_URL);
  inject('lookbookUrl', process.env.LOOKBOOK_URL);
};
