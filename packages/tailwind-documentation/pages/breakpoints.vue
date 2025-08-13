<template>
  <div>
    <PageTitle />
    <div class="gl-w-full gl-overflow-x-auto">
      <table
        class="gl-w-full gl-table-auto gl-border-collapse gl-divide-y gl-divide-gray-300"
      >
        <thead>
          <tr>
            <th
              scope="col"
              class="gl-p-5 gl-text-left gl-font-semibold gl-text-gray-900"
            >
              Breakpoint prefix
            </th>
            <th
              scope="col"
              class="gl-p-5 gl-text-left gl-font-semibold gl-text-gray-900"
            >
              CSS
            </th>
          </tr>
        </thead>
        <tbody class="gl-divide-y gl-divide-gray-200">
          <tr
            v-for="(css, breakpoint) in resolvedVariants.breakpoints"
            :key="breakpoint"
          >
            <td
              class="gl-whitespace-nowrap gl-p-5 gl-text-sm gl-text-blue-600 gl-font-monospace"
            >
              {{ breakpoint }}
            </td>
            <td
              class="gl-whitespace-nowrap gl-p-5 gl-text-sm gl-text-purple-600 gl-font-monospace"
            >
              {{ css }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { CATEGORY_LAYOUT } from "../constants";

const resolvedVariants = inject("resolvedVariants");

definePageMeta({
  title: "Breakpoints",
  category: CATEGORY_LAYOUT,
  tailwindDocsLink: "/responsive-design",
});
</script>
