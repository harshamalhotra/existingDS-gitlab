<template>
  <TransitionRoot as="template" :show="isSidebarOpen">
    <Dialog class="gl-z-50 gl-relative lg:gl-hidden" @close="closeSidebar">
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
          <DialogPanel
            class="gl-mr-16 gl-relative gl-flex gl-w-full gl-max-w-xs gl-flex-1"
          >
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
                class="gl-w-16 gl-absolute gl-right-5 gl-top-0 gl-z-1 gl-flex gl-justify-center gl-pt-5"
              >
                <button
                  type="button"
                  class="gl-rounded-base gl-bg-white"
                  @click="closeSidebar"
                >
                  <span class="gl-sr-only">Close sidebar</span>
                  <XMarkIcon
                    class="gl-h-6 gl-w-6 gl-text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </TransitionChild>
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
              class="gl-flex gl-grow gl-flex-col gl-overflow-y-auto gl-bg-white"
            >
              <SidebarLogo />
              <SidebarItems @item-click="closeSidebar" />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Static sidebar for desktop -->
  <div
    class="lg:gl-z-50 gl-hidden lg:gl-fixed lg:gl-inset-y-0 lg:gl-flex lg:gl-w-34 lg:gl-flex-col"
    data-testid="desktopSidebar"
  >
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="gl-border-r gl-flex gl-grow gl-flex-col gl-overflow-y-auto gl-border-gray-200 gl-bg-white"
    >
      <SidebarLogo />
      <SidebarItems @item-click="closeSidebar" />
    </div>
  </div>

  <div
    class="gl-z-40 gl-sticky gl-top-0 gl-flex gl-items-center gl-gap-x-6 gl-bg-white gl-px-4 gl-py-4 gl-shadow-sm sm:gl-px-6 lg:gl-hidden"
  >
    <button
      type="button"
      class="-gl-m-2 gl-p-2 gl-text-gray-700 lg:gl-hidden"
      @click="openSidebar"
    >
      <span class="gl-sr-only">Open sidebar</span>
      <BarsIcon class="gl-h-6 gl-w-6" aria-hidden="true" />
    </button>
  </div>
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

const isSidebarOpen = ref(false);

const openSidebar = () => {
  isSidebarOpen.value = true;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>
