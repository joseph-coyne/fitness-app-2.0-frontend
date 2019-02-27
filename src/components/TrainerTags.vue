<template>
    <span id="tags" class="pointer badge badge-pill badge-danger">{{tag.name}} </span>
</template>

<script>
  export default {
    props: {
      tag: Object
    }
  }
</script>

<style scoped>
.pointer {
  cursor: pointer;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  }
</style>