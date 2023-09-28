<script>
import { reactive } from 'vue';

export default {
  setup() {
    const columns = [
      {
        title: '物品名',
        dataIndex: 'itemname',
      },
      {
        title: '等级',
        dataIndex: 'level',
      },
      {
        title: '品质',
        dataIndex: 'quality',
      },
      {
        title: '单价',
        dataIndex: 'price',
      },
      {
        title: '是否有货',
        dataIndex: 'stock',
      },
    ];
    const data = reactive([{
      key: '1',
      itemname: 'Jane Doe',
      level: 23000,
      quality: '32 Park Road, London',
      price: 'jane.doe@example.com',
      stock: '1'
    }, {
      key: '2',
      itemname: 'Alisa Ross',
      level: 25000,
      quality: '35 Park Road, London',
      price: 'alisa.ross@example.com'
    }, {
      key: '3',
      itemname: 'Kevin Sandra',
      level: 22000,
      quality: '31 Park Road, London',
      price: 'kevin.sandra@example.com'
    }, {
      key: '4',
      itemname: 'Ed Hellen',
      level: 17000,
      quality: '42 Park Road, London',
      price: 'ed.hellen@example.com'
    }, {
      key: '5',
      itemname: 'William Smith',
      level: 27000,
      quality: '62 Park Road, London',
      price: 'william.smith@example.com'
    }]);

    return {
      columns,
      data
    }
  },
}
</script>

<template>
  <a-layout style="padding: 0 24px;" class="layout-b">
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>主页</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content>
      <a-table :columns="columns" :data="data" />
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.layout-b :deep(.arco-layout-content) {
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
