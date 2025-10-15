/*
This re-exports some components from GitLab UI in order to enable SSR
For example pikaday does access window and will break in development mode
otherwise

Simply add more components if you need them!
 */

// Components
export { default as GlAlert } from '@gitlab/ui/src/components/base/alert/alert.vue';
export { default as GlBadge } from '@gitlab/ui/src/components/base/badge/badge.vue';
export { default as GlButton } from '@gitlab/ui/src/components/base/button/button.vue';
export { default as GlButtonGroup } from '@gitlab/ui/src/components/base/button_group/button_group.vue';
export { default as GlCard } from '@gitlab/ui/src/components/base/card/card.vue';
export { default as GlDropdownItem } from '@gitlab/ui/src/components/base/dropdown/dropdown_item.vue';
export { default as GlEmptyState } from '@gitlab/ui/src/components/regions/empty_state/empty_state.vue';
export { default as GlFormGroup } from '@gitlab/ui/src/components/base/form/form_group/form_group.vue';
export { default as GlFormSelect } from '@gitlab/ui/src/components/base/form/form_select/form_select.vue';
export { default as GlIcon } from '@gitlab/ui/src/components/base/icon/icon.vue';
export { default as GlIllustration } from '@gitlab/ui/src/components/base/illustration/illustration.vue';
export { default as GlLabel } from '@gitlab/ui/src/components/base/label/label.vue';
export { default as GlLink } from '@gitlab/ui/src/components/base/link/link.vue';
export { default as GlLoadingIcon } from '@gitlab/ui/src/components/base/loading_icon/loading_icon.vue';
export { default as GlPagination } from '@gitlab/ui/src/components/base/pagination/pagination.vue';
export { default as GlSearchBoxByType } from '@gitlab/ui/src/components/base/search_box_by_type/search_box_by_type.vue';
export { default as GlTable } from '@gitlab/ui/src/components/base/table/table.vue';

// Directives
export { GlTooltipDirective } from '@gitlab/ui/src/directives/tooltip/tooltip';

// Utilities
export { HEX_REGEX } from '@gitlab/ui/src/utils/constants';
export {
  colorFromBackground,
  debounceByAnimationFrame,
  getColorContrast,
} from '@gitlab/ui/src/utils/utils';
