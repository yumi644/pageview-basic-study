<template>
  <div>
    <slot></slot>
    <h1>vue3_child_slotstudy</h1>
    <p>count: {{ count }}</p>
    <p>obj: {{ obj.name }} {{ obj.age }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const count = ref(0);
const obj = reactive({
  name: "张三",
  age: 18,
});
</script>

<style  scoped>
</style>