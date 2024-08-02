/*
This re-exports some components from GitLab UI in order to enable SSR
For example pikaday does access window and will break in development mode
otherwise

Simply add more components if you need them!
 */
export { default as GlAlert } from '@gitlab/ui/dist/components/base/alert/alert';
export { default as GlDropdownItem } from '@gitlab/ui/dist/components/base/dropdown/dropdown_item';
export { default as GlSearchBoxByType } from '@gitlab/ui/dist/components/base/search_box_by_type/search_box_by_type';
export { default as GlIcon } from '@gitlab/ui/dist/components/base/icon/icon';
export { default as GlLoadingIcon } from '@gitlab/ui/dist/components/base/loading_icon/loading_icon';
export { default as GlCard } from '@gitlab/ui/dist/components/base/card/card';
export { default as GlLink } from '@gitlab/ui/dist/components/base/link/link';
export { default as GlNav } from '@gitlab/ui/dist/components/base/nav/nav';
export { default as GlNavItem } from '@gitlab/ui/dist/components/base/nav/nav_item';
