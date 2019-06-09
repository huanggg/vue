<template>
  <div style="width:100%;height:100%;">
    <el-button type="text" @click="seletetype('circle')">圆形</el-button>
    <el-button type="text" @click="seletetype('triangle')">箭头三角形</el-button>
    <div style="display:flex">
      <div
        @mousedown="getMousePos('mousedown')"
        @mousemove="getMousePos('mousemove')"
        @mouseup="getMousePos('up')"
        style="width:500px;height:500px;background:red"
      >
        <div class="content" :style="{width:xx+'px',height:yy+'px',left:cx+'px',top:cy+'px'}">
          <!-- cxcx -->
          <!-- <div
          contenteditable="true"
          style="position:absolute;top:30%;left:0%;z-index:2000;background:'';width:50%;height:40%;"
          >My first SVG</div>-->
          <svg version="1.1" style="background:'';width:100%;height:100%;">
            <circle
              cx="50.5"
              cy="50"
              r="50"
              stroke="black"
              stroke-width="1"
              fill="white"
              v-if="ShapeType==='circle'"
              :style="{transform:'scale('+xx/100+','+yy/100+')'}"
            ></circle>

            <polygon
              points="0,30 50,30 50,0 100,50 50,100 50,70 0,70 "
              stroke="black"
              stroke-width="0.5"
              fill="white"
              v-if="ShapeType==='triangle'"
              :style="{transform:'scale('+xx/100+','+yy/100+')'}"
            ></polygon>
          </svg>
        </div>
        <!-- vxe-table
      vue-treeselect
        vue-crpopper-->
      </div>
      <div style="width:502px;height:502px;background:blue">
        <Demo></Demo>
      </div>
    </div>
  </div>
</template>
<script>
// import { type } from 'os'
// import { Message } from 'element-ui'
// import aes from '@/util/aes'
// import { setTimeout } from 'timers'
import Demo from './demo'
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: '',
      cx: 110,
      cy: 110,
      mousemovex: 0,
      mousemovey: 0,
      xx: 0,
      yy: 0,
      active: false,
      ShapeType: '',
      num: 0,
      arrt: [],
      scalex: 3,
      scaley: 5

    }
  },
  mounted () {

  },
  components: { Demo },
  methods: {
    add (n) {
      if (n === 1) {
        const ll = {
          id: this.num,
          text: 'nihao',
          type: 'u'
        }
        this.arrt.push(ll)
        this.num++
      } else if (n === 2) {
        const ll = {
          id: this.num,
          text: 'ni',
          type: 'o'
        }
        this.arrt.push(ll)
        this.num++
        console.log(this.arrt)
      }
    },
    kk () {
      console.log(22222)
    },
    seletetype (type) {
      this.ShapeType = type
      console.log('this.ShapeType', this.ShapeType)
    },
    getMousePos (type) {
      if (this.ShapeType !== '') {
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
          this.xx = parseInt(this.mousemovex - this.cx)
          this.yy = parseInt(this.mousemovey - this.cy)
          console.log('xx', this.xx)
          console.log('yy', this.yy)
        } else if (type === 'up') {
          this.active = false
        }
      }
    },
    getMousePos1 (event) {
      this.getMousePos2()
    },
    getMousePos2 (event) {
      const e = event || window.event
      const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
      const scrollY = document.documentElement.scrollTop || document.body.scrollTop
      const x = e.pageX || e.clientX + scrollX
      const y = e.pageY || e.clientY + scrollY
      console.log(x)
      console.log(y)
      // this.cx = x
      // this.cy = y
    }

  }
}
</script>

<style scoped>
.kkk {
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  height: 80%;
  background: orange;
}
.content {
  position: relative;

  background: orange;
}
</style>
