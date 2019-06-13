<template>
  <div style="width:100%;height:100%;">
    <div style="display:flex">
      <div
        @mousedown="getMousePos('mousedown')"
        @mousemove="getMousePos('mousemove')"
        @mouseup="getMousePos('up')"
        style="width:300px;height:100%;position:relative;top:0px;left:0px"
      >
        <table cellpadding="0" cellspacing="0">
          <tr v-for="(n,index) in 10" :key="index">
            <td
              v-for="(nn,index) in 15"
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
                ondragenter="dragenter()"
                ondragover="dragover()"
              ></td>
            </tr>
          </table>
        </div>
      </div>
      <div style>
        <table cellpadding="0" cellspacing="0">
          <tr v-for="(n,index) in yy" :key="index">
            <td
              v-for="(nn,index) in xx"
              :key="index"
              style="border:1px solid #d4d4d4;width:56px;height:25px;background:''"
              contenteditable="true"
            ></td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      <treeselect v-model="value" :multiple="true" :options="options"/>
    </div>
    <div>{{value}}</div>
  </div>
</template>

<script>
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import Treeselect from '@riophae/vue-treeselect'
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
      value: null,
      options: [
        {
          id: 'fruits',
          label: 'Fruits',
          children: [{
            id: 'apple',
            label: 'Apple 🍎',
            isNew: true,
          }, {
            id: 'grapes',
            label: 'Grapes 🍇',
          }, {
            id: 'pear',
            label: 'Pear 🍐',
          }, {
            id: 'strawberry',
            label: 'Strawberry 🍓',
          }, {
            id: 'watermelon',
            label: 'Watermelon 🍉',
          }],
        },
        {
          id: 'vegetables',
          label: 'Vegetables',
          children: [
            {
              id: 'corn',
              label: 'Corn 🌽',
            },
            {
              id: 'carrot',
              label: 'Carrot 🥕',
            },
            {
              id: 'eggplant',
              label: 'Eggplant 🍆',
            },
            {
              id: 'tomato',
              label: 'Tomato 🍅',
            }
          ],
        }
      ],

    }
  },
  mounted () {

  },
  components: { Treeselect },
  methods: {
    dragenter (evt) {
      evt.preventDefault()
      console.log(555566)
    },
    getMousePos (type) {
      // if (this.ShapeType !== '') {
      if (type === 'mousedown') {
        const e = event || window.event
        const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
        const scrollY = document.documentElement.scrollTop || document.body.scrollTop
        const x = e.pageX || e.clientX + scrollX
        const y = e.pageY || e.clientY + scrollY
        // console.log(x)
        // console.log(y)
        this.cx = x
        this.cy = y
        this.active = true
        return false
      } else if (type === 'mousemove' && this.active === true) {
        const e = event || window.event
        const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
        const scrollY = document.documentElement.scrollTop || document.body.scrollTop
        const x = e.pageX || e.clientX + scrollX
        const y = e.pageY || e.clientY + scrollY

        this.mousemovex = x
        this.mousemovey = y
        // console.log('mousemovex', this.mousemovex)
        // console.log('mousemovey', this.mousemovey)
        this.xx = Math.ceil(parseInt(this.mousemovex - this.cx) * 0.05)
        this.yy = Math.ceil(parseInt(this.mousemovey - this.cy) * 0.05)
        // console.log('xx', Number(this.xx))
        // console.log('yy', Number(this.yy))
        return false
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
  background: red;
}
</style>
