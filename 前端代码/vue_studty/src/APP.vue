<template>
  <div class="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/components/home.vue";

export default {
  name: "App",
  components: { Home },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
.app {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial,
    sans-serif;
}
</style>


