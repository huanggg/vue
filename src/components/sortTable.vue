<template>
  <div class="layout">
    <div @click="handleDownload()">下载zip</div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2}"
      placeholder="请输入内容"
      v-model="textarea"
      @change="changetextarea"
      @keydown.native="enterBtn($event)"
    ></el-input>
    <el-input
      class="text"
      type="textarea"
      placeholder="请输入您要咨询的问题......"
      v-model="textarea"
      :maxlength="100"
      @keydown.native="listen($event)"
    ></el-input>
    <!-- <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      @select="select"
    >
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
    </el-table>-->
    <el-color-picker v-model="color" show-alpha></el-color-picker>
    <button type="button" @click="toggle">Fullscreen</button>
    <fullscreen ref="fullscreen">
      <div style="position:relative;width:1000px;height:800px">
        <button
          class="buttonbox"
          @click.stop="test()"
          @keyup.ctrl.86="ctrlv"
          :style="{background:color}"
        >
          <vue-draggable-resizable
            :grid="[20,20]"
            :parent="true"
            :draggable="true"
            class-name="my-class"
          >
            <div
              @click.stop="kk()"
              @dblclick="dblclick()"
              @contextmenu.prevent="contextmenu"
              style="width:100%;height:100%;"
              class="box"
            >
              <button
                @keyup.ctrl.67="ctrlc"
                style="width:100%;height:100%;display:block;background:white;border:0px solid blue;"
              >
                <div class="quill_box">
                  <quill-editor
                    v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)"
                  ></quill-editor>
                </div>
              </button>
            </div>
          </vue-draggable-resizable>
        </button>
      </div>

      <!-- <div style="width:500px;height:500px;position:absolute;">fdsf</div> -->
      <button type="button" class="button">
        图片上传
        <input type="file" @change="Preview($event)" accept="image/*" ref="showinput" />
      </button>
      <div :style="{width:200+'px',height:100+'px',backgroundImage:'url('+img+')'}"></div>
    </fullscreen>
  </div>
</template>
<script>
import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
import jszip from '@/vendor/jszip.js'
Vue.use(fullscreen)
export default {
  data () {
    return {
      textarea: '',
      num: 0,
      fullscreen: false,
      color: 'rgba(19, 206, 102, 0.8)',
      imgObj: '',
      img: '',
      color1: '',
      content: ' ',

      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            // 加粗 斜体 下划线 删除线
            ['code-block'],
            // 引用  代码块
            // [{ header: 1 }, { header: 2 }], // 1、2 级标题你怕吗
            [{ list: 'ordered' }, { list: 'bullet' }],
            // 有序、无序列表
            // [{ script: "sub" }, { script: "super" }], // 上标/下标
            // [{ indent: "-1" }, { indent: "+1" }], // 缩进
            // [{'direction': 'rtl'}],                         // 文本方向

            // 字体大小
            // [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }],
            // 字体颜色、字体背景颜色
            // [{ font: [] }], // 字体种类
            [{ align: [] }],
            // 对齐方式
            // ["clean"], // 清除文本格式
            ['image'],
            [{ size: ['small', false, 'large', 'huge'] }],
            // 链接、图片、视频

          ]
        },
        theme: 'bubble',
        placeholder: 'here'

      },
      shoucolor_picker: false,
      quill_editor: false,
      tableData: [
        {
          hangdle: '22',
          date: '2016-05-02',
          name: '王小虎',
          age: 20,
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
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
        }
      ]
    }
  },
  components: {

  },
  watch: {
    textarea: function (newval, oldval) {

      // setTimeout(function () {


      //   console.log(this.textarea)
      // }, 2000)
    }
  },
  methods: {
    //触发事件进项调用
    handleDownload () {
      var zip = new JSZip();
      zip.file("Hello.txt", "Hello worlddddd\n");
      console.log(5555, zip)
      zip.generateAsync({ type: "base64" }).then(function (base64) {
        window.location = "data:application/zip;base64," + base64;
      }, function (err) {
        // jQuery("#data_uri").text(err);
      });
    },
    formatJson (filterVal, jsonData) {
      // return jsonData.map(v => filterVal.map(j => v[j]))
    },
    enterBtn (event) {
      if (event.keyCode === 13) {
        console.log('enterBtn')
        this.textarea = 556666666
        event.preventDefault() // 阻止浏览器默认换行操作
        return false
      }

    },
    listen (event) {
      if (event.keyCode === 13) {
        // this.send() // 发送文本
        event.preventDefault() // 阻止浏览器默认换行操作
        return false
      }
    },
    changetextarea () {
      // alert(222)
      // this.textarea = 555

    },
    toggle () {
      this.$refs['fullscreen'].toggle()
      // this.fullscreen = !this.fullscreen // deprecated
    },

    Preview (ev) {
      // const self=this;
      const file = ev.target.files[0]
      this.imgObj = ev.target.files[0]
      const obj = new FileReader()
      obj.readAsDataURL(file)
      // obj.onload=function(){
      //   self.img=obj.result;
      // }
      obj.onload = () => {
        this.picReduce(obj.result, base64 => {
          this.img = base64
        })
      }
    },
    // 图片压缩
    // picReduce (picObj, callback) {
    //   const img = new Image()
    //   img.src = picObj
    //   img.onload = () => {
    //     const w = img.width
    //     const h = img.height
    //     const scale = w / h
    //     const max_w = w > 1080 ? 1080 : w
    //     const max_h = h * max_w / w
    //     const canvas = document.createElement('canvas')
    //     const ctx = canvas.getContext('2d')
    //     canvas.width = max_w
    //     canvas.height = max_h
    //     ctx.drawImage(img, 0, 0, max_w, max_h)
    //     const base64 = canvas.toDataURL('image/jpeg', 0.7)
    //     callback(base64)
    //   }
    // },
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
.my-class {
  z-index: 200;
}
.buttonbox {
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  position: absolute;
  display: block;
  outline: none;
  opacity: 1;
  margin: 100px;
}
.box {
  transform: rotate3d(0, 0, 1, 0deg);
  font-size: 30px;
}
.button {
  background: rgb(7, 193, 96);
  border: 1px solid rgb(7, 193, 96);
  border-radius: 5px;
  position: relative;
  overflow: hidden; /* 超出button的input部分会被切掉 */
}
input {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0; /* 透明度为零。隐藏input的默认样式，即整个input被隐藏了，但功能还在 */
}
.quill_box {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
</style>
<style >
.ql-container.ql-snow {
  border: 0px solid #ccc;
}
.ql-editor {
  padding: 0px !important;
}
</style>
