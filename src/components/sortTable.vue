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
      style="width:500px;height:500px;border:1px solid blue;position:relative;display:block;background:orange;outline: none;"
      @click.stop="test()"
      @keyup.ctrl.86="ctrlv"
    >
      <!-- <vue-draggable-resizable :grid="[20,20]" :parent="false">
        <div style="width:100%;height:100%;background:red" @contextmenu.prevent="contextmenu">右击</div>
      </vue-draggable-resizable>-->

      <vue-draggable-resizable :grid="[20,20]" :parent="false">
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
            <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width:100%;height:100%;">
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
            </svg>-->
            <div style="position:absolute;top:0px;left:0px;width:100%">
              <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
                v-if="quill_editor"
              ></quill-editor>
            </div>
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
      content: '<p><span style="color: rgb(230, 0, 0);">ffdfd</span></p>',

      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            // 加粗 斜体 下划线 删除线
            ["code-block"],
            // 引用  代码块
            // [{ header: 1 }, { header: 2 }], // 1、2 级标题你怕吗
            [{ list: "ordered" }, { list: "bullet" }],
            // 有序、无序列表
            // [{ script: "sub" }, { script: "super" }], // 上标/下标
            // [{ indent: "-1" }, { indent: "+1" }], // 缩进
            // [{'direction': 'rtl'}],                         // 文本方向
            [{ size: ["small", false, "large", "huge"] }],
            // 字体大小
            // [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }],
            // 字体颜色、字体背景颜色
            // [{ font: [] }], // 字体种类
            [{ align: [] }],
            // 对齐方式
            // ["clean"], // 清除文本格式
            ["image"]
            // 链接、图片、视频

          ]
        }
      },
      shoucolor_picker: false,
      quill_editor: false,
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
    onEditorBlur () {
      console.log('失去焦点事件')

    },
    onEditorFocus () {
      console.log('获得焦点事件')
    },
    onEditorChange () {
      console.log('内容改变事件')
      console.log('content', this.content)
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
      this.quill_editor = true
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
  transform: rotate3d(0, 0, 1, 0deg);
  font-size: 30px;
}
</style>
<style >
.ql-container.ql-snow {
  border: 0px solid #ccc;
}
</style>

