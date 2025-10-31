<<template>
    <div>
        <h1>v-for的用法</h1>
        <p v-for="(item,index) in list1" :key="index">{{ item }}</p> 
        <p v-for="(value,key,index) in obj" :key="key">{{ value }},对应的键：{{ key }},对应的索引：{{ index }}</p>

        <h1>v-if的用法</h1>
        <p v-if="count > 0">{{ count }}</p>

        <h1>v-show的用法</h1>
        <p v-show="count > 0">{{ count }}</p>

        <h1>v-bind的用法</h1>
        <p :title="title">{{ title }}</p>

        <h1>v-model的用法</h1>
        <input type="text" v-model="title">请输入一个标题：</input> 
        <p>显示{{ title }}</p>

        <h1>v-on的用法</h1>
        <button @click="handleClick">{{count}}的值加1</button>
        <button @mouseenter="handleMouseEnter">悬停时显示{{count}}的值</button>

        <h1>v-text的用法</h1>
        <p v-text="msg"></p>

        <h1>v-html的用法</h1>
        <p v-html="count"></p>

        <h1>v-once的用法</h1>
        <p v-once>{{ count }}</p>
        
        <h1>v-pre的用法</h1>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const msg = ref("<h1>Hello World</h1>");
const count = ref(0);
const list1 = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const list2 = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const obj = reactive({
  name: "张三",
  age: 18,
});
const title = ref("");
const handleClick = () => {
  count.value++;
};
const handleMouseEnter = () => {
  alert("用户悬停了一次");
};
</script>

<style lang="scss" scoped>
</style>>