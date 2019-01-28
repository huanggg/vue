<template>
  <div class="lyout" style="display:flex">
    <div class="left" style="width:200px;height:100%;" ref="leftside">
      <div class="logo" @click="gotohome()">
        <img
          src="/static/images/logobig.png"
          style="height:22px;width:142px;cursor:pointer"
          v-if="!isCollapse"
        >
        <img
          src="/static/images/LOGOup.png"
          style="height:56px;width:50px;cursor:pointer"
          v-else-if="isCollapse"
        >
      </div>
      <div style="width:100%;height:26px;background:#242730;">
        <div @click="Packup()" class="packupimg">
          <img
            :src="require('static/images/icon_navclose.png')"
            class="iscollapse"
            v-if="!isCollapse"
          >
          <img
            :src="require('static/images/icon_navopen.png')"
            class="iscollapse"
            v-else-if="isCollapse"
          >
        </div>
      </div>
      <div class="main">
          <div class="leftsideconrent" ref="leftside">
            <div
              style="wdith:100%;height:100%;position:absolute;top:0px;left:0px;background:#242730"
            >
              <img src="/static/images/NavMenu-bg.png" alt style="width:100%;height:100%">
            </div>
            <div class="leftside">
              <div style="background:black;opacity: 0.9;" class="menu">
                <el-menu
                  :default-active="'/'+this.$store.state.data.subindex"
                  :collapse-transition="false"
                  :unique-opened="true"
                  text-color="gray"
                  background-color="#454b5c"
                  active-text-color="white"
                  class="el-menu-vertical-demo"
                  :collapse="isCollapse"
                  @select="selectchange"
                >
                  <el-submenu :index="'/'+item.id" v-for="(item,index) in topmenu" :key="item.id">
                    <template slot="title">
                      <div
                        @mouseover="mouseover(item,index)"
                        @mouseout="mouseout(item,index)"
                        @click="click(item,index)"
                      >
                        <img :src="item.iconAfter" class="submenuimg" v-if="item.imgshow0">
                        <img :src="item.iconSelect" class="submenuimg" v-else-if="item.imgshow">
                        <img :src="item.iconInit" class="submenuimg" v-else-if="item.imgshow2">
                        <span slot="title">{{item.menuName}}</span>
                      </div>
                    </template>
                    <el-menu-item-group style="text-indent:15px;">
                      <div
                        v-for="(item,index) in item.chirlds"
                        :key="item.id"
                        @mouseover="submouseover(item,index)"
                      >
                        <el-menu-item :index="'/'+item.id">
                          <router-link :to="'/'+item.menuCode" tag="div">{{item.menuName}}</router-link>
                        </el-menu-item>
                      </div>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div
      class="right"
      style="width:calc(100% - 200px);height:100%;position:relative"
      ref="rightside"
    >
      <img
        src="/static/images/LOGO300.png"
        style="width:width:28px;height:28px;position:absolute;top:12px;left:-12px"
        v-if="popover_name.type===2"
      >
      <img
        src="/static/images/logo30px.png"
        style="width:width:28px;height:28px;position:absolute;top:12px;left:-12px"
        v-else-if="popover_name.type===1"
      >
      <div class="rightheader">
        <!-- 右侧左边 -->
        <div>
          <el-popover placement="bottom-start" width="270" trigger="click" v-model="visible">
            <!-- 弹出框样式 -->
            <!-- 弹出框样式 -->
            <div class="popover_content" @mouseleave="visible=false,showdataclass=false">
              <!-- 头部平台侧 -->
              <div>
                <div class="popover_content_header" v-if="popover_content_list_Atrr1">
                  <div>
                    <span style="font-size: 14px;color: #999999;margin-right:6px;">平台侧</span>
                    <span style="color: #999999;font-size:12px;">平台运维人员可进入</span>
                  </div>
                  <div
                    v-for="(item) in popover_content_list_Atrr1"
                    :key="item.id"
                    style="width:100%;height:53px;padding-top:17px;cursor:pointer"
                    @click="ctrlcenter(item)"
                  >
                    <img
                      src="/static/images/logo3.png"
                      style="vertical-align: middle;margin-right:9px"
                    >
                    <span style="color: #666666;">{{item.name}}</span>
                  </div>
                </div>
                <!-- 头部平台侧 -->
                <!-- 底部部产品侧 -->
                <div class="popover_content_list" v-if="popover_content_list_Atrr2">
                  <div style="padding:26px 0px 10px 27px">
                    <span style="font-size: 14px;color: #999999;margin-right:6px;">产品侧</span>
                    <span style="color: #999999;font-size:12px;">您所拥有权限的产品</span>
                  </div>
                  <div
                    class="popover_content_list_item"
                    v-for="(item) in popover_content_list_Atrr2"
                    :key="item.id"
                    @click="ctrlcenter(item)"
                  >
                    <img src="/static/images/LOGO22.png" alt style="width:22px;height:22px;">
                    <span style="color: #666666;margin-left:9px;">{{item.name}}</span>
                  </div>
                </div>
              </div>
              <!-- 底部部产品侧 -->
            </div>
            <!-- 弹出框样式 -->
            <!-- 弹出框样式 -->
            <el-button
              slot="reference"
              type="text"
              style="width:103px;color: #666666;height:30px;text-indent:26px;font-weight:bold"
              @click="showdataclass=!showdataclass"
            >
              <span style="margin-right:10px;">{{popover_name.name}}</span>
              <!-- 图标 -->
              <img
                src="/static/images/down.png"
                alt
                style="width:8px;height:5px;margin-right:18px;transform: rotate(180deg);"
                v-if="showdataclass"
              >
              <img
                src="/static/images/down.png"
                alt
                style="width:8px;height:5px;margin-right:18px;"
                v-else-if="!showdataclass"
              >
              <!-- 图标 -->
            </el-button>
          </el-popover>
        </div>
        <!-- 右侧左边 -->
        <!-- 右侧右边 -->
        <div style="margin-right:25px;display:flex;align-items:center;font-size:12px;">
          <img src="/static/images/u119.jpg" class="photo">
          <div style="margin-right:10px;">{{userName}}</div>
          <div @click="coloed()" style="cursor:pointer">退出</div>
        </div>
        <!-- 右侧右边 -->
      </div>
      <div class="rightside" ref="rightside">
        <router-view></router-view>
      </div>
    </div>
    <div class="layer" v-if="this.$store.state.layershow"></div>
    <div class="layer2" v-if="this.$store.state.layershow2"></div>
  </div>
</template>
<script>
import Layouthome from './layouthome'
import { userProductList } from '@/util/fromat.js'
export default {
  name: 'lyout',
  data () {
    return {
      datatype: '',
      popover_name: '',
      userName: '',
      showdataclass: false,
      visible: false,
      isCollapse: false,
      layershow: false,
      popover_content_list_Atrr1: [],
      popover_content_list_Atrr2: [],
      topmenu: []
    }
  },
  created () {
  },
  components: {
    Layouthome
  },
  mounted () {
    console.log('/' + this.$store.state.data.subindex)
    this.datatype = JSON.parse(sessionStorage.getItem('datatype'))
    this.popover_name = JSON.parse(sessionStorage.getItem('datatype'))
    console.log('46554688748478gfysgfdsgf', this.datatype.type)
    this.userName = JSON.parse(sessionStorage.getItem('userName'))
    this.List()
    this.popoverList()
  },
  methods: {
    coloed () {
      this.$router.push({ name: 'login' })
      sessionStorage.clear()
    },
    popoverList () {
      const params = {
      }
      this.$http('/page/identity/queryByUser', params, 'POST').then(res => {
        if (res.data.resultCode === '0000') {
          const upData = userProductList(res.data.data)
          this.popover_content_list_Atrr1 = upData['1']
          this.popover_content_list_Atrr2 = upData['2']
        }
      })
    },
    ctrlcenter (item) {
      this.popover_name = item
      this.$router.push({ name: 'layouthome' })
      this.$store.commit('savedata', { subindex: 11 })
      sessionStorage.setItem('datatype', JSON.stringify(item))
      this.topmenu = []
      this.List()
    },
    List () {
      const params = {
        'type': Number(JSON.parse(sessionStorage.getItem('datatype')).type),
        'productId': JSON.parse(sessionStorage.getItem('datatype')).productId
      }
      this.$http('/page/menu/queryByUser', params, 'POST').then(res => {
        if (res.data.resultCode === '0000') {
          this.topmenu = res.data.data.menuList
          sessionStorage.setItem('buttonList', JSON.stringify(res.data.data.buttonList))
          this.topmenu.forEach((item, index) => {
            item.imgshow = false
            item.imgshow0 = false
            item.imgshow2 = true
          })
          this.topmenu = res.data.data.menuList.map(item => {
            let iconInit = null
            let iconAfter = null
            let iconSelect = null
            let menuName = null
            let chirlds = null
            let parentId = null
            let id = null
            let menuCode = null
            let menuLevel = null
            let menuSort = null
            let menuPath = null
            try {
              iconInit = require(`static/images/${item.iconInit}`)
              iconAfter = require(`static/images/${item.iconAfter}`)
              iconSelect = require(`static/images/${item.iconSelect}`)
              menuName = item.menuName
              chirlds = item.chirlds
              parentId = item.parentId
              id = item.id
              menuCode = item.menuCode
              menuLevel = item.menuLevel
              menuSort = item.menuSort
              menuPath = item.menuPath
            } catch (err) {
              console.log(err)
            }
            return {
              iconInit: iconInit,
              iconAfter: iconAfter,
              iconSelect: iconSelect,
              imgshow: false,
              imgshow0: false,
              imgshow2: true,
              menuName: menuName,
              chirlds: chirlds,
              parentId: parentId,
              id: id,
              menuCode: menuCode,
              menuLevel: menuLevel,
              menuSort: menuSort,
              menuPath: menuPath
            }
          })
          console.log('9999944444rerewre', this.topmenu)
        } else {
          console.log(4545454354234646515)
        }
      })
    },
    mouseover (num, index) {
      // 选中时的图片
      this.topmenu[index].imgshow = false
      // 经过时的图片
      this.topmenu[index].imgshow0 = true
      // 默认时的图片
      this.topmenu[index].imgshow2 = false
    },
    mouseout (num, index) {
      this.topmenu[index].imgshow = false
      this.topmenu[index].imgshow0 = false
      this.topmenu[index].imgshow2 = true
    },
    click (num, index) {
      for (let i = 0; i < this.topmenu.length; i++) {
        this.topmenu[i].imgshow2 = true
        this.topmenu[i].imgshow = false
      }
      this.topmenu[index].imgshow = true
      this.topmenu[index].imgshow0 = false
      this.topmenu[index].imgshow2 = false
    },
    submouseover (num, index) {
      this.topmenu[num.index - 1].imgshow = true
      this.topmenu[num.index - 1].imgshow0 = false
      this.topmenu[num.index - 1].imgshow2 = false
    },
    Packup () {
      if (this.isCollapse === false) {
        this.isCollapse = !this.isCollapse
        this.$nextTick(function () {
          this.$refs.leftside.style.width = '70px'
          this.$refs.rightside.style.width = 'calc(100% - 70px)'
        })
      } else {
        this.isCollapse = !this.isCollapse
        this.$refs.leftside.style.width = '200px'
        this.$refs.rightside.style.width = 'calc(100% - 200px)'
      }
    },
    gotohome () {
      this.$router.push({ name: 'home' })
      // 设置默认展开项
      this.$store.commit('savedata', { subindex: 11 })
    },
    selectchange (index, indexPath) {
      console.log(index.substring(1))
      this.$store.commit('savedata', { subindex: index.substring(1) })
    }

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import './layout.css'; */
.lyout {
  width: 100%;
  height: 100%;
}

.logo {
  background: #181a1d;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.packupimg {
  cursor: pointer;
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.iscollapse {
  width: 12px;
  height: 12px;
}

.main {
  width: 100%;
  height: calc(100% - 76px);
  display: flex;
  position: relative;
}
.leftsideconrent {
  width: 200px;
  height: 100%;
  /* background-color: rgb(63, 60, 60); */
  background: #242730;
  position: relative;
}

.rightside {
  width: 100%;
  height: calc(100% - 50px);
  padding-top: 3px;
}
.rightheader {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 30px #e0e1e4;
}

.popover_content {
  width: 270px;
  height: 415px;
  background-image: linear-gradient(0deg, #f0f0f0 0%, #ffffff 100%);
  opacity: 0.96;
}
.popover_content_header {
  width: 100%;
  height: 98px;
  padding: 25px 0px 0px 27px;
  border-bottom: 2px solid #eeefef;
}
.popover_content_list_item {
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding-left: 27px;
  margin-top: 10px;
  font-size: 12px;
  align-items: center;
  display: flex;
  cursor: pointer;
}
.popover_content_list_item:hover {
  background-color: #e9e9e9;
}

/* -------------------------------------------------------------- 侧边导航的样式*/
.menu .el-menu {
  border: 0px;
}
.menu .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  border: 0px;
  background: #1890ff;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #474d5d !important;
  opacity: 1;
}
.el-menu-item.is-active {
  background: url("/static/images/liner.png") no-repeat 0px 0px !important;
  font-weight: bold;
}
.el-menu-item,
.el-submenu__title {
  height: 44px;
  line-height: 44px;
  position: relative;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
}

/* -------------------------------------------------------------- 侧边导航的样式*/

.layer {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #242730;
  opacity: 0.3;
  z-index: 2032;
}
.layer2 {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #242730;
  opacity: 0.3;
  z-index: 20;
}
.photo {
  width: 32px;
  height: 32px;
  margin: 10px 11px 12px 0px;
  border-radius: 50%;
}
.submenuimg {
  width: 24px;
  height: 24px;
  margin-right: 15px;
}
</style>
