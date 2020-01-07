<template>
  <div class="page">
    <div>
      <div @click="toImage">截图</div>
      <el-color-picker
        v-model="color"
        show-alpha
        :predefine="predefineColors"
        @active-change="activeChange"
      ></el-color-picker>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <div style="display:flex">
        <div class="imageWrapper" ref="imageWrapper">
          <div contenteditable="true" class="box" :style="{background:color}">{{input}}</div>
          <table border="1">
            <tbody>
              <tr>
                <th rowspan="2">我是占位符</th>
                <th colspan="3">我是占位符</th>
                <th>我是占位符</th>
              </tr>
              <tr>
                <th>我是占位符</th>
                <th rowspan="5">我是占位符</th>
                <th>我是占位符</th>
                <th>我是占位符</th>
              </tr>
              <tr>
                <th>我是占位符</th>
                <th>我是占位符</th>
                <th>我是占位符</th>
                <th>我是占位符</th>
              </tr>

              <tr>
                <th>我是占位符</th>
                <th>我是占位符</th>
                <th>我是占位符</th>
                <th>我是占位符</th>
              </tr>
            </tbody>
          </table>
          <img src="static/image/1.jpg" alt />
        </div>
        <div v-show="ishow">
          <img class="real_pic" :src="dataURL" style="width:800px;height:800px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import html2canvas from 'html2canvas'
export default {
  data () {
    return {
      ishow: false,
      color: 'rgba(250, 250, 250, 1)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',

      ],
      dataURL: '',
      input: '',
    }
  },
  updated () {
    setTimeout(() => {
      this.toImage()
    }, 3000)
    this.ishow = true
  },
  components: {

  },
  methods: {
    toImage () {
      html2canvas(this.$refs.imageWrapper, {
        width: 600,
        useCORS: true
      }).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png')
        this.dataURL = dataURL
        console.log(dataURL)
      })
    },
    activeChange (color) {
      console.log(333333, color)
      this.color = color
    },
  }
}
</script>

<style scoped>
</style>
