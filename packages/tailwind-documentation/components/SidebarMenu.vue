<template>
  <TransitionRoot as="template" :show="isSidebarOpen">
    <Dialog class="gl-z-50 gl-relative md:gl-hidden" @close="closeSidebar">
      <TransitionChild
        as="template"
        class="gl-opacity-0"
        enter="gl-transition-opacity gl-ease-linear gl-duration-300"
        enter-from="gl-opacity-0"
        enter-to="gl-opacity-100"
        leave="gl-transition-opacity gl-ease-linear gl-duration-300"
        leave-from="gl-opacity-100"
        leave-to="gl-opacity-0"
      >
        <div class="gl-fixed gl-inset-0 gl-bg-alpha-dark-40" />
      </TransitionChild>

      <div class="gl-fixed gl-inset-0 gl-flex" data-testid="mobileSidebar">
        <TransitionChild
          as="template"
          class="-gl-translate-x-full"
          enter="gl-transition gl-ease-in-out gl-duration-300 gl-transform"
          enter-from="-gl-translate-x-full"
          enter-to="gl-translate-x-0"
          leave="gl-transition gl-ease-in-out gl-duration-300 gl-transform"
          leave-from="gl-translate-x-0"
          leave-to="-gl-translate-x-full"
        >
          <DialogPanel class="gl-mr-16 gl-flex gl-w-full gl-max-w-xs gl-flex-1">
            <TransitionChild
              as="template"
              class="gl-opacity-0"
              enter="gl-ease-in-out gl-duration-300"
              enter-from="gl-opacity-0"
              enter-to="gl-opacity-100"
              leave="gl-ease-in-out gl-duration-300"
              leave-from="gl-opacity-100"
              leave-to="gl-opacity-0"
            >
              <div
                class="gl-w-16 gl-absolute gl-right-3 gl-top-3 gl-z-1 gl-flex gl-justify-center"
              >
                <button
                  type="button"
                  class="gl-rounded-base gl-bg-default"
                  @click="closeSidebar"
                >
                  <span class="gl-sr-only">Close sidebar</span>
                  <XMarkIcon
                    class="gl-h-6 gl-w-6 gl-text-strong"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </TransitionChild>
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
              class="gl-flex gl-grow gl-flex-col gl-overflow-y-auto gl-bg-default"
            >
              <SidebarLogo :showSearchButton="false" />
              <SidebarItems
                :pathFromSearch="pathFromSearch"
                @itemClick="closeSidebar"
              />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Static sidebar for desktop -->
  <div
    class="md:gl-z-50 gl-hidden md:gl-fixed md:gl-inset-y-0 md:gl-flex md:gl-w-[16rem] md:gl-flex-col"
    data-testid="desktopSidebar"
  >
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="gl-border-r gl-flex gl-grow gl-flex-col gl-overflow-y-auto gl-bg-subtle"
    >
      <SidebarLogo :showSearchButton="isSearchReady" @openSearch="openSearch" />
      <SidebarItems
        :pathFromSearch="pathFromSearch"
        @itemClick="closeSidebar"
      />
    </div>
  </div>

  <div
    class="gl-z-40 gl-fixed gl-top-0 gl-flex gl-h-[3.25rem] gl-w-full gl-items-center gl-justify-between gl-gap-x-6 gl-bg-subtle gl-px-4 gl-shadow-sm md:gl-hidden"
  >
    <button
      type="button"
      class="-gl-m-2 gl-p-2 gl-text-strong md:gl-hidden"
      @click="openSidebar"
    >
      <span class="gl-sr-only">Open sidebar</span>
      <BarsIcon class="gl-h-6 gl-w-6" aria-hidden="true" />
    </button>
    <OpenSearchButton v-if="isSearchReady" @openSearch="openSearch" />
  </div>
  <SearchPalette
    :open="isSearchOpen"
    @searchPathChange="onSearchPathChange"
    @close="closeSearch"
    @open="openSearch"
    @ready="onSearchReady"
  />
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import BarsIcon from "~/assets/icons/bars.svg";
import XMarkIcon from "~/assets/icons/x-mark.svg";

const route = useRoute();
const isSidebarOpen = ref(false);
const isSearchOpen = ref(false);
const isSearchReady = ref(false);
const pathFromSearch = ref("");

watch(
  () => route.path,
  (newPath) => {
    if (newPath !== pathFromSearch.value) {
      pathFromSearch.value = "";
    }
  },
);

const openSidebar = () => {
  isSidebarOpen.value = true;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const openSearch = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
};

const onSearchReady = () => {
  isSearchReady.value = true;
};

const onSearchPathChange = (searchPath) => {
  pathFromSearch.value = searchPath;
};
</script>
