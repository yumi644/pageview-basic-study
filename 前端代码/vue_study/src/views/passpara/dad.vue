<template>
  <div>
    <p>父传子</p>
    <!-- <Son
      name="张三"
      :age="18"
      sex="男"
      :height="180"
      :weight="70"
      :hobby="['篮球', '足球', '游泳']"
      :isStudent="true"
    /> -->

    <p>子传父</p>
    <button @click="updateName">修改名字</button><br />
    <button @click="updateAge">修改年龄</button><br />
    <button @click="updateSex">修改性别</button><br />
    <button @click="updateHeight">修改身高</button><br />
    <button @click="updateWeight">修改体重</button><br />
    <button @click="updateHobby">修改爱好</button><br />
    <button @click="updateIsStudent">修改是否是学生</button><br />
    <p>名字：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>性别：{{ sex }}</p>
    <p>身高：{{ height }}</p>
    <p>体重：{{ weight }}</p>
    <p>爱好：{{ hobby }}</p>
    <p>是否是学生：{{ isStudent }}</p>
  </div>
</template>

<script>
import Son from "./son.vue";
export default {
  name: "Dad",
  components: {
    Son,
  },
};
</script>

<style lang="scss" scoped>
</style>