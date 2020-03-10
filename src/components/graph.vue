<template>
  <div id="app">
    <h4>
      <label>请打开f12查看移动数据</label>

      <el-button size="medium" @click="clearChecked()">清除选中</el-button>
    </h4>
    <div class="box">
      <tree-transfer
        ref="wl-tree-transfer"
        filter
        high-light
        default-transfer
        :mode="mode"
        :title="title"
        :to_data="toData"
        :from_data="fromData"
        :filterNode="filterNode"
        :defaultProps="defaultProps"
        :defaultCheckedKeys="defaultCheckedKeys"
        :defaultExpandedKeys="[2,3]"
        @right-check-change="rightCheckChange"
        @left-check-change="leftCheckChange"
        @removeBtn="remove"
        @addBtn="add"
        height="540px"
        node_key="id"
      ></tree-transfer>
    </div>
  </div>
</template>

<script>
import treeTransfer from "el-tree-transfer";

export default {
  name: "App",
  data () {
    return {
      mode: "transfer", // transfer addressList
      defaultProps: { label: "name", children: "children" },
      fromData: [
        {
          id: 1,
          pid: 0,
          name: "测试左dd侧",
          children: [
            {
              id: 2,
              pid: 1,
              name: "水电费是打发斯",
              // disabled: true,
              children: []
            },
            {
              id: 3,
              pid: 1,
              name: "11-3",
              children: []
            }
            /*    {
              id: 4,
              pid: 1,
              name: "11-4",
              children: [
                {
                  id: 5,
                  pid: 4,
                  name: "11-5",
                  children: [
                    {
                      id: 111,
                      pid: 5,
                      name: "11-111"
                    }
                  ]
                },
                {
                  id: 6,
                  pid: 4,
                  name: "11-6",
                  children: []
                }
              ]
            } */
          ]
        },

        {
          id: 7127,
          pid: 0,
          name: "debugdd",
          children: [
            {
              id: 71272,
              pid: 7127,
              name: "debug22",
              // disabled: true,
              children: []
            },
            {
              id: 71273,
              pid: 7127,
              name: "debug11",
              children: []
            }
          ]
        }
      ], // 穿梭框 - 源数据 - 树形
      toData: [
        {
          id: 1,
          pid: 0,
          name: "测试左dd侧",
          children: [
            {
              id: 2,
              pid: 1,
              name: "水电费是打发斯",
              // disabled: true,
              children: []
            },
            {
              id: 3,
              pid: 1,
              name: "11-3",
              children: []
            },
            {
              id: 4,
              pid: 1,
              name: "11-4",
              children: [
                {
                  id: 5,
                  pid: 4,
                  name: "11-5",
                  children: [
                    {
                      id: 111,
                      pid: 5,
                      name: "11-111"
                    }
                  ]
                },
                {
                  id: 6,
                  pid: 4,
                  name: "11-6",
                  children: []
                }
              ]
            }
          ]
        },
      ], // 穿梭框 - 目标数据 - 树形

      toArray: [

      ],
      defaultCheckedKeys: [

      ] // 左侧默认选中数据
    };
  },

  mounted () {
    setTimeout(() => {
      this.defaultCheckedKeys = [0];
    }, 1000);
  },
  methods: {
    // 清除选中
    clearChecked () {
      this.$refs['wl-tree-transfer'].clearChecked()
    },
    // 自定义筛选函数
    filterNode (value, data, where) {
      console.log(value, data, where);
      if (!value) return true;
      return data[this.defaultProps.label].indexOf(value) !== -1;
    },


    // 添加按钮
    add (fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log("fromData:", fromData);
      console.log("toData:", toData);
      console.log("obj:", obj);
    },
    // 移除按钮
    remove (fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log("fromData:", fromData);
      console.log("toData:", toData);
      console.log("obj:", obj);
    },
    // 左侧源数据选中事件
    leftCheckChange (nodeObj, treeObj, checkAll) {
      console.log(nodeObj);
      console.log(treeObj);
      console.log(checkAll);
    },
    // 右侧目标数据选中事件
    rightCheckChange (nodeObj, treeObj, checkAll) {
      console.log(nodeObj);
      console.log(treeObj);
      console.log(checkAll);
    },


  },
  computed: {
    title () {
      if (this.mode == "transfer") {
        return ["源列表", "目标列表"];
      } else {
        return ["通讯录", "收件人", "抄送人", "密送人"];
      }
    }
  },
  components: { treeTransfer }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}
.btn {
  border: 1px solid #ebeef5;
  padding: 5px 10px;
  background-color: #f5f7fa;
  outline: none;
}
.my-title-right {
  float: right;
  font-size: 12px;
  cursor: pointer;
}
</style>