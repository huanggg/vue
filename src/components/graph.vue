<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-change="change"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </div>
</template>


<script>
export default {
  data () {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    };
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit();
    },
    handleRemove (file, fileList) {
      // console.log(file, fileList);
    },

    change (file) {
      console.log(file, 333333333);
      if (file.name == "u=1172165602,1835764564&fm=26&gp=0.jpg") {
        alert(file)
      } else {
        this.$refs.upload.submit();
        
      }
    },
    handlePreview (file) {
      console.log(file);
    }
  }
}
</script>
