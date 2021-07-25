<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import { setStore, getStore } from '@/utils/sessionStorage';

export default {
  name: "App",
  setup() {
    // 修复刷新清空store问题
    const store = useStore();
    onBeforeMount(() => {
      // 在页面加载时读取sessionStorage里的状态信息
      const curSessionStore = getStore();
      if (Object.keys(curSessionStore).length > 0) {
        store.replaceState({ ...store.state, ...curSessionStore });
      }
      // 在页面刷新时将vuex里的信息保存到sessionStorage里
      // beforeunload事件在页面刷新时先触发
      window.addEventListener("beforeunload", () => {
        setStore(store.state);
      });
    });
  },
};
</script>
