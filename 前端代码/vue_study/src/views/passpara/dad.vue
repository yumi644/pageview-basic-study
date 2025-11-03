<template>
  <!-- <Son :name="username" :age="18" /> -->
  <Son @update="handleUpdate" />
  <p>{{ username }}的学校是{{ school }}，年级是{{ grade }}</p>
</template>

<script setup>
import { ref } from "vue";
import Son from "./son.vue";
const username = ref("李四");
const school = ref("");
const grade = ref("");
const handleUpdate = (data) => {
  console.log("data:", data);
  school.value = data.school;
  grade.value = data.grade;
};
</script>

<style lang="scss" scoped>
</style>