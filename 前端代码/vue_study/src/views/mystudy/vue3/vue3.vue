
<template>
  <div>
    <h1>这里是{{ msg }}</h1>
    <vue3_child_slotstudy>
      <p>这是vue3的插槽内容</p>
      <p>obj:{{ ob.name }} {{ ob.age }}</p>
    </vue3_child_slotstudy>
    <span v-for="(it, ind) in list" :key="ind">{{ it }}<br /></span>
    <p v-for="(item, ind) in list" :key="ind">{{ item }}</p>
  </div>
</template>
<script setup>
import vue3_child_slotstudy from "./vue3_child_slotstudy.vue";
import { ref, reactive } from "vue";
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const msg = "vue3页面";
const ob = reactive({
  name: "vue3",
  age: 18,
});
</script>

<style>
</style>