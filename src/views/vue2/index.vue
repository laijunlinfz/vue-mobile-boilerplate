<template>
  <div class="vue2-container">
    <h1>This is an vue{{version}} page</h1>
    <Vue2Componet :version="version" />
  </div>
</template>

<script>
import Vue2Componet from "@/components/vue2";
export default {
  name: 'Vue2Page',
  data() {
    return { version: '2.x' };
  },
  components: {
    Vue2Componet
  }
}
</script>

<style lang="less">
.vue2-container {
  width: 100%;
}

</style>
