import { shallowMount, mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import GlDisclosureDropdown from '~/components/base/new_dropdowns/disclosure/disclosure_dropdown.vue';
import GlDisclosureDropdownItem from '~/components/base/new_dropdowns/disclosure/disclosure_dropdown_item.vue';
import GlLoadingIcon from '~/components/base/loading_icon/loading_icon.vue';
import GlSprintf from '~/components/utilities/sprintf/sprintf.vue';
import GlTruncate from '~/components/utilities/truncate/truncate.vue';
import GlLink from '~/components/base/link/link.vue';
import GlDashboardPanel from './dashboard_panel.vue';

describe('GlDashboardPanel', () => {
  let wrapper;

  const createWrapper = ({
    props = {},
    scopedSlots = {},
    slots = {},
    mountFn = shallowMount,
  } = {}) => {
    wrapper = mountFn(GlDashboardPanel, {
      propsData: {
        ...props,
      },
      slots,
      scopedSlots,
      stubs: {
        GlSprintf,
        GlTruncate,
        GlPopover: {
          props: {
            cssClasses: {
              type: [Array, String, Object],
              required: false,
              default: '',
            },
          },
          template: `<div>
            <slot name="title"></slot>
            <slot></slot>
          </div>`,
        },
        MountingPortal: {
          template: '<div><slot /></div>',
        },
      },
    });
  };

  const findByTestId = (testId) => wrapper.find(`[data-testid="${testId}"]`);
  const findPanelTitle = () => findByTestId('panel-title');
  const findPanelTitleIcon = () => findByTestId('panel-title-icon');
  const findPanelSubtitle = () => findByTestId('panel-subtitle');
  const findLoadingIcon = () => wrapper.findComponent(GlLoadingIcon);
  const findLoadingDelayedIndicator = () => findByTestId('panel-loading-delayed-indicator');
  const findPanelTitlePopoverIcon = () => findByTestId('panel-title-popover-icon');
  const findPanelTitlePopover = () => findByTestId('panel-title-popover');
  const findPanelTitlePopoverLink = () => findPanelTitlePopover().findComponent(GlLink);
  const findPanelActionsDropdown = () => wrapper.findComponent(GlDisclosureDropdown);
  const findPanelActionsFiltersContainer = () => findByTestId('panel-actions-filters-container');
  const findPanelFiltersContainer = () => findByTestId('panel-filters-container');
  const findPanelActionsDropdownItems = () =>
    findPanelActionsDropdown()
      .findAllComponents(GlDisclosureDropdownItem)
      .wrappers.map((x) => ({
        text: x.text(),
        variant: x.props('item').variant,
      }));

  describe('default behaviour', () => {
    beforeEach(() => {
      createWrapper();
    });

    it('does not have a colored border', () => {
      expect(wrapper.classes()).not.toContain('gl-border-t-2');
    });

    it('does not render a title icon', () => {
      expect(findPanelTitleIcon().exists()).toBe(false);
    });

    it('does not render a title', () => {
      expect(findPanelTitle().text()).toBe('');
    });

    it('does not render a subtitle', () => {
      expect(findPanelSubtitle().exists()).toBe(false);
    });

    it('does not render a loading icon', () => {
      expect(findLoadingIcon().exists()).toBe(false);
      expect(findLoadingDelayedIndicator().exists()).toBe(false);
    });

    it('does not render the actions dropdown', () => {
      expect(findPanelActionsDropdown().exists()).toBe(false);
    });

    it('does not render the title popover icon', () => {
      expect(findPanelTitlePopoverIcon().exists()).toBe(false);
    });

    it('does not render the actions-filters container', () => {
      expect(findPanelActionsFiltersContainer().exists()).toBe(false);
    });

    it('does not render the filters container', () => {
      expect(findPanelFiltersContainer().exists()).toBe(false);
    });
  });

  describe('with a container class', () => {
    beforeEach(() => {
      createWrapper({
        props: {
          containerClass: 'panel-container',
        },
      });
    });

    it('renders the border color classes', () => {
      expect(wrapper.classes()).toContain('panel-container');
    });
  });

  describe('with a border color class', () => {
    beforeEach(() => {
      createWrapper({
        props: {
          borderColorClass: 'gl-border-t-red-500',
        },
      });
    });

    it('renders the border color classes', () => {
      expect(wrapper.classes()).toContain('gl-border-t-2');
      expect(wrapper.classes()).toContain('gl-border-t-solid');
      expect(wrapper.classes()).toContain('gl-border-t-red-500');
    });
  });

  describe('with a title icon', () => {
    beforeEach(() => {
      createWrapper({
        props: {
          titleIcon: 'error',
          titleIconClass: 'gl-text-red-500',
        },
      });
    });

    it('renders the panel title icon', () => {
      expect(findPanelTitleIcon().props('name')).toBe('error');
      expect(findPanelTitleIcon().classes()).toContain('gl-text-red-500');
    });
  });

  describe('with a subtitle', () => {
    beforeEach(() => {
      createWrapper({
        props: {
          subtitle: 'pochita',
        },
      });
    });

    it('renders the subtitle', () => {
      expect(wrapper.text()).toContain('pochita');
    });
  });

  describe('with a body slot', () => {
    beforeEach(() => {
      createWrapper({
        slots: {
          body: '<div data-testid="panel-body-slot"></div>',
        },
      });
    });

    it('renders the panel body', () => {
      expect(findByTestId('panel-body-slot').exists()).toBe(true);
    });
  });

  describe('with a filters slot', () => {
    beforeEach(() => {
      createWrapper({
        slots: {
          filters: '<div data-testid="panel-filters-slot">Filter Button</div>',
        },
      });
    });

    it('renders the panel filters', () => {
      expect(findByTestId('panel-filters-slot').exists()).toBe(true);
      expect(findByTestId('panel-filters-slot').text()).toBe('Filter Button');
    });

    it('renders the filters container', () => {
      expect(findPanelFiltersContainer().exists()).toBe(true);
    });

    it('renders the actions-filters container', () => {
      expect(findPanelActionsFiltersContainer().exists()).toBe(true);
    });
  });

  describe('with an alert message slot', () => {
    beforeEach(() => {
      createWrapper({
        scopedSlots: {
          'alert-message': '<div data-testid="panel-alert-message-slot">{{ props.panelId }}</div>',
        },
      });
    });

    it('renders the panel alert message', () => {
      expect(findByTestId('panel-alert-message-slot').exists()).toBe(true);
      expect(findByTestId('panel-alert-message-slot').text()).toContain('gl-dashboard-panel-id-');
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      createWrapper({
        props: {
          loading: true,
        },
      });
    });

    it('renders a loading icon', () => {
      expect(findLoadingIcon().exists()).toBe(true);
      expect(findLoadingDelayedIndicator().exists()).toBe(false);
    });

    it('renders the additional "Still loading" indicator if the data source is slow', async () => {
      await wrapper.setProps({
        loadingDelayed: true,
        loadingDelayedText: 'Still loading...',
      });
      await nextTick();

      expect(findLoadingIcon().exists()).toBe(true);
      expect(findLoadingDelayedIndicator().text()).toBe('Still loading...');
    });
  });

  describe('when loading with a body slot', () => {
    beforeEach(() => {
      createWrapper({
        props: {
          loading: true,
        },
        slots: {
          body: '<div data-testid="panel-body-slot"></div>',
        },
      });
    });

    it('does not render the panel body', () => {
      expect(findByTestId('panel-body-slot').exists()).toBe(false);
    });
  });

  describe('when there is a title', () => {
    beforeEach(() => {
      createWrapper({
        props: {
          title: 'Panel Title',
        },
      });
    });

    it('renders the panel title', () => {
      expect(findPanelTitle().text()).toBe('Panel Title');
    });
  });

  describe('when there is a title with a popover', () => {
    describe('with description and link', () => {
      beforeEach(() => {
        createWrapper({
          props: {
            title: 'Panel Title',
            titlePopover: {
              description: 'This is just information, %{linkStart}learn more%{linkEnd}',
              descriptionLink: '/foo',
            },
          },
        });
      });

      it('renders the panel title popover icon with special content', () => {
        expect(findPanelTitlePopoverIcon().exists()).toBe(true);
        expect(findPanelTitlePopover().text()).toBe('This is just information, learn more');
        expect(findPanelTitlePopoverLink().attributes('href')).toBe('/foo');
      });
    });

    describe('without description link', () => {
      beforeEach(() => {
        createWrapper({
          props: {
            title: 'Panel Title',
            titlePopover: {
              description: 'This is just information.',
            },
          },
        });
      });

      it('renders the panel title popover icon with description only', () => {
        expect(findPanelTitlePopoverIcon().exists()).toBe(true);
        expect(findPanelTitlePopoverLink().exists()).toBe(false);
        expect(findPanelTitlePopover().text()).toBe('This is just information.');
      });
    });

    describe('without description', () => {
      beforeEach(() => {
        createWrapper({
          props: {
            title: 'Panel Title',
            titlePopover: {
              descriptionLink: '/foo',
            },
          },
        });
      });

      it('does not render the panel title popover icon', () => {
        expect(findPanelTitlePopoverIcon().exists()).toBe(false);
      });
    });
  });

  describe('with info-popover slots', () => {
    const findInfoPopoverContent = () => findByTestId('custom-popover-content');
    const findInfoPopoverTitle = () => findByTestId('custom-popover-title');
    const infoPopoverSlotContent =
      '<div data-testid="custom-popover-content">Custom popover content</div>';
    const infoPopoverSlotTitle = '<div data-testid="custom-popover-title">Custom Title</div>';

    describe('with info-popover-content slot only', () => {
      beforeEach(() => {
        createWrapper({
          props: {
            title: 'Panel Title',
          },
          slots: {
            'info-popover-content': infoPopoverSlotContent,
          },
        });
      });

      it('renders the panel title popover icon', () => {
        expect(findPanelTitlePopoverIcon().exists()).toBe(true);
      });

      it('renders the custom popover content', () => {
        expect(findInfoPopoverContent().exists()).toBe(true);
        expect(findInfoPopoverContent().text()).toBe('Custom popover content');
      });
    });

    describe('with info-popover-title slot only', () => {
      beforeEach(() => {
        createWrapper({
          props: {
            title: 'Panel Title',
            titlePopover: {
              description: 'This should be shown, %{linkStart}learn more%{linkEnd}',
              descriptionLink: '/foo',
            },
          },
          slots: {
            'info-popover-title': infoPopoverSlotTitle,
          },
        });
      });

      it('renders the panel title popover icon', () => {
        expect(findPanelTitlePopoverIcon().exists()).toBe(true);
      });

      it('renders the custom popover title', () => {
        expect(findInfoPopoverTitle().exists()).toBe(true);
        expect(findInfoPopoverTitle().text()).toBe('Custom Title');
      });

      it('renders the prop-based content', () => {
        expect(findPanelTitlePopover().text()).toContain('This should be shown');
        expect(findPanelTitlePopoverLink().attributes('href')).toBe('/foo');
      });
    });

    describe('with both info-popover-title and info-popover-content slots', () => {
      beforeEach(() => {
        createWrapper({
          props: {
            title: 'Panel Title',
          },
          scopedSlots: {
            'info-popover-title': infoPopoverSlotTitle,
            'info-popover-content': infoPopoverSlotContent,
          },
        });
      });

      it('renders the panel title popover icon', () => {
        expect(findPanelTitlePopoverIcon().exists()).toBe(true);
      });

      it('renders both custom popover title and content', () => {
        expect(findByTestId('custom-popover-title').exists()).toBe(true);
        expect(findByTestId('custom-popover-title').text()).toBe('Custom Title');

        expect(findByTestId('custom-popover-content').exists()).toBe(true);
        expect(findByTestId('custom-popover-content').text()).toBe('Custom popover content');
      });
    });

    describe('slots take precedence over titlePopover prop', () => {
      beforeEach(() => {
        createWrapper({
          props: {
            title: 'Panel Title',
            titlePopover: {
              description: 'This should not be shown',
              descriptionLink: '/foo',
            },
          },
          slots: {
            'info-popover-content': infoPopoverSlotContent,
          },
        });
      });

      it('renders the popover icon', () => {
        expect(findPanelTitlePopoverIcon().exists()).toBe(true);
      });

      it('renders the slot content', () => {
        expect(findInfoPopoverContent().exists()).toBe(true);
        expect(findInfoPopoverContent().text()).toBe('Custom popover content');
      });

      it('does not render the prop-based content', () => {
        expect(findPanelTitlePopover().text()).not.toContain('This should not be shown');
        expect(findPanelTitlePopoverLink().exists()).toBe(false);
      });
    });
  });

  describe('with titlePopoverClasses', () => {
    it.each(['custom-popover-class', ['custom-popover-class'], { 'custom-popover-class': true }])(
      'passes the custom classes to the popover css-classes prop',
      (customClasses) => {
        createWrapper({
          props: {
            title: 'Panel Title',
            titlePopover: {
              description: 'This is just information.',
            },
            titlePopoverClasses: customClasses,
          },
        });

        expect(findPanelTitlePopover().props('cssClasses')).toEqual(customClasses);
      },
    );
  });

  describe('when there are actions', () => {
    const actions = [
      {
        text: 'Edit',
        action: () => {},
      },
      {
        text: 'Delete',
        variant: 'danger',
        action: () => {},
      },
    ];

    beforeEach(() => {
      createWrapper({
        props: {
          actions,
          actionsToggleText: 'Actions',
        },
        mountFn: mount,
      });
    });

    it('renders the panel actions dropdown', () => {
      expect(findPanelActionsDropdown().props('items')).toStrictEqual(actions);
      expect(findPanelActionsDropdown().props('toggleText')).toContain('Actions');
    });

    it('renders the panel action dropdown item', () => {
      expect(findPanelActionsDropdownItems()).toStrictEqual(
        actions.map((x) => ({
          text: x.text,
          variant: x.variant,
        })),
      );
    });

    it('renders the actions-filters container', () => {
      expect(findPanelActionsFiltersContainer().exists()).toBe(true);
    });
  });
});
