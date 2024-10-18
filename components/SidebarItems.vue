<template>
  <nav class="gl-flex gl-flex-1 gl-flex-col gl-pb-8 gl-pt-5">
    <ul role="list" class="gl-flex gl-flex-1 gl-flex-col gl-gap-y-4 gl-px-5">
      <li
        v-for="(categoryItems, category) in sidebarItems"
        :key="category"
        class="gl-text-size-h2 gl-font-semibold"
      >
        {{ category }}
        <ul class="gl-mt-2 gl-flex gl-flex-1 gl-flex-col gl-gap-y-2">
          <li v-for="categoryItem in categoryItems" :key="categoryItem.name">
            <RouterLink
              ref="routerLink"
              :to="categoryItem.path"
              class="gl-leading-6 gl-group gl-relative gl-block gl-rounded-base gl-px-5 gl-py-2 gl-text-base gl-font-normal gl-text-gray-700 hover:gl-bg-gray-50 hover:gl-text-purple-500"
              active-class="active-sidebar-link gl-bg-gray-50 gl-text-purple-500"
              @click="$emit('itemClick')"
            >
              <div
                class="gl-absolute gl-bottom-0 gl-left-0 gl-top-0 gl-hidden gl-w-2 gl-rounded-bl-base gl-rounded-tl-base gl-bg-purple-500 group-[.active-sidebar-link]:gl-block"
              />
              {{ categoryItem.meta.title }}
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { CATEGORIES } from "../constants";

defineEmits(["itemClick"]);

const route = useRoute();
const router = useRouter();
const routerLinks = useTemplateRef("routerLink");

onMounted(() => {
  const activeRouterLink = routerLinks.value.find(
    (routerLink) => routerLink.to === route.path,
  );

  activeRouterLink?.$el?.scrollIntoView({ block: "center" });
});

const sidebarItems = computed(() =>
  router.getRoutes().reduce(
    (accumulator, route) => {
      const {
        meta: { category },
      } = route;

      accumulator[category]?.push(route);

      return accumulator;
    },
    CATEGORIES.reduce(
      (accumulator, category) => ({
        ...accumulator,
        [category]: [],
      }),
      {},
    ),
  ),
);
</script>
