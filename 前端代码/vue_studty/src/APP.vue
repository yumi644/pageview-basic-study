<template>
  <div class="app">
    <nav class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/vue2">Vue2 页面</router-link>
      <router-link to="/vue3">Vue3 页面</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
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
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial,
    sans-serif;
}
.nav {
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #42b983;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
.nav a:hover {
  background-color: rgba(255,255,255,0.2);
}
.nav a.router-link-active {
  background-color: rgba(255,255,255,0.3);
}
</style>


