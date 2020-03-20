<template>
  <div>
    <Dragablenode @showInput="showInput"></Dragablenode>
    <el-input v-model="input" placeholder="请输入内容" v-if="show"></el-input>
    <el-input v-model="input2" placeholder="请输入内容" v-if="treeNode.level==4"></el-input>
  </div>
</template>
<script>
import Dragablenode from './Dragablenode'

export default {
  data () {
    return {
      input: '',
      input2: '',
      show: false,
      treeData: '',
      treeNode: ''
    }
  },
  components: {
    Dragablenode
  },
  watch: {
    input: function (newval, oldval) {
      if (newval != oldval) {
        this.treeData.label = newval
      }
    },
    input2: function (newval, oldval) {
      if (newval != oldval) {
        this.treeData.ll = newval
      }
    }
  },
  methods: {
    showInput (boleen, data, node) {
      this.show = boleen
      // data.label = 2222333
      this.treeData = data
      this.treeNode = node
      this.input = data.label
    }


  }
}
</script>

<style scoped >
</style>
