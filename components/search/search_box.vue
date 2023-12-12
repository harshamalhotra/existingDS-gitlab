<script>
import lunr from 'lunr';
import { GlSearchBoxByType, GlDropdownItem } from '../../helpers/gitlab_ui';
import fixUrlInReviewApp from '../../helpers/fix_url_in_review_app';
import SearchResult from './search_result.vue';

const STATUS_SEARCHING = 'STATUS_SEARCHING';
const STATUS_NO_RESULTS = 'STATUS_NO_RESULTS';
const STATUS_ERROR = 'STATUS_ERROR';
const STATUS_MESSAGE = {
  [STATUS_SEARCHING]: 'Searching...',
  [STATUS_NO_RESULTS]: 'No results found',
  [STATUS_ERROR]: 'Could not load search index',
};

export default {
  components: {
    GlSearchBoxByType,
    GlDropdownItem,
    SearchResult,
  },
  data() {
    return {
      statusId: null,
      searchIndex: null,
      searchMeta: null,
      searchText: '',
      searchResults: [],
      resultsVisible: false,
    };
  },
  async fetch() {
    const url = fixUrlInReviewApp(`/_nuxt/search-index/en.json`);
    try {
      const searchJson = await fetch(url).then((res) => {
        if (res.status === 200) {
          return res.json();
        }

        return this.setStatus(STATUS_ERROR);
      });
      this.searchMeta = searchJson.metas || null;
      this.searchIndex = lunr.Index.load(searchJson);
    } catch {
      this.setStatus(STATUS_ERROR);
    }
  },
  computed: {
    statusMsg() {
      return STATUS_MESSAGE[this.statusId] || '';
    },
  },
  watch: {
    searchText(searchText) {
      if (!searchText) {
        this.closeResults();
        return;
      }

      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => this.search(searchText), 200);
    },
    resultsVisible(resultsVisible) {
      if (resultsVisible) {
        this.addBodyListener();
      } else {
        this.removeBodyListener();
      }
    },
  },
  methods: {
    addBodyListener() {
      document.body.addEventListener('mousedown', this.bodyListener);
    },
    removeBodyListener() {
      document.body.removeEventListener('mousedown', this.bodyListener);
    },
    bodyListener(event) {
      if (this.$refs.lunr && !this.$refs.lunr.contains(event.target)) {
        this.resultsVisible = false;
      }
    },
    openResults() {
      this.resultsVisible = true;
    },
    closeResults() {
      this.resultsVisible = false;
      this.removeBodyListener();
      this.clearStatus();
    },
    search(txt) {
      if (!this.searchIndex) {
        return;
      }

      this.setStatus(STATUS_SEARCHING);

      const searchTokens = txt.split(' ').map((term) => {
        // Remove ':' to prevent field-specific search
        // https://lunrjs.com/guides/searching.html#fields
        const searchTerm = term.replace(':', '');

        if (!searchTerm) {
          return '';
        }

        // Add a wildcard to match words that begin with the search term
        // https://lunrjs.com/guides/searching.html#wildcards
        let queryString = `${searchTerm}*`;

        // Add a bit of fuzziness to the search term
        // https://lunrjs.com/guides/searching.html#fuzzy-matches
        queryString += ` ${searchTerm}~1`;

        return queryString;
      });
      const searchResults = this.searchIndex.search(searchTokens.join(' '));
      this.searchResults = searchResults.filter(({ score }) => score > 0);

      if (!this.searchResults?.length) {
        this.setStatus(STATUS_NO_RESULTS);
      } else {
        this.clearStatus();
      }

      this.openResults();
    },
    setStatus(id) {
      this.statusId = id;
    },
    clearStatus() {
      this.statusId = null;
    },
    getResultMeta(ref) {
      return this.searchMeta?.[ref];
    },
    getFocusedResult() {
      return this.$refs.results?.querySelector(':focus');
    },
    keyEnter() {
      const el = this.getFocusedResult();
      if (el) {
        el.click();
        this.closeResults();
      }
    },
    keyUp() {
      if (!this.resultsVisible) {
        return;
      }

      const el = this.getFocusedResult();
      if (!el) {
        return;
      }

      const previousResult = el.parentElement.previousSibling;
      if (previousResult.querySelector) {
        previousResult.querySelector('a').focus();
      } else {
        this.$refs.input.$el.querySelector('input').focus();
      }
    },
    keyDown() {
      if (!this.resultsVisible) {
        return;
      }

      const el = this.getFocusedResult();
      if (!el) {
        this.$refs.results.querySelector(':first-child a')?.focus();
        return;
      }

      const nextResult = el.parentElement.nextSibling?.querySelector('a');
      if (nextResult) {
        nextResult.focus();
      }
    },
    onFocus() {
      if (this.searchResults.length) {
        this.resultsVisible = true;
      }
    },
  },
};
</script>

<template>
  <div
    ref="lunr"
    class="app-styles gl-relative"
    @keydown.enter.prevent="keyEnter"
    @keydown.up.prevent="keyUp"
    @keydown.down.prevent="keyDown"
    @keydown.esc="closeResults"
  >
    <gl-search-box-by-type
      ref="input"
      v-model="searchText"
      aria-label="Search"
      aria-haspopup="true"
      :aria-expanded="resultsVisible"
      autocomplete="off"
      spellcheck="false"
      @focus="onFocus"
    />
    <ul v-if="resultsVisible" role="menu" tabindex="-1" class="gl-new-dropdown dropdown-menu show">
      <div class="gl-new-dropdown-inner">
        <div ref="results" class="gl-new-dropdown-contents">
          <gl-dropdown-item v-if="statusMsg">
            {{ statusMsg }}
          </gl-dropdown-item>
          <search-result
            v-for="{ ref } in searchResults"
            :key="ref"
            :meta="getResultMeta(ref)"
            @click.prevent="closeResults"
          />
        </div>
      </div>
    </ul>
  </div>
</template>
