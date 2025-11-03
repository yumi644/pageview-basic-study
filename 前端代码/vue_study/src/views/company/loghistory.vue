<template>
  <div class="div-content">
    <!-- 输入框 -->
    <div class="div-item">业务线<LadderFormItem :config="config" /></div>

    <!-- 下拉框 -->
    <div class="div-item">
      变更对象<LadderFormItem :config="selectConfig" />
    </div>

    <!-- 单选框 -->
    <div class="div-item">请求标识<LadderFormItem :config="radioConfig" /></div>

    <!-- 输入框 -->
    <div class="div-item">
      时间查询<LadderDatePicker
        v-model="datetime"
        :config="{
          type: 'datetime',
          placeholder: '请选择日期时间',
        }"
      />
    </div>

    <!-- 输入框 -->
    <div class="div-item">站点<LadderFormItem :config="config" /></div>

    <!-- 输入框 -->
    <div class="div-item">原始记录<LadderFormItem :config="config" /></div>

    <div class="button-group">
      <LadderButton>搜索查询</LadderButton>
      <LadderButton>清空</LadderButton>
      <LadderButton>导出</LadderButton>
    </div>
  </div>

  <div>
    <LadderButton @click="getSelected">获取选中项</LadderButton>
    <LadderTable
      ref="tableRef"
      :model="model"
      :records="data"
      :multi="true"
      @select="handleSelect"
    />
  </div>
</template>
  
  <script setup>
import { reactive, ref } from "vue";
import { getLogHistory } from "../../sercice/api";
const config = reactive({
  fieldname: "用户名",
  wname: "linetext",
  placeholder: "请输入用户名",
  type: "text",
});

const selectConfig = reactive({
  fieldname: "性别",
  wname: "combox",
  list: [
    { title: "男", value: "1" },
    { title: "女", value: "2" },
  ],
});

const radioConfig = reactive({
  fieldname: "婚姻状况",
  wname: "radio",
  list: [
    { title: "未婚", value: "0" },
    { title: "已婚", value: "1" },
  ],
});

const tableRef = ref();
const selectedCount = ref(0);
const datetime = ref(""); // 或实际需要的初始值
const data = ref([]);
const model = ref([]);
const getLogHistoryData = async () => {
  const res = await getLogHistory();
  data.value = res.data;
  model.value = res.model;
};
getLogHistoryData();

function handleSelect(selected) {
  selectedCount.value = selected.length;
}

function getSelected() {
  const selected = tableRef.value.getSelect();
  console.log("选中的数据：", selected);
}
</script>

<style scoped>
.div-content {
  margin-bottom: 20px;
  margin-top: 20px;
  /* padding: 20px; */
  background: #f7f8fa;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  /* gap: 20px; */
}
.div-item {
  /* border: 1px solid #000; */
  padding: 10px;
  margin: 10px;
  width: 20%;
  margin-right: 20px;
}

.button-group {
  display: inline-flex;
  border-radius: 4px;
  overflow: hidden;
  justify-content: center;
  margin-top: 3.3%;
  margin-left: 1.5%;
  gap: 80px;
}
</style>

