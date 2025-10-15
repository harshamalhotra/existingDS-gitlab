<template>
  <div>
    <PageTitle />
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
              Breakpoint prefix
            </th>
            <th
              scope="col"
              class="gl-p-4 gl-text-left gl-font-semibold gl-text-strong"
            >
              CSS
            </th>
          </tr>
        </thead>
        <tbody class="gl-divide-y gl-divide-default">
          <tr
            v-for="(css, breakpoint) in resolvedVariants.breakpoints"
            :key="breakpoint"
          >
            <td
              class="gl-whitespace-nowrap gl-p-4 gl-text-sm gl-text-link gl-font-monospace"
            >
              {{ breakpoint }}
            </td>
            <td
              class="gl-whitespace-nowrap gl-p-4 gl-text-sm gl-text-strong gl-font-monospace"
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
