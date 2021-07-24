<template>
  <div class="vue3-container">
    <h1>This is an vue{{version}} page</h1>
    <Vue3Component :version="version" />
  </div>
</template>

<script>
import Vue3Component from "@/components/vue3";
import { ref } from '@vue/reactivity';

export default {
  name: 'Vue3Page',
  components: {
    Vue3Component
  },
  setup(props, context) {
    console.log('#### vue3 page props context ', props, context);
    const version = ref('3.x');
    return { version };
  }
}
</script>

<style lang="less">
.vue3-container {
  width: 100%;
}

</style>
