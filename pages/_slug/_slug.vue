<template>
  <div class="content limited m-t-7 m-b-7">
    <div v-if="component">
      <component
        :is="component"
        :frontmatter-info="fmResult"
      />
    </div>
    <div v-else>
      Loading page ...
    </div>
  </div>
</template>

<script>
const getPost = () => ({
  component: import('../../components/componentinfo.vue'),
});
export default {
  data() {
    return {
      component: null,
      fmResult: null,
    };
  },
  beforeCreate() {
    this.$axios
      .$get(`/contents${this.$route.path}.json`)
      .then(fmResult => {
        this.fmResult = fmResult;
        this.component = () => getPost(this.$route.path);
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e);
      });
  },
};
</script>
