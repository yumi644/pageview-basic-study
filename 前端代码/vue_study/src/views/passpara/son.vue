<template>
  <div>
    <p>
      我是{{ props.name }}，今年{{ props.age }}岁了，性别是{{
        props.sex
      }}，身高是{{ props.height }}cm，体重是{{ props.weight }}kg，爱好是{{
        props.hobby
      }}，是否是学生{{ props.isStudent }}
    </p>
    <button @click="emit('update:name', '李四')">修改名字</button>
    <button @click="emit('update:age', 20)">修改年龄</button>
    <button @click="emit('update:sex', '女')">修改性别</button>
    <button @click="emit('update:height', 160)">修改身高</button>
    <button @click="emit('update:weight', 50)">修改体重</button>
    <button @click="emit('update:hobby', '篮球')">修改爱好</button>
    <button @click="emit('update:isStudent', true)">修改是否是学生</button>
  </div>
</template>

<script setup>
// defineProps 是编译器宏，不需要导入
const props = defineProps({
  name: String,
  age: Number,
  sex: String,
  height: Number,
  weight: Number,
  hobby: Array,
  isStudent: Boolean,
});

// emit实现子传父
const emit = defineEmits([
  "update:name",
  "update:age",
  "update:sex",
  "update:height",
  "update:weight",
  "update:hobby",
  "update:isStudent",
]);
</script>

<style lang="scss" scoped>
</style>