<template>
  <dragTreeTable :data="treeData" :onDrag="onTreeDataChange"></dragTreeTable>
</template>

<script>
import dragTreeTable from "drag-tree-table";

export default {
  name: "app",
  data () {
    return {
      treeData: {
        columns: [
          {
            type: "selection",
            title: "菜单名称",
            field: "name",
            width: 200,
            align: "left",
            titleAlign: "left"
          },
          {
            title: "操作",
            type: "action",
            width: 150,
            align: "center",
            actions: [
              {
                text: "查看角色",
                onclick: (row) => {
                  alert(row.name)
                },
                formatter: item => {
                  return "<i>查看角色 </i>";
                }
              },
              {
                text: "编辑",
                onclick: (row) => {
                  alert(row.id)
                },
                formatter: item => {
                  return "<i>编辑</i>";
                }
              }
            ]
          }
        ],
        lists: [
          {
            "id": 40,
            "parent_id": 0,
            "order": 0,
            "name": "动物类",
            "uri": "/masd/ds",
            "open": true,
            "lists": []
          },
          {
            "id": 5,
            "parent_id": 0,
            "order": 1,
            "name": "昆虫类",
            "uri": "/masd/ds",
            "open": true,
            "isShowCheckbox": false, 
            "lists": [
              {
                "id": 12,
                "parent_id": 5,
                "open": true,
                "order": 0,
                "name": "蚂蚁",
                "uri": "/masd/ds",
                "lists": []
              }
            ]
          },
          {
            "id": 19,
            "parent_id": 0,
            "order": 2,
            "name": "植物类",
            "uri": "/masd/ds",
            "open": true,
            "lists": []
          }
        ]
      }
    }
  },
  components: {
    dragTreeTable
  },
  methods: {
    onTreeDataChange (list) {
      this.treeData.lists = list;
    }
  }
};
</script>