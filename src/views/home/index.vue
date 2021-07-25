<template>
  <div class="home-container">
    <img class="avatar" alt="avatarUrl" :src="avatarUrl" />
    <p class="name" >{{name}}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: "Home",
  setup() {
    const store = useStore();
    const name = computed(() => store.getters.name);
    const avatarUrl = computed(() => store.getters.avatarUrl);
    return { name, avatarUrl };
  }
};

</script>

<style lang="less">
.home-container {
  width: 100%;
  // display: flex;
  // justify-items: center;
  // align-content: center;
  margin: auto;
  .avatar {
    width: 3rem;
    display: block;
    margin: 5rem auto 0 auto;
  }
  .name {
    width: 100%;
    margin: auto;
    font-size: 0.6rem;
    text-align: center;
  }
}
</style>
