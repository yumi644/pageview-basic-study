<template>
  <div>
    <h1>这里是{{ msg }}</h1>
    <vue2_child_slotstudy>
      <button @click="fn">++{{ count }}</button>
    </vue2_child_slotstudy>
  </div>
</template>
<script>
import vue2_child_slotstudy from "./vue2_child_slotstudy.vue";
const api='https://api.github.com';
export default {
  name: "vue2",
  components: {
    vue2_child_slotstudy,
  },
  
  data() {
    return {
      count: 0,
      msg: "vue2页面",
    };
  },
  methods: {
    fn() {
      this.count++;
    },
  },
};
</script>

<style>
</style>