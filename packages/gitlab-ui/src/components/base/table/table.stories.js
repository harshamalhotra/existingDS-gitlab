import GlFormInput from '../form/form_input/form_input.vue';
import GlLoadingIcon from '../loading_icon/loading_icon.vue';
import BVueReadme from '../../../vendor/bootstrap-vue/src/components/table/README.md';
import { makeContainer } from '../../../utils/story_decorators/container';
import { getA11yParameters } from '../../../utils/stories_utils';
import GlTable from './table.vue';

const components = { GlTable };

const tableItems = [
  {
    column_one: 'test',
    col_2: 'ABC',
    col_three: 1234,
  },
  {
    column_one: 'test2',
    col_2: 'DEF',
    col_three: 5678,
  },
  {
    column_one: 'test3',
    col_2: 'GHI',
    col_three: 9101,
  },
];

const tableFields = [
  {
    key: 'column_one',
    label: 'First column',
    sortable: true,
  },
  {
    key: 'col_2',
    label: 'Second column',
  },
  {
    key: 'col_three',
    sortable: true,
    label: 'Third column',
    thAlignRight: true,
    tdClass: 'gl-text-right',
  },
];

const generateProps = ({
  stickyHeader = false,
  items = [],
  fields = null,
  fixed = false,
  footClone = false,
  stacked = false,
  caption = 'This is the table caption',
  selectable = false,
  bordered = false,
  busy = false,
} = {}) => ({
  stickyHeader,
  items,
  fields,
  fixed,
  footClone,
  stacked,
  caption,
  selectable,
  bordered,
  busy,
});

export const Default = (args, { argTypes }) => ({
  components,
  props: Object.keys(argTypes),
  template: `
  <gl-table
    :sticky-header="stickyHeader"
    :items="items"
    :fields="fields"
    :fixed="fixed"
    :stacked="stacked"
    :foot-clone="footClone"
    :selectable="selectable"
    :bordered="bordered"
    :busy="busy"
    sort-by="col_three"
    sort-desc
    sort-direction="desc"
    hover
    selected-variant="primary"
  >
    <template v-if="caption" #table-caption>
      {{ caption }}
    </template>
  </gl-table>
`,
});
Default.args = generateProps({
  items: tableItems,
  fields: tableFields,
});

export const Empty = (args, { argTypes }) => ({
  components,
  props: Object.keys(argTypes),
  template: `
      <gl-table show-empty />
    `,
});
Empty.parameters = { controls: { disable: true } };

export const WithFilter = (args, { argTypes }) => ({
  components: { ...components, GlFormInput },
  props: Object.keys(argTypes),
  template: `<div class="gl-leading-normal">
      <gl-form-input v-model="filter" placeholder="Type to search" />
      <br />
      <gl-table
              :sticky-header="stickyHeader"
              :items="items"
              :fields="fields"
              :fixed="fixed"
              :stacked="stacked"
              :foot-clone="footClone"
              :filter=filter
              hover
              selectable
              selected-variant="primary"
          />
      </div>`,
  data() {
    return {
      filter: null,
    };
  },
});
WithFilter.args = generateProps({
  items: tableItems,
  fields: tableFields,
});

export const WithStickyHeader = (args, { argTypes }) => ({
  components: { ...components, GlFormInput },
  props: Object.keys(argTypes),
  template: `<div class="gl-leading-normal">
      <gl-form-input v-model="filter" placeholder="Type to search" />
      <br />
      <gl-table
              :sticky-header="stickyHeader"
              :items="items"
              :fields="fields"
              :fixed="fixed"
              :stacked="stacked"
              :foot-clone="footClone"
              :filter="filter"
              hover
              selectable
              selected-variant="primary"
          />
      </div>`,
  data() {
    return {
      filter: null,
    };
  },
});
WithStickyHeader.args = generateProps({
  stickyHeader: true,
  items: [
    ...tableItems,
    ...tableItems,
    ...tableItems,
    ...tableItems,
    ...tableItems,
    ...tableItems,
    ...tableItems,
    ...tableItems,
    ...tableItems,
    ...tableItems,
  ],
  fields: tableFields,
});

export const Stacked = (args, { argTypes }) => ({
  components,
  props: Object.keys(argTypes),
  template: `<gl-table
              :sticky-header="stickyHeader"
              :items="items"
              :fields="fields"
              :fixed="fixed"
              :stacked="stacked"
              :foot-clone="footClone"
            />`,
});
Stacked.args = generateProps({
  stacked: true,
  items: [
    ...tableItems.slice(0, 2),
    {
      column_one: 'wrapping text',
      col_2: 'supercalifragilisticexpialidocious',
      col_three: 9101,
    },
  ],
  fields: tableFields,
});
Stacked.decorators = [makeContainer({ width: '300px' })];

export const WithTableBusySlot = (args, { argTypes }) => ({
  components: { ...components, GlLoadingIcon },
  props: Object.keys(argTypes),
  template: `
  <gl-table
    :items="items"
    :fields="fields"
    :busy="busy"
  >
    <template #table-busy>
      <gl-loading-icon size="lg" />
    </template>
  </gl-table>
`,
});
WithTableBusySlot.args = generateProps({
  items: tableItems,
  fields: tableFields,
  busy: true,
});
WithTableBusySlot.parameters = {
  a11y: getA11yParameters({ temporarySkipRules: ['color-contrast'] }),
};

export default {
  title: 'base/table/table',
  component: GlTable,
  parameters: {
    bootstrapComponent: 'b-table',
    bootstrapDocs: BVueReadme,
    docs: {
      description: {
        component:
          'See [Pajamas Design System documentation](https://design.gitlab.com/components/table) for usage and implementation details.',
      },
    },
  },
  argTypes: {
    stacked: {
      options: ['sm', 'md', 'lg', 'xl', true, false],
      control: 'select',
    },
    stickyHeader: {
      options: [false, true],
      control: 'boolean',
    },
    busy: {
      control: 'boolean',
    },
  },
};
