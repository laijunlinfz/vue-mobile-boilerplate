<template>
  <div>{{ fullName }} component</div>
  <div v-for="item in list" :key="item.name">
    {{ item.name }}
  </div>
</template>

<script>
import { getComponentDataAsync } from "@/service";

export default {
  name: "Vue2Component",
  data() {
    return {
      name: "vue",
      list: [],
    };
  },
  props: {
    version: {
      type: String,
      require: true,
    },
  },
  computed: {
    fullName() {
      return `${this.name}${this.version}`;
    },
  },
  watch: {
    version(newVal) {
      console.log("##### component2 watch version : ", newVal);
    },
    list: {
      deep: true,
      handler(newList = []) {
        console.log("##### component2 watch newList : ", newList);
      },
    },
  },
  mounted() {
    console.log(`##### mounted ${this.version} ${this.from}`);
    this.getComponentData();
    this.loginTest();
  },
  methods: {
    async getComponentData() {
      const result = await getComponentDataAsync();
      const { data } = result || {};
      const { rows = [] } = data || {};
      this.list = rows;
    },

    loginTest() {
      const data = {
        username: "17688888888",
        password: "670b14728ad9902aecba32e22fa4f6bd",
      };
      const path = "vue2/loginVue2";
      this.$store.dispatch(path, data).then(() => {
        const vue2State = this.$store.state.vue2;
        const { name } = this.$store.getters;
        console.log("##### vue2 componet ", vue2State, name);
      });
    },
  },
};
</script>
