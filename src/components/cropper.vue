<template>
  <div class="cropper">
    <div class="box" ref="box" :class="{active:isactive}">
      <div class="test" :class="{istest:isactive}">
        <div
          @click="quill()"
          v-if="!isactive"
          style="width:50px;height:50px;position:absolute;top:0px;right:0px"
        >全屏</div>
        <div
          style="width:50px;height:50px;position:absolute;top:0px;right:0px"
          v-if="isactive"
          @click="isactive=false"
        >X</div>
        <vue-draggable-resizable :parent="!isactive" :draggable="!isactive" :w="100" :h="100">范德萨范德萨</vue-draggable-resizable>
        <vue-draggable-resizable :parent="!isactive" :draggable="!isactive" :w="100" :h="100">范德萨范德萨</vue-draggable-resizable>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cropper',
  data () {
    return {
      isactive: false
    }
  },
  mounted () {
  },

  components: {},
  methods: {
    quill () {
      this.isactive = true
    }
  }
}
</script>

<style scoped>
.cropper {
  width: 100%;
  height: 100%;
  background: lightgray;
}
.box {
  width: 500px;
  height: 500px;
  background: red;
}
.active {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: blue;
}
.test {
  width: 500px;
  height: 200px;

  border: 1px solid red;
  position: relative;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      0% 0% / 20px 20px,
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
  background-color: red;

  /* background-repeat:no-repeat  */
}
.istest {
  width: 100%;
  height: 100%;
}
</style>
