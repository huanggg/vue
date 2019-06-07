<template>
  <div>
    <!-- hello -->
    <!-- <svg version="1.1" style="background:blue">
      <circle
        :cx="cx"
        :cy="cy"
        r="40"
        stroke="black"
        stroke-width="2"
        fill="red"
        @mousemove="getMousePos"
        @click="getMousePos1"
        v-if="true"
      ></circle>
    </svg>-->

    <!-- <div
      style="width:500px;height:500px;background:red;display:flex;justify-content:center;align-items:center"
      v-on:click.self="kk()"
    >
      <div style="width:400px;height:400px;background:blue"></div>
    </div>-->
    <!-- <table>
      <tr>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
      </tr>
      <tr>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
      </tr>
      <tr>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
      </tr>
    </table>-->
    <!-- <div @click="add(1)">圆形</div>
    <div @click="add(2)">兔形</div>
    <div v-for="(item,index) in arrt" :key="index">
      <div v-if="item.type==='u'" class="uu">
        <div contenteditable="true" class="kkk"></div>
      </div>
      <div v-if="item.type==='o'">{{item.type}}</div>
    </div>-->
    <div
      style="margin:200px;position:relative;left:0px;top:0px;background:orange;width:400px;height:100px;"
    >
      <div
        contenteditable="true"
        style="position:absolute;top:30%;left:0%;z-index:2000;background:'';width:50%;height:40%;"
      >My first SVG</div>
      <!-- <svg version="1.1" style="background:blue;width:100%;height:100%;">
        <circle cx="50.5" cy="50" r="50" stroke="black" stroke-width="1" fill="white" style="transform:scale(1,1)"></circle>
      </svg>-->
      <svg version="1.1" style="background:blue;width:100%;height:100%;">
        <polygon
          points="0,30 50,30 50,0 100,50 50,100 50,70 0,70 "
          style="fill:white;stroke:red;stroke-width:-0.8;transform:scale(4,1)"
        ></polygon>
      </svg>
    </div>
  </div>
</template>
<script>
// import { Message } from 'element-ui'
// import aes from '@/util/aes'
// import { setTimeout } from 'timers'

export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: '',
      cx: 110,
      cy: 110,
      num: 0,
      arrt: []
    }
  },
  mounted () {

  },
  components: {},
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
    getMousePos (event) {
      const e = event || window.event
      const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
      const scrollY = document.documentElement.scrollTop || document.body.scrollTop
      const x = e.pageX || e.clientX + scrollX
      const y = e.pageY || e.clientY + scrollY
      console.log(x)
      console.log(y)
      this.cx = x
      this.cy = y
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
.box {
  border: 1px dotted red;
  width: 200px;
  height: 200px;
}
td {
  border: 1px solid red;
  width: 50px;
  height: 50px;
}
.uu {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  background: blue;
  border-radius: 50%;
  margin-left: 50px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.kkk {
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  height: 80%;
  background: orange;
}
</style>
