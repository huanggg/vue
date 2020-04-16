<template>
  <el-dialog
    class="vue-cropper-wrapper"
    width="600px"
    :visible.sync="vueCropperVisible"
    :before-close="handleClose"
    :style="{ top: iocvueCropper+'!important',bottom: '0px !important',zIndex:'999'}"
  >
    <!-- style="top: 0px !important; bottom: 0px !important; z-index: 9999;" -->
    <div class="cut">
      <vue-cropper
        ref="cropper"
        :img="option.img"
        :output-size="option.size"
        :output-type="option.outputType"
        :info="true"
        :full="option.full"
        :can-move="option.canMove"
        :can-move-box="option.canMoveBox"
        :fixed-box="option.fixedBox"
        :original="option.original"
        :auto-crop="option.autoCrop"
        :auto-crop-width="option.autoCropWidth"
        :auto-crop-height="option.autoCropHeight"
        :center-box="option.centerBox"
        @real-time="realTime"
        :high="option.high"
      ></vue-cropper>
    </div>
    <div class="test-button">
      <label class="operaor-btn" for="uploads">选择图片</label>
      <input
        type="file"
        id="uploads"
        style="position:absolute; clip:rect(0 0 0 0);"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event, 1)"
      >
      <!-- <el-button @click="clearCrop" class="btn">清除</el-button> -->
      <el-button @click="refreshCrop" class="operaor-btn">刷新</el-button>
      <!-- <el-button @click="changeScale(1)" class="operaor-btn">+</el-button>
      <el-button @click="changeScale(-1)" class="operaor-btn">-</el-button>-->
      <el-button @click="rotateLeft" class="operaor-btn">向左旋转</el-button>
      <el-button @click="rotateRight" class="operaor-btn">向右旋转</el-button>
      <el-button @click="handleConfirm('blob')" class="operaor-btn">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>

import axios from 'axios'
import VueCropper from '@/vue-cropper'
import { Loading } from 'element-ui'

export default {
  props: {
    vueCropperVisible: {
      type: Boolean,
      required: true,
      default: false
    },
    isLogoUriEN: {
      type: Boolean,
      required: false,
      default: false
    },
    option: {
      type: Object,
      default: () => new Object(),
      required: true
    },
    iocvueCropper: {

      default: '0px'
    },

    appendToBody: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      previews: new Object(),
      fileName: ''
    }
  },
  components: {
    VueCropper
  },
  mounted() {
    this.option.img = ''
  },
  methods: {
    // clear
    clearCrop() {
      this.$refs.cropper.clearCrop()
    },
    // refresh
    refreshCrop() {
      this.$refs.cropper.refresh()
    },
    changeScale(num) {
      num = num || 1
      this.$refs.cropper.changeScale(num)
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft()
    },
    rotateRight() {
      this.$refs.cropper.rotateRight()
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data
    },
    uploadImg(e, num) {
      //上传图片
      var file = e.target.files[0]
      this.fileName = (file.name && file.name.length > 17) ? file.name.substr(file.name.length - 10) : file.name
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
        return false
      }
      var reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        if (num === 1) {
          this.option.img = data
        }
        this.base64Url = data
      }
      // 转化为base64
      reader.readAsDataURL(file)
      // 转化为blob
      // reader.readAsArrayBuffer(file)
    },
    handleConfirm(type) {
      let formData = new FormData()
      let url = ''//图片上传地址
      let loadingInstance = Loading.service({
        background: 'rgba(0, 0, 0, 0.5)',
        text: '图片上传中，请稍后'
      })
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob(data => {
          let img = window.URL.createObjectURL(data)
          console.log(img)
          formData.append('multfile', data, this.fileName)
          axios.post(url, formData).then(res => {
            if (this.http.hostname && this.http.pathname) {
              this.previews.imageUrl = res.data.url
              this.previews.url = this.base64Url
              this.$emit('handleClose')
              loadingInstance.close()
              if (!this.isLogoUriEN) {
                this.$emit('previewImg', this.previews)
              } else {
                this.$emit('previewImgEn', this.previews)
              }
            }
          })
        })
      }
    },
    down(type) {
      // event.preventDefault()
      var aLink = document.createElement('a')
      aLink.download = 'demo'
      // 输出
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          this.downImg = window.URL.createObjectURL(data)
          aLink.href = window.URL.createObjectURL(data)
          aLink.click()
        })
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data
          aLink.href = data
          aLink.click()
        })
      }
    },
    handleClose() {
      this.$emit('handleClose')
    }
  }
}
</script>

<style lang='less' scoped>
.v-modal {
  z-index: 1999 !important;
}
.vue-cropper-wrapper {
  .cut {
    width: 400px;
    height: 400px;
    margin: 0px auto;
  }

  .c-item {
    max-width: 500px;
    margin: 10px auto;
    margin-top: 20px;
  }

  .test-button {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  /deep/ .el-dialog__headerbtn {
    background: transparent;
    border: none;
  }

  .operaor-btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #c0ccda;
    color: #1f2d3d;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 20px 10px 0px 0px;
    padding: 9px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    transition: all 0.2s ease;
    text-decoration: none;
    user-select: none;
  }

  .des {
    line-height: 30px;
  }

  code.language-html {
    padding: 10px 20px;
    margin: 10px 0px;
    display: block;
    background-color: #333;
    color: #fff;
    overflow-x: auto;
    font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo,
      Lucida, Sans, Type, Writer, Ubuntu, Mono;
    border-radius: 5px;
    white-space: pre;
  }

  .show-info {
    margin-bottom: 50px;
  }

  .show-info h2 {
    line-height: 50px;
  }

  /*.title, .title:hover, .title-focus, .title:visited {
    color: black;
  }*/

  .title {
    display: block;
    text-decoration: none;
    text-align: center;
    line-height: 1.5;
    margin: 20px 0px;
    background-image: -webkit-linear-gradient(
      left,
      #3498db,
      #f47920 10%,
      #d71345 20%,
      #f7acbc 30%,
      #ffd400 40%,
      #3498db 50%,
      #f47920 60%,
      #d71345 70%,
      #f7acbc 80%,
      #ffd400 90%,
      #3498db
    );
    color: transparent;
    -webkit-background-clip: text;
    background-size: 200% 100%;
    animation: slide 5s infinite linear;
    font-size: 40px;
  }
  .model {
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
  }
  .model-show {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .model img {
    display: block;
    margin: auto;
    max-width: 80%;
    user-select: none;
    background-position: 0px 0px, 10px 10px;
    background-size: 20px 20px;
    background-image: linear-gradient(
        45deg,
        #eee 25%,
        transparent 25%,
        transparent 75%,
        #eee 75%,
        #eee 100%
      ),
      linear-gradient(
        45deg,
        #eee 25%,
        white 25%,
        white 75%,
        #eee 75%,
        #eee 100%
      );
  }
  .c-item {
    display: block;
    user-select: none;
  }
  @keyframes slide {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
}
</style>
