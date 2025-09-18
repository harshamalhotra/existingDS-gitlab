<template>
  <nav aria-labelledby="nav-heading" class="gl-flex gl-flex-1 gl-flex-col gl-px-2 gl-py-3">
    <h2 id="nav-heading" class="gl-sr-only">Main navigation</h2>
    <ul class="gl-flex gl-flex-1 gl-flex-col gl-gap-3">
      <li
        v-for="(categoryItems, category, index) in sidebarItems"
        :key="category"
        class="gl-text-size-h2 gl-font-semibold"
      >
        <div aria-hidden="true" class="gl-py-2 gl-pl-4 gl-pr-3 gl-text-sm gl-font-bold">
          {{ category }}
        </div>
        <ul :aria-label="category" class="gl-flex gl-flex-1 gl-flex-col gl-gap-1">
          <li v-for="categoryItem in categoryItems" :key="categoryItem.name">
            <RouterLink
              ref="routerLink"
              :to="categoryItem.path"
              class="gl-action-neutral-colors gl-leading-6 gl-group gl-relative gl-block gl-rounded-default gl-leading-normal gl-p-3 gl-pl-4 gl-text-base !gl-no-underline gl-font-normal"
              active-class="active-sidebar-link gl-bg-strong"
              @click="$emit('itemClick')"
            >
              <div
                class="gl-absolute gl-bottom-[3px] gl-left-[3px] gl-top-[3px] gl-hidden gl-w-[3px] gl-rounded-default gl-bg-purple-500 group-[.active-sidebar-link]:gl-block"
              />
              {{ categoryItem.meta.title }}
            </RouterLink>
          </li>
        </ul>
        <div v-if="index !== Object.keys(sidebarItems).length - 1" class="gl-m-3 gl-border-b"></div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { CATEGORIES } from "../constants";

const props = defineProps({
  pathFromSearch: {
    type: String,
    required: true,
  },
});

defineEmits(["itemClick"]);

const route = useRoute();
const router = useRouter();
const routerLinks = useTemplateRef("routerLink");

const scrollToActiveLink = (path) => {
  const activeRouterLink = routerLinks.value.find(
    (routerLink) => routerLink.to === path,
  );

  activeRouterLink?.$el?.scrollIntoView({ block: "center" });
};

watch(
  () => props.pathFromSearch,
  (newPath) => {
    if (newPath === "") {
      return;
    }

    scrollToActiveLink(newPath);
  },
);

onMounted(() => {
  scrollToActiveLink(route.path);
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
