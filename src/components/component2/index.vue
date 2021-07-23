<template>
  <div>this is a {{ fullName }} component</div>
  <div v-for="item in list" :key="item.name">
    {{ item.name }}
  </div>
</template>

<script>
import { getComponentDataAsync } from '@/service';

export default {
  name: "Component2",
  data() {
    return {
      name: 'vue',
      version: '2.x',
      list: []
    }
  },
  props: {
    from: {
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
