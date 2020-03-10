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
    <!-- <div style="width:calc(100% - 200px);border:1px solid blue;height:100%" v-if="isactive==1">
      <router-view />
    </div>-->
    <div style="width:calc(100% - 200px);border:1px solid blue;height:100%">
      <router-view :key="kkk" />
    </div>
  </div>
</template>
<script>
import Graph from './graph.vue'
export default {
  name: 'login',
  data () {
    return {
      kkk: 0,
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
        {
          id: 7,
          name: 'cropper'
        },
        {
          id: 8,
          name: 'cropper2'
        },
         {
          id: 9,
          name: 'Dragablenode'
        }

      ],
      isactive: 0,
    }
  },
  mounted () {
  },
  watch: {
    $route: function (val) {

      this.kkk += 1
      console.log(666333366, this.kkk)
    }
  },
  components: {
    Graph
  },
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
