<template>
  <div class="navi">
    <h1>导航</h1>
    <button @click="fn">点击</button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const a = ref(1);
const b = ref(2);
const c = ref(3);
const list = [a, b, c];
const ob = reactive({ a: 1, b: 2, c: 3 });
const fn = () => {
  console.log(a.value);
  console.log(b.value);
  console.log(c.value);
  console.log(list);
  console.log(ob);
};
</script>

<style  scoped>
</style>