<template>
  <section class="home">
    <h1>你好，Vue 3!</h1>
    <p>这是一个基础的项目骨架，已就绪。</p>
    <Navi />
    <vue2>
      <span>这是一个插槽{{msg}}</span>
    </vue2>
    <vue3/>
  </section>
</template>

<script>
import Navi from "./navi.vue";
import vue2 from "../mystudy/vue2/vue2.vue"
import vue3 from "../mystudy/vue3/vue3.vue"

export default {
  name: "Home",
  components: { Navi,vue2,vue3 },
  data(){
    return{
      msg:"主页的"
    }
  }
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


