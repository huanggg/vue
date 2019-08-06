<template>
  <div class="page">
    <!-- <img width="150" height="150" v-for="(item,index) in images" :src="item.src" :key="index"> -->
    <div class="el-input el-input--small" v-if="images.length>0">
      <viewer>
        <img width="150" v-for="(item,index) in images" :src="item.src" :key="index" />
      </viewer>
    </div>
  </div>
</template>
<script >
export default {
  data () {
    return {
      images: [
        {
          src: require('@/images/2.jpg')
        },
        {
          src: require('@/images/3.jpg')
        },
        {
          src: require('@/images/4.png')
        },
        {
          src: require('@/images/4.png')
        },
        {
          src: require('@/images/5.png')
        },
        {
          src: require('@/images/6.jpg')
        },
        {
          src: require('@/images/7.jpg')
        },
        {
          src: require('@/images/8.jpg')
        },
        {
          src: require('@/images/9.jpg')
        }

      ],
    }
  },
  components: {

  }
}
</script>

<style scoped ></style>
<style>
.viewer-list {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 100px !important;
  margin: 0;
  overflow: hidden;
  padding: 1px 0;
  width: 100% !important;
  transform: translateX(0px) !important;
  display: flex;
  justify-content: center;
}
.viewer-list > li {
  color: transparent;
  cursor: pointer;
  float: left;
  font-size: 0;
  height: 100px !important;
  line-height: 0;
  opacity: 0.5;
  overflow: hidden;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  width: 100px !important;
  /* margin: 0 auto; */
}
.viewer-list img {
  width: 100px !important;
  height: 100px !important;
  transform: translateX(0px) !important;
}
</style>
