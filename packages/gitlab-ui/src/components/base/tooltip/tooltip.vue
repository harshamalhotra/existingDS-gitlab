<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { BTooltip } from '../../../vendor/bootstrap-vue/src/components/tooltip/tooltip';
import { tooltipDelay } from '../../../utils/constants';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import tooltipMixin from '../../mixins/tooltip_mixin';
import { getGlTooltipDefaultContainer } from '../../../directives/tooltip/container';

const tooltipRefName = 'bvTooltip';

export default {
  name: 'GlTooltip',
  tooltipDelay,
  components: {
    BTooltip,
  },
  mixins: [tooltipMixin(tooltipRefName)],
  inheritAttrs: false,
  tooltipRefName,
  getGlTooltipDefaultContainer,
};
</script>

<template>
  <b-tooltip
    :ref="$options.tooltipRefName"
    v-bind="$attrs"
    :container="$attrs.container || $options.getGlTooltipDefaultContainer()"
    :delay="$options.tooltipDelay"
    v-on="$listeners"
  >
    <!-- @slot Tooltip content -->
    <slot></slot>
  </b-tooltip>
</template>
