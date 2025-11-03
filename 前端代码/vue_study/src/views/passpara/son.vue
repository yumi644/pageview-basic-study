<template>
  <div>
    <!-- <p>子组件接收到父组件传参{{ props.name }},{{ props.age }}</p> -->
    <button @click="handleClick">子传参</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const school = ref("清华");
const grade = ref("2班");
//父传子
const props = defineProps({
  name: { String, required: true, default: "张三" },
  age: {
    type: Number,
    required: false,
    default: 18,
  },
});

//子传父
const emit = defineEmits(["update"]);
const handleClick = () => {
  emit("update", { school, grade });
};
// 不要在顶层直接调用 emit，应该在用户交互时调用（如点击按钮）
</script>

<style lang="scss" scoped>
</style>