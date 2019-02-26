<template>
  <div>
    <span id="tags" v-on:click="searchText = tag.name" class="badge badge-pill badge-danger">{{tag.name}} </span>
  </div>
</template>

<script>
  export default {
    props: {
      tag: Object
    }
  }
</script>

<style scoped>

</style>