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

    <button
      style="width:500px;height:500px;border:0px solid blue;position:relative;display:block;background:orange;outline: none;"
      @click.stop="test()"
      @keyup.ctrl.86="ctrlv"
    >
      <!-- <vue-draggable-resizable :grid="[20,20]" :parent="false">
        <div style="width:100%;height:100%;background:red" @contextmenu.prevent="contextmenu">右击</div>
      </vue-draggable-resizable> -->

      <vue-draggable-resizable :parent="false" :grid="[20,20]">
        <div
          @click.stop="kk()"
          @dblclick="dblclick()"
          @contextmenu.prevent="contextmenu"
          style="width:100%;height:100%;"
          class="box"
        >
          <!-- <el-color-picker v-model="color1" v-if="shoucolor_picker"></el-color-picker> -->
          <button
            @keyup.ctrl.67="ctrlc"
            style="width:100%;height:100%;display:block;background:white;border:0px solid blue;"
          >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width:100%;height:100%;">
              <rect
                x="50"
                y="20"
                rx="50"
                ry="50"
                width="150"
                height="150"
                style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:1;
          stroke-opacity:0.9"
              ></rect>
            </svg>
          </button>
        </div>
      </vue-draggable-resizable>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1: '',
      shoucolor_picker: false,
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
    ctrlc () {
      console.log('ctrlc')
    },
    ctrlv () {
      console.log('ctrlv')
    },
    formatter (row, column) {
      return row.address
    },
    select (row, column, cell, event) {
      // console.log('selection', selection)
      console.log('row', row)
    },
    contextmenu () {
      console.log('contextmenu')
      this.shoucolor_picker = true
    },
    test () {
      console.log('contextmenu')
      this.shoucolor_picker = false
    },
    kk () {
      console.log('kkk')
    },
    ll () {
      console.log('lll')
    },
    dblclick () {
      console.log('dblclick')
    }
  }
}
</script>

<style scoped >
.layout {
  width: 100%;
  height: 100%;
  position: relative;
}
.box {
  transform: rotate(0deg);
}
</style>
