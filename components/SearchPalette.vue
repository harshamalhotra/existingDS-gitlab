<template>
  <div>
    <TransitionRoot
      :show="props.open"
      as="template"
      appear
      @after-leave="clearSearch"
    >
      <Dialog class="gl-relative gl-z-200" @close="closeSearch">
        <TransitionChild
          as="template"
          class="gl-opacity-0"
          enter="gl-ease-out gl-duration-300"
          enter-from="gl-opacity-0"
          enter-to="gl-opacity-100"
          leave="gl-ease-in gl-duration-200"
          leave-from="gl-opacity-100"
          leave-to="gl-opacity-0"
        >
          <div
            class="gl-fixed gl-inset-0 gl-bg-alpha-dark-40 gl-transition-opacity"
          />
        </TransitionChild>

        <div
          class="gl-fixed gl-inset-0 gl-z-200 gl-w-screen gl-overflow-y-auto gl-p-4 sm:gl-p-6 md:gl-p-20"
        >
          <TransitionChild
            as="template"
            class="gl-scale-95 gl-opacity-0"
            enter="gl-ease-out gl-duration-300"
            enter-from="gl-opacity-0 gl-scale-95"
            enter-to="gl-opacity-100 gl-scale-100"
            leave="gl-ease-in gl-duration-200"
            leave-from="gl-opacity-100 gl-scale-100"
            leave-to="gl-opacity-0 gl-scale-95"
          >
            <DialogPanel
              class="gl-mx-auto gl-max-w-75 gl-transform gl-divide-y gl-divide-gray-100 gl-overflow-hidden gl-rounded-lg gl-bg-white gl-shadow gl-transition-all"
            >
              <Combobox @update:modelValue="onSelect">
                <div class="gl-relative">
                  <SearchIcon
                    class="gl-pointer-events-none gl-absolute gl-left-5 gl-top-1/2 gl-h-6 gl-w-6 -gl-translate-y-1/2 gl-text-gray-400"
                  />
                  <ComboboxInput
                    v-model="query"
                    class="gl-h-10 gl-w-full gl-border-0 gl-bg-transparent gl-pl-10 gl-pr-4 placeholder:gl-text-gray-400 focus:gl-ring-0"
                    placeholder="Search..."
                    aria-label="Search..."
                    :displayValue="(searchResult) => searchResult.title"
                    @change="onInputChange"
                  />
                </div>

                <ComboboxOptions
                  v-if="searchResults.length > 0"
                  static
                  class="gl-max-h-75 gl-scroll-py-2 gl-overflow-y-auto gl-py-3 gl-text-sm gl-text-gray-800"
                >
                  <ComboboxOption
                    v-for="searchResult in searchResults"
                    :key="searchResult.id"
                    :value="searchResult"
                    as="template"
                  >
                    <template #default="{ active }">
                      <li
                        :class="[
                          'gl-cursor-default gl-select-none gl-px-4 gl-py-2 gl-text-base gl-font-normal gl-text-gray-700',
                          active && 'gl-bg-gray-50 gl-text-purple-500',
                        ]"
                      >
                        {{ searchResult.title }}
                      </li>
                    </template>
                  </ComboboxOption>
                </ComboboxOptions>

                <p
                  v-else-if="query !== ''"
                  class="gl-p-4 gl-text-sm gl-text-gray-500"
                >
                  No results found.
                </p>
              </Combobox>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import MiniSearch from "minisearch";
import hotkeys from "hotkeys-js";
import SearchIcon from "../assets/icons/search.svg";
import { MOCK_SEARCH_RESULTS_FOR_DEVELOPMENT } from "../constants";

const query = ref("");
const miniSearch = ref({});
const searchResults = ref([]);

const emit = defineEmits(["searchPathChange", "close", "open", "ready"]);
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});

const config = useRuntimeConfig();
const router = useRouter();

watch(query, (newQuery) => {
  if (newQuery === "") {
    searchResults.value = [];

    return;
  }

  // TODO: make search results available in development
  if (!config.public.isProduction) {
    searchResults.value = MOCK_SEARCH_RESULTS_FOR_DEVELOPMENT;

    return;
  }

  searchResults.value = miniSearch.value.search(newQuery);
});

const onInputChange = ({ target }) => {
  query.value = target.value;
};

const closeSearch = () => {
  emit("close");
};

const clearSearch = () => {
  query.value = "";
  searchResults.value = [];
};

const onSelect = (searchResult) => {
  emit("searchPathChange", searchResult.path);
  router.push(searchResult.path);
  closeSearch();
  searchResults.value = [];
};

const fetchSearchIndex = async () => {
  try {
    const response = await fetch("./search-index.json");

    if (!response.ok) {
      // Fail silently, don't show search button
      return {};
    }

    return await response.json();
  } catch {
    return {};
  }
};

const setupHotKeys = () => {
  hotkeys("command+k,command+p", (event) => {
    event.preventDefault();
    emit("open");
  });
};

onMounted(async () => {
  if (!config.public.isProduction) {
    emit("ready");
    setupHotKeys();

    return;
  }

  const json = await fetchSearchIndex();

  if (!Object.keys(json).length) {
    return;
  }

  miniSearch.value = await MiniSearch.loadJSAsync(json, {
    fields: ["title", "text"],
    searchOptions: {
      boost: { title: 2 },
      fuzzy: (term) => (term.length > 3 ? 0.2 : null),
      prefix: true,
    },
  });

  setupHotKeys();
  emit("ready");
});
</script>
