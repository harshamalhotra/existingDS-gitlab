<template>
  <div class="gl-w-full gl-overflow-x-auto">
    <table
      class="gl-w-full gl-table-auto gl-border-collapse gl-divide-y gl-divide-strong"
    >
      <thead>
        <tr>
          <th
            scope="col"
            class="gl-p-4 gl-text-left gl-font-semibold gl-text-strong"
          >
            Class
          </th>
          <th
            scope="col"
            class="gl-p-4 gl-text-left gl-font-semibold gl-text-strong"
          >
            Properties
          </th>
          <th
            v-if="props.showColorSwatch"
            scope="col"
            class="gl-p-4 gl-text-left gl-font-semibold gl-text-strong"
          >
            Color
          </th>
        </tr>
      </thead>
      <tbody class="gl-divide-y gl-divide-default">
        <tr v-for="(properties, className) in utilities" :key="className">
          <td
            class="gl-whitespace-nowrap gl-p-4 gl-text-sm gl-text-link gl-font-bold gl-font-monospace"
          >
            {{ className }}
          </td>
          <td
            class="gl-whitespace-nowrap gl-p-4 gl-text-sm gl-text-strong gl-font-monospace"
          >
            <div
              v-for="(value, property) in properties"
              :key="`${property}-${useId()}`"
            >
              {{ property }}: {{ value }}; <PixelValue :value="value" />
            </div>
          </td>
          <td v-if="props.showColorSwatch" class="gl-p-4">
            <div
              :style="{ backgroundColor: Object.values(properties)[0] }"
              class="gl-inline-block gl-h-7 gl-w-7 gl-rounded-sm gl-align-middle"
              data-testid="colorSwatch"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import camelCase from "lodash/camelCase";

const resolvedUtilities = inject("resolvedUtilities");
const route = useRoute();

const props = defineProps({
  showColorSwatch: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const utilities = computed(
  () => resolvedUtilities[camelCase(route.name)].utilities,
);
</script>
