<template>
  <section class="home">
    <h1>你好，Vue 3!</h1>
    <p>这是一个基础的项目骨架，已就绪。</p>
    <Navi />
  </section>
</template>

<script>
import Navi from "./navi.vue";
export default {
  name: "Home",
  components: { Navi },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
h1 {
  margin: 0 0 0.5rem;
  font-size: 2rem;
}
p {
  margin: 0;
  color: #666;
}
</style>


