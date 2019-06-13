<template>
  <div class="layout">
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      @select="select"
    >
      <!-- ascending -->
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <span>1</span>
          <span>2</span>
          <span>{{scope.row.hangdle}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
      <el-table-column prop="address" label="地址" sortable :formatter="formatter"></el-table-column>
      <el-table-column prop="age" label="年龄" sortable></el-table-column>
    </el-table>
    <div style="width:200px;height:200px;background:red" @contextmenu.prevent="contextmenu"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        hangdle: '22',
        date: '2016-05-02',
        name: '王小虎',
        age: 20,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        hangdle: '2222',
        date: '2016-05-04',
        name: '王小虎',
        age: 22,
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        age: 13,
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        age: 30,
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {

  },
  methods: {
    formatter (row, column) {
      return row.address
    },
    select (row, column, cell, event) {
      // console.log('selection', selection)
      console.log('row', row)
    },
    contextmenu () {
      console.log('contextmenu')
    }
  }
}
</script>

<style scoped >
</style>
