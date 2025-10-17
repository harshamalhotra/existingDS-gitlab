/*
This re-exports some components from GitLab UI in order to enable SSR
For example pikaday does access window and will break in development mode
otherwise

Simply add more components if you need them!
 */
export { default as GlButton } from '@gitlab/ui/src/components/base/button/button.vue';
export { default as GlCard } from '@gitlab/ui/src/components/base/card/card.vue';
export { default as GlEmptyState } from '@gitlab/ui/src/components/regions/empty_state/empty_state.vue';
export { default as GlFormGroup } from '@gitlab/ui/src/components/base/form/form_group/form_group.vue';
export { default as GlFormSelect } from '@gitlab/ui/src/components/base/form/form_select/form_select.vue';
export { default as GlSearchBoxByType } from '@gitlab/ui/src/components/base/search_box_by_type/search_box_by_type.vue';
