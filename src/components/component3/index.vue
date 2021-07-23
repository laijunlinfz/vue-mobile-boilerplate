<template>
  <div> this is a {{fullName}} component </div>
  <div v-for="item in list" :key="item.name">
    {{item.name}}
  </div>
</template>

<script>
/**
 * 组合式 API
 */
// reactive
import { ref, getCurrentInstance, onMounted, watch, computed } from "vue";
import { getComponentDataAsync } from '@/service';

export default {
  name: "Component3",
  props: {
    from: {
      type: String,
      require: true
    }
  },
  setup(props) {
    console.log('component3 props : ', props);

    // eslint-disable-next-line no-unused-vars
    const { ctx } = getCurrentInstance();

    /**
     * 新的 ref 函数使任何响应式变量在任何地方起作用
     * ref 接收参数并将其包裹在一个带有 value property 的对象中返回
     * 然后可以使用该 property 访问或更改响应式变量的值
     */
    const name = ref("vue");
    const version = ref("3.x");
    console.log(version) // { value: 3.x }
    console.log(version.value) // 3.x

    const list = ref([]);

    const getAboutData = async() => {
      const result = await getComponentDataAsync();
      const { data } = result || {};
      const { rows = [] } = data || {};
      list.value = rows;
    };

    onMounted(getAboutData);

    watch(list, (newValue, oldValue) => {
      console.log('###### watch ', list.value, newValue, oldValue);
    });

    const fullName = computed(() => {
      return `${name.value}${version.value}`;
    });

    return {
      name,
      version,
      list,
      fullName
    };
  }
}
</script>
