const APP_URL = 'https://design.gitlab.com';

export const getAbsoluteURI = (path = '') => APP_URL + path;

export const titleTemplate = (titleChunk) => {
  return titleChunk ? `${titleChunk} | Pajamas Design System` : 'Pajamas Design System';
};

export const buildMeta = ({
  titleChunk = '',
  path = '',
  description = 'Resources, components, and design guidelines behind GitLab',
} = {}) => {
  const title = titleTemplate(titleChunk);

  return [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    { hid: 'og:title', name: 'og:title', content: title },
    { hid: 'og:url', name: 'og:url', content: getAbsoluteURI(path) },
    {
      hid: 'og:description',
      name: 'og:description',
      content: description,
    },
  ];
};
