// eslint-disable-next-line import/no-default-export
export default (_ctx, inject) => {
  inject('gitlabUiUrl', process.env.GITLAB_UI_URL);
  inject('lookbookUrl', process.env.LOOKBOOK_URL);
};
