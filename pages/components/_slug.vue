<template>
  <div class="content limited m-t-7 m-b-7">
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
  component: import(`./componentinfo.vue`),
})
export default {
  data() {
    return {
      component: null,
      fmResult: null,
    }
  },
  beforeCreate() {
    this.$axios
      .$get(`/contents/components/${this.$route.params.slug}.json`)
      .then(fmResult => {
        this.fmResult = fmResult
        this.component = () => getPost(this.$route.params.slug)
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e)
      })
  },
}
</script>
