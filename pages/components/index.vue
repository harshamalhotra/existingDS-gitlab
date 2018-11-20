<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="">
      <h1>GitLab Components</h1>
      <div
        v-if="contentTree"
        class="mt-3"
      >
        <b-list-group>
          <b-list-group-item 
            v-for="component in contentTree.components"
            :key="component.id"
          >
            <nuxt-link 
              :key="`link-${component.id}`"
              :to="`/components/${component.id}`"
              class="nav-sidebar__section-items-anchor"
            >
              {{ component.name }}
            </nuxt-link>
            <b-badge
              v-if="component.hasVueComponent"
              class="float-right ml-1"
              variant="primary"
            >
              Vue
            </b-badge>
            <b-badge
              v-if="!component.hasInfo"
              class="float-right"
              variant="warning"
            >
              To-Do
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentTree: null,
    };
  },
  created() {
    this.$axios
      .$get(`/contents/contentTree.json`)
      .then(treeResult => {
        this.contentTree = treeResult;
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e);
      });
  },
};
</script>
