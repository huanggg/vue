<template>
  <div style="width:100%;height:100%;">
    <div
      @mousedown="getMousePos('mousedown')"
      @mousemove="getMousePos('mousemove')"
      @mouseup="getMousePos('up')"
      style="width:100%;height:100%;background:'';position:relative;top:0px;left:0px"
    >
      <table cellpadding="0" cellspacing="0">
        <tr v-for="(n,index) in 25" :key="index">
          <td
            v-for="(nn,index) in 25"
            :key="index"
            style="border:1px solid #d4d4d4;width:20px;height:20px;background:''"
          ></td>
        </tr>
      </table>
      <div style="position:absolute;left:0px;top:0px">
        <table cellpadding="0" cellspacing="0">
          <tr v-for="(n,index) in yy" :key="index">
            <td
              v-for="(nn,index) in xx"
              :key="index"
              style="border:1px solid #d4d4d4;width:20px;height:20px;background:gray"
            ></td>
          </tr>
        </table>
      </div>
    </div>
    <div style="margin-top:10px">
      <table cellpadding="0" cellspacing="0">
        <tr v-for="(n,index) in yy" :key="index">
          <td
            v-for="(nn,index) in xx"
            :key="index"
            style="border:1px solid #d4d4d4;width:76px;height:25px;background:''"
            contenteditable="true"
          ></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {

      cx: 0,
      cy: 0,
      mousemovex: 0,
      mousemovey: 0,
      xx: 0,
      yy: 0,
      active: false,

    }
  },
  mounted () {

  },
  components: {},
  methods: {

    getMousePos (type) {
      // if (this.ShapeType !== '') {
      if (type === 'mousedown') {
        const e = event || window.event
        const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
        const scrollY = document.documentElement.scrollTop || document.body.scrollTop
        const x = e.pageX || e.clientX + scrollX
        const y = e.pageY || e.clientY + scrollY
        console.log(x)
        console.log(y)
        this.cx = x
        this.cy = y
        this.active = true
      } else if (type === 'mousemove' && this.active === true) {
        const e = event || window.event
        const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
        const scrollY = document.documentElement.scrollTop || document.body.scrollTop
        const x = e.pageX || e.clientX + scrollX
        const y = e.pageY || e.clientY + scrollY

        this.mousemovex = x
        this.mousemovey = y
        console.log('mousemovex', this.mousemovex)
        console.log('mousemovey', this.mousemovey)
        this.xx = Math.ceil(parseInt(this.mousemovex - this.cx) * 0.05)
        this.yy = Math.ceil(parseInt(this.mousemovey - this.cy) * 0.05)
        console.log('xx', Number(this.xx))
        console.log('yy', Number(this.yy))
      } else if (type === 'up') {
        this.active = false
      }
      // }
    },

  }
}
</script>

<style scoped>
.content {
  position: relative;
  background: orange;
}
</style>
