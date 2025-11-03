<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <LadderButton @click="handleClick">默认按钮</LadderButton>
  </div>
</template>

<script>
export default {
  name: "Aidesigner",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
</style>