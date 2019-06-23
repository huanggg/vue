<template>
  <div style="width:100%;height:100%;display:flex">
    <div style="width:200px;border:1px solid red;height:100%">
      <div
        v-for="(item,index) in routerLink"
        :key="item.id"
        style="height:50px;line-height:50px;margin-bottom:0px"
        :class="{active:index===isactive}"
        @click="seletactive(index)"
      >
        <router-link :to="{name:item.name,query:{id:item.id}}" tag="div">{{item.name}}</router-link>
      </div>
    </div>
    <div style="width:calc(100% - 200px);border:1px solid blue;height:100%">
      <router-view/>
    </div>
  </div>
</template>
<script>
// import { type } from 'os'
// import { Message } from 'element-ui'
// import aes from '@/util/aes'
// import { setTimeout } from 'timers'
export default {
  name: 'login',
  data () {
    return {
      routerLink: [
        {
          id: 1,
          name: 'excel'
        },
        {
          id: 2,
          name: 'sortTable'
        },
        {
          id: 3,
          name: 'newTable'
        },
        {
          id: 4,
          name: 'vuephotopreview'
        },
        {
          id: 5,
          name: 'html2canvas'
        },
        {
          id: 6,
          name: 'graph'
        },

      ],
      isactive: 0,
    }
  },
  mounted () {
  },

  components: {},
  methods: {
    seletactive (index) {
      this.isactive = index
    }
  }
}
</script>

<style scoped>
.active {
  background: lightgray;
}
</style>
