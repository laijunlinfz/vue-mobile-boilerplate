<template>
  <div class="about">
    <h1>This is an test page</h1>
    <Component2 from="test2" />
    <Component3 from="test3" />
  </div>
</template>

<script>
import Component2 from "@/components/component2";
import Component3 from "@/components/component3";
export default {
  name: 'About',
  components: {
    Component2,
    Component3
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
