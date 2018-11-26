<template>
  <div class="content limited m-t-7 m-b-7">
    <div class>
      <h1>GitLab Components</h1>
      <table 
        v-if="contentTree"
        class="m-t-6 m-b-6"
        style="width:65%"
      >
        <b-list-group tag="tbody">
          <b-list-group-item
            v-for="component in contentTree.components"
            :key="component.id"
            tag="tr"
          >
            <td>
              <nuxt-link
                :key="`link-${component.id}`"
                :to="`/components/${component.id}`"
              >{{ component.name }}</nuxt-link>
            </td>
            <td class="app-styles">
              <b-badge
                v-if="!component.hasInfo"
                class="float-right ml-1"
                variant="warning"
              >To-Do</b-badge>
              <b-badge
                v-if="component.hasVueComponent"
                class="float-right"
                variant="primary"
              >Vue</b-badge>
            </td>
          </b-list-group-item>
        </b-list-group>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentTree: null
    }
  },
  created() {
    this.$axios
      .$get(`/contents/contentTree.json`)
      .then(treeResult => {
        this.contentTree = treeResult
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e)
      })
  }
}
</script>
