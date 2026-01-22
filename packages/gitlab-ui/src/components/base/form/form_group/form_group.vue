<script>
import isString from 'lodash/isString';
import isPlainObject from 'lodash/isPlainObject';
import { BFormGroup } from '../../../../vendor/bootstrap-vue/src/components/form-group/form-group';

export default {
  name: 'GlFormGroup',
  components: {
    BFormGroup,
  },
  provide() {
    return {
      isInFormGroup: true,
      formGroupLabelState: this.formGroupLabelState,
    };
  },
  inheritAttrs: false,
  props: {
    /**
     * Additional CSS class(es) to apply to the label element.
     */
    labelClass: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },
    /**
     * Descriptive text to display below the label.
     */
    labelDescription: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * When true, displays optional text next to the label.
     */
    optional: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Text to display when the field is optional.
     */
    optionalText: {
      type: String,
      required: false,
      default: '(optional)',
    },
  },
  data() {
    return {
      formGroupLabelState: {
        id: null,
      },
    };
  },
  computed: {
    actualLabelClass() {
      const { labelClass } = this;
      const defaultClass = 'col-form-label';

      if (isString(labelClass)) {
        return `${labelClass} ${defaultClass}`;
      }
      if (Array.isArray(labelClass)) {
        return [...labelClass, defaultClass];
      }
      if (isPlainObject(labelClass)) {
        return { ...labelClass, [defaultClass]: true };
      }
      return defaultClass;
    },
    hasLabelDescription() {
      // eslint-disable-next-line @gitlab/vue-prefer-dollar-scopedslots
      return Boolean(this.labelDescription || this.$slots['label-description']);
    },
  },
  mounted() {
    this.$nextTick(() => {
      // BFormGroup stores the generated ID in its safeId() method
      // Access it via the component's internal state
      const labelId = this.$refs.bFormGroup?.safeId('_BV_label_');
      if (labelId) {
        this.formGroupLabelState.id = labelId;
      }
    });
  },
};
</script>
<template>
  <b-form-group v-bind="$attrs" class="gl-form-group" :label-class="actualLabelClass">
    <template v-if="$attrs.label || $scopedSlots.label" #label>
      <slot name="label">
        {{ $attrs.label }}
        <span v-if="optional" class="optional-label" data-testid="optional-label">{{
          optionalText
        }}</span>
      </slot>
      <div v-if="hasLabelDescription" data-testid="label-description" class="label-description">
        <slot name="label-description">{{ labelDescription }}</slot>
      </div>
    </template>

    <!-- eslint-disable-next-line @gitlab/vue-prefer-dollar-scopedslots -->
    <template v-for="slot in Object.keys($slots)" #[slot]>
      <slot :name="slot"></slot>
    </template>
  </b-form-group>
</template>
