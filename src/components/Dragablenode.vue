
<template>
  <div>
    <div class="exam_structure">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>

      <el-button type="primary" size="small" class="add_new_question" @click="add_new_question">
        <i></i>添加父节点
      </el-button>
    </div>

    <div class="question_info_lists">
      <el-tree
        ref="tree"
        :key="tree_key"
        :data="treeData"
        node-key="id"
        draggable
        @node-click="nodeClick"
        :render-content="renderContent"
        :expand-on-click-node="false"
        :default-expanded-keys="defaultExpand"
        show-checkbox
        :filter-node-method="filterNode"
      ></el-tree>

      <el-row class="add_question" v-show="add_question_flag">
        <el-col :span="12">
          <el-input v-model="new_question_name" placeholder="请输入大题名称"></el-input>
        </el-col>

        <el-col :span="12">
          <el-button size="mini" class="btn_sure" @click.stop="add_question_sure">确定</el-button>

          <el-button size="mini" class="btn_cancel" @click.stop="add_question_cancel">取消</el-button>
        </el-col>
      </el-row>
    </div>
    <el-button type="primary" @click="nodeClick2">主要按钮</el-button>
  </div>
</template>
 
<script>
var maxid = 1000
export default {
  name: "tree1",

  watch: {
    filterText (val) {
      this.$refs.tree.filter(val);
    },

    treeData: {
      handler (newName, oldName) {
        console.log(newName, 'newvalnewvalnewvalnewval')
      },

      deep: true
    }
  },
  mounted () {
    // this.nodeClick2()
  },
  data () {

    return {
      filterText: '',
      treeData:
        [
          {
            id: 1,
            label: '一级 1',
            isEdit: false,
            children: [
              {
                id: 4,
                label: '二级 1-1',
                isEdit: false,
                children: [
                  {
                    id: 9,
                    label: '三级 1-1-1',
                    isEdit: false,
                    children: []
                  },

                ]
              },



            ]
          },

        ],
      add_question_flag: false,
      new_question_name: '',
      tree_key: 0,
      defaultExpand: []
    }
  },
  methods: {
    nodeClick2 () {
      // console.log('data', document.getElementsByClassName('el-tree').background)
      // document.querySelector(".el-tree").style.backgroundColor = "red";
      document.querySelector(".el-tree-node__content").style.backgroundColor = "red";
      document.querySelector(".el-tree-node__content").style.color = "white";

      // this.$emit('showInput', true, data, node)
      // this.$refs.tree.style.background = 'red'
    },
    nodeClick (data, node) {
      // console.log('data', document.getElementsByClassName('el-tree').background)
      // document.querySelector(".el-tree").style.backgroundColor = "red";
      this.$emit('showInput', true, data, node)
      // this.$refs.tree.style.background = 'red'
    },
    filterNode (value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 添加新大题
    add_new_question () {
      const nodeObj = { id: '', label: 'new menu', isEdit: false, children: [] }
      this.treeData.push(nodeObj)
      this.add_question_flag = true
    },
    add_question_sure () {   //确定
      const nodeObj = { id: ++maxid, label: this.new_question_name, isEdit: false, children: [] }
      this.treeData.push(nodeObj)
      this.add_question_flag = false
    },
    add_question_cancel () {    //取消
      this.add_question_flag = false
      this.new_question_name = ''
    },
    //      增加
    append (store, node, data) {

      //新增数据
      const nodeapp = { id: ++maxid, label: '增加节点', isEdit: false, children: [], ll: 'ggg' }
      console.log(data, node, store, 'data')

      if (!data.children) {
        this.$set(data, 'children', [])
        debugger
      }
      data.children.push(nodeapp)
      if (!node.expanded) {
        node.expanded = true
      }

      // const parent = node.parent
      // const children = parent.data
      // console.log(children, 'children')

      // // const cIndex = children.findIndex(d => d.id === data.id)
      // console.log(cIndex, 'cIndex')

      // const tempChildrenNodex2 = children[cIndex]  //拿到被添加的上一级
      // console.log(tempChildrenNodex2.children[cIndex - 1], 22222222)
    },
    // append (data) {
    //   const newChild = { id: id++, label: 'testtest', children: [] };
    //   if (!data.children) {
    //     this.$set(data, 'children', []);
    //   }
    //   data.children.push(newChild);
    // },
    // 修改
    nodeEdit (ev, store, data) {
      data.isEdit = true
      this.$nextTick(() => {
        const $input = ev.target.parentNode.parentNode.querySelector('input') || ev.target.parentElement.parentElement.querySelector('input')
        !$input ? '' : $input.focus()
      })

    },
    edit_sure (ev, data) {
      const $input = ev.target.parentNode.parentNode.querySelector('input') || ev.target.parentElement.parentElement.querySelector('input')
      if (!$input) {
        return false
      } else {
        data.label = $input.value
        data.isEdit = false
      }
    },
    // 节点删除
    nodeDelete (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    // 节点上移
    nodeUp (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const cIndex = children.findIndex(d => d.id === data.id)
      if (parent.level === 0 && cIndex === 0) {
        debugger
        return
      } else if (parent.level !== 0 && cIndex === 0) { //不同父节点中移动
        // alert('不同父节点中移动')
        const parent2 = parent.parent
        const children2 = parent2.data.children || parent2.data
        const pIndex2 = parseInt(children2.findIndex(p => p.id === parent.data.id), 10) - 1
        if (pIndex2 < 0) return
        children2[pIndex2].children.push(data)
        children.splice(cIndex, 1)
        this.defaultExpand[0] = children2[pIndex2].id
        debugger
      } else if ((parent.level === 0 && cIndex !== 0) || (parent.level !== 0 && cIndex !== 0)) {
        const tempChildrenNodex1 = children[cIndex - 1]
        const tempChildrenNodex2 = children[cIndex]
        this.$set(children, cIndex - 1, tempChildrenNodex2)
        this.$set(children, cIndex, tempChildrenNodex1)
        this.defaultExpand[0] = data.id
        debugger
      }
      this.tree_key++
    },

    // 节点下移
    nodeDown (store, node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const cIndex = children.findIndex(d => d.id === data.id)
      const cLength = children.length - 1 // 最边上的节点
      const allLevel = store.data.length - 1 // 树的深度
      if (parent.level === allLevel && cIndex === cLength) { // 最最末的节点
        return
      } else if (parent.level !== allLevel && cIndex === cLength) { //父节点不同
        // alert('不能移动')
        const parent2 = parent.parent
        const children2 = parent2.data.children || parent2.data
        const pIndex2 = parseInt((children2.findIndex(p => p.id === parent.data.id)), 10)
        if (pIndex2 === allLevel) return
        children2[pIndex2 + 1].children.push(data)
        children.splice(cIndex, 1)
        this.defaultExpand[0] = children2[pIndex2 + 1].id
        debugger
      } else if ((parent.level === allLevel && cIndex !== cLength) || (parent.level !== allLevel && cIndex !== cLength)) { // 父节点相同
        const tempChildrenNodex1 = children[cIndex + 1]
        const tempChildrenNodex2 = children[cIndex]
        this.$set(children, cIndex + 1, tempChildrenNodex2)
        this.$set(children, cIndex, tempChildrenNodex1)
        this.defaultExpand[0] = data.id
      }
      this.tree_key++
    },
    showOrEdit (data) {
      if (data.isEdit) {
        return <input type="text" value={data.label} on-blur={ev => this.edit_sure(ev, data)} />
      } else {
        return <span className="node_labe">{data.label}</span>
      }
    },
    mouseovere () {
      document.querySelector(".el-tree-node__content:hover").style.backgroundColor = "black";
      document.querySelector(".el-tree-node__content:hover").style.color = "white";
    },
    mouseouttt () {
      document.querySelector(".el-tree-node__content:hover").style.backgroundColor = "gray";
      document.querySelector(".el-tree-node__content:hover").style.color = "black";
    },
    // 结构树操作group node,
    renderContent (h, { node, data, store }) {
      return (
        <span class="test" on-mouseover={(ev) => this.mouseovere(ev, store, data)}
          on-mouseout={(ev) => this.mouseouttt(ev, store, data)}
        >
          <span class="el-icon-document ">
            {this.showOrEdit(data)}
          </span>
          <div class="tree_node_op" style="  float: right">
            <i class="el-icon-edit" on-click={(ev) => this.nodeEdit(ev, store, data)} style='margin:0px 6px'></i>
            <i class="el-icon-delete" on-click={() => this.nodeDelete(node, data)} style='margin-right:6px'></i>
            <i class="el-icon-upload2" on-click={() => this.nodeUp(node, data)} style='margin-right:6px'></i>
            <i class="el-icon-download" on-click={() => this.nodeDown(store, node, data)} style='margin-right:6px'></i>
            <i class="el-icon-plus" on-click={() => this.append(store, node, data)}></i>
          </div>
        </ span>)
    }
  }
}
</script>
<style scoped>
.test {
  background: red;
}
</style>
