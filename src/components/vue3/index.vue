<template>
  <div>{{fullName}} component </div>
  <div v-for="item in list" :key="item.name">
    {{item.name}}
    {{from}}
  </div>
</template>

<script>
/**
 * 组合式 API
 */
// eslint-disable-next-line no-unused-vars
import { ref, toRefs, getCurrentInstance, onMounted, watch, computed, h, onBeforeMount, onBeforeUpdate, onUpdated } from "vue";
import { getComponentDataAsync } from '@/service';

export default {
  name: "Component3",
  props: {
    version: {
      type: String,
      require: true
    }
  },
  // 因为 props 是响应式的，你不能使用 ES6 解构，它会消除 prop 的响应性
  setup(props, context) {
    const { version } = toRefs(props);
    console.log('@@@@@ component3 props : ', version, props, context);

    // eslint-disable-next-line no-unused-vars
    const { ctx } = getCurrentInstance();

    /**
     * 新的 ref 函数使任何响应式变量在任何地方起作用
     * ref 接收参数并将其包裹在一个带有 value property 的对象中返回
     * 然后可以使用该 property 访问或更改响应式变量的值
     */
    const name = ref("vue");
    const list = ref([]);

    const getAboutData = async() => {
      const result = await getComponentDataAsync();
      const { data } = result || {};
      const { rows = [] } = data || {};
      list.value = rows;
    };

    /**
     * 对应生命周期钩子见
     * https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
     */
    onBeforeMount(() => {
      console.log('@@@@ onBeforeMount');
    });
    onMounted(() => {
      console.log('@@@@ onMounted');
      getAboutData()
    });
    onBeforeUpdate(() => {
      console.log('@@@@ onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('@@@@ onUpdated');
    });

    watch(list, (newValue, oldValue) => {
      console.log('###### watch ', list.value, newValue, oldValue);
    });

    const fullName = computed(() => {
      return `${name.value}${version.value}`;
    });

    // eslint-disable-next-line no-unused-vars
    const onClick = () => {
      console.log('##### onClicked');
    };

    return {
      name,
      list,
      fullName
    };
    
    // setup 还可以返回一个渲染函数
    // return () => h('div', [
    //   h('div', { onClick }, [`this is ${fullName.value}`])
    // ]);
  }
}
</script>
