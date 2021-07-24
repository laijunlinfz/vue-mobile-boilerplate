<template>
  <div>{{ fullName }} component</div>
  <div v-for="item in list" :key="item.name">
    {{ item.name }}
  </div>
</template>

<script>
import { getComponentDataAsync } from '@/service';

export default {
  name: "Vue2Component",
  data() {
    return {
      name: 'vue',
      list: []
    }
  },
  props: {
    version: {
      type: String,
      require: true
    }
  },
  computed: {
    fullName() {
      return `${this.name}${this.version}`;
    }
  },
  watch: {
    version(newVal) {
        console.log('##### component2 watch version : ', newVal);
    },
    list: {
      deep: true,
      handler(newList = []) {
        console.log('##### component2 watch newList : ', newList);
      }
    }
  },
  mounted() {
    console.log(`##### mounted ${this.version} ${this.from}`);
    this.getComponentData();
  },
  methods: {
    async getComponentData() {
      const result = await getComponentDataAsync();
      const { data } = result || {};
      const { rows = [] } = data || {};
      this.list = rows;
    }
  }
}
</script>
