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
        columns: [],
        lists: []
      }
    };
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