<template>
  <div class="content limited m-t-7 m-b-8">
    <div v-if="component">
      <component
        :is="component"
        :frontmatter-info="fmResult"
      />
    </div>
    <div v-else>
      Loading component ...
    </div>
  </div>
</template>

<script>
const getPost = () => ({
  component: import(`../../components/componentinfo.vue`),
});
export default {
  data() {
    return {
      component: null,
      fmResult: null,
    };
  },
  editThisPage: {
    resolve: ({ route }) => `contents/components/${route.params.slug}.md`,
  },
  beforeCreate() {
    this.$axios
      .$get(`/contents/components/${this.$route.params.slug}.json`)
      .then(fmResult => {
        this.fmResult = fmResult;
        this.component = () => getPost(this.$route.params.slug);
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e);
      });
  },
};
</script>
