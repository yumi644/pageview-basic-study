<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <LadderButton @click="handleClick">默认按钮</LadderButton>
    <div>
      <LadderButton @click="getSelected">获取选中项</LadderButton>
      <LadderTable
        class="custom-table"
        :model="tableModel"
        :records="tableData"
        multi="true"
      />
    </div>
    <div>
      <span>共{{ totallog }}条数据，第{{ currentpage }}/{{ totalpage }}页</span>
      <span class="jump">
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <span
          >跳至
          <input type="text" name="页数" />
          <button>确定</button>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { getLogHistory } from "../../sercice/api";
import { onMounted, ref } from "vue";
const tableModel = ref([
  { fieldname: "id", title: "ID" },
  { fieldname: "business", title: "业务线" },
  { fieldname: "target", title: "目标" },
  { fieldname: "old", title: "原始数据" },
  { fieldname: "current", title: "当前数据" },
  { fieldname: "different", title: "差异" },
  { fieldname: "requestmark", title: "请求码" },
  { fieldname: "site", title: "站点" },
  { fieldname: "createtime", title: "创建时间" },
]);

const tableData = ref([]);
const input = ref("");

// 处理按钮点击
const handleClick = () => {
  console.log("按钮点击");
};

// 获取选中项
const getSelected = () => {
  console.log("获取选中项");
};

//跳转页面
const totalpagenumber = ref(1);
const totalpagedata = ref('');
const currentpagenumber = ref(1);
const currentpagedata = ref('');
const totallognumber = ref(0);
const pagesize = ref(10);


const jumpPage = () => {}

onMounted(() => {
  getLogHistory()
    .then((res) => {
      tableData.value = res.data.data.rows;
      totalpagenumber.value = res.data.data.count;
      totalpagedata
      tableData.value = res.data.data.rows;
    })
    .catch((error) => {
      console.error("获取数据失败:", error);
      tableData.value = [];
    });
});
</script>

<style scoped>
/* 表格容器样式 */
.custom-table {
  overflow: auto;
  height: 200px;
}

/* 表格单元格样式 - 行高约束和文本溢出省略 */
/* 单行显示，超出部分显示省略号 */
.custom-table :deep(td),
.custom-table :deep(th),
.custom-table :deep(.cell) {
  max-width: 150px;
  max-height: 40px; /* 单行最大高度 */
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 8px 12px;
  box-sizing: border-box;
}

/* 表格行样式 */
.custom-table :deep(tr) {
  max-height: 40px;
  max-width: 150px;
}

.jump {
  position: absolute;
  right: 0;
}
</style>