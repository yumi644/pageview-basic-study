<template>
  <div>
    <h1>这是子组件的插槽</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vue2_child_slotstudy",
  data() {
    return {
      msg: "这是子组件的插槽",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>