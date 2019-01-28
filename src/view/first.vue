<template>
  <div class="page">
    <div>
      cnpm install vuex --save
      cnpm install vue-router
      cnpm i element-ui -S
      cnpm install --save axios
      cnpm install crypto-js
      cnpm install less less-loader --save
      cnpm install moment --save
      创建分支： $ git branch mybranch
      切换分支： $ git checkout mybranch
      创建并切换分支： $ git checkout -b mybranch
      更新master主线上的东西到该分支上：$git rebase master
      切换到master分支：$git checkout master
      更新mybranch分支上的东西到master上：$git rebase mybranch
      提交：git commit -a
      对最近一次commit的进行修改：git commit -a –amend
      commit之后，如果想撤销最近一次提交(即退回到上一次版本)并本地保留代码：git reset HEAD^
      合并分支：(merge from) $ git checkout master
      $ git merge mybranch (merge from mybranch)
      删除分支： $ git branch -d mybranch
      强制删除分支： $ git branch -D mybranch
      列出所有分支： $ git branch
      查看各个分支最后一次提交： $ git branch -v
      查看哪些分支合并入当前分支： $ git branch –merged
      查看哪些分支未合并入当前分支： $ git branch –no-merged
      更新远程库到本地： $ git fetch origin
      推送分支： $ git push origin mybranch
      取远程分支合并到本地： $ git merge origin/mybranch
      取远程分支并分化一个新分支： $ git checkout -b mybranch origin/mybranch
      删除远程分支： $ git push origin :mybranch
      1 把目录变成Git可以管理的仓库 git init
      2 把远程分支克隆到本地 git clone http://qiyue@git.vanke.com/VBIM-webApp/bimPlus.git
      3 查看本地分支 git branch
      4 查看本地与远程仓库的所有分支 git branch -a
      5 切换分支 git checkout v0.3.2
      6 创建并切换分支 git checkout -b 'v0.3.3'
      7 更新远程分支到本地并删除本地存在远程不存在的分支 git fetch -p
      8 拉取远程分支代码 git pull origin v0.3.2
      9 查看改动的所有文件 git status
      10 将指定文件添加到本地仓库 git add .|| git add readme.txt
      11 git commit -m '提交注释'
      12 把本地仓库代码推送到远程分支 git push origin v0.3.2
      13 删除本地分支 git branch -d v0.3.0
      14 删除远程分支 git push origin :v0.3.3
      15 当前分支合并到指定分支 git merge v0.3.4
      16 查看提交历史 git log --oneline
      17 查看命令历史 git reflog
      18 回滚到指定的版本 git reset 937dd8e --hard
      提交代码到远程仓库
      git init
      git add README.md
      git commit -m "first commit"
      git remote add origin https://github.com/huanggg/react.git
      git push -u origin master
      Git 合并远程分支
      有的时候我们需要跟别人合作进行开发，然后分别使用不同的Git分支，等项目完成时，
      需要进行代码合并，就需要知道Git如何合并远程分支。
      步骤
      第一步 切换到分支b
      git checkout b
      该指令的意思：创建一个本地分支，并将远程分支放到该分支里面去。
      第二步 将远程代码pull到本地
      git pull origin b
      第三步 返回到你的分支a
      git checkout a
      第四步 合并分支a与分支b
      git merge b
      该指令的意思：当前所在分支与b进行合并。
      第五步 把本地的分支a同步到远程
      git push origin a
      Git 分支
      Git 拉去代码的流程
      情景一：合并主分支代码
      Git fetch -p
      Git pull origin v3.0
      Git checkout v0.3.2
      Git merge v3.0
      情景二：协作过程中合并对方代码
      1、本地的代码先提交
      Git add .
      Git commit -m 'add the new page'
      Git push origin v0.3.2
      Git checkout v0.3.0
      Git pull origin v0.3.0
      Git checkout v0.3.2
      Git merge v0.3.0
      2、本地的代码不提交
      Git stash
      Git checkout elaine-v3
      Git pull origin felaine-v3
      Git checkout kun-v3
      Git merge elaine-v3
      Git stash pop
      情景三：代码合并到主分支
      Git add .
      Git commit -m 'modal A complate'
      Git push origin kun-v3
      Git checkout v3
      Git pull origin v3
      Git merge kun-v3
      Git push origin v3
      Git 提交时机
      每天早上开始工作前，先拉去合并的代码
      下班前，必须提交本地代码
      完成一个功能，或者一个模块，（最低标准就是运行没有问题，不会影响其他模块的
      情况下）合并到主分支
      保证代码在推上去之前解决了 eslint 的警告问题
      Commit 简要的写此次的提交信息
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <!-- <pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :currentPage="pageInfo.page"
        :pagesize="pageInfo.limit"
        :total="pageInfo.total"
      ></pagination> -->
    </div>
    <div>
      <!-- <el-scrollbar style="height:100%;width: 100%">
        <el-tree
          :data="AddRoles"
          :default-checked-keys="default_checked_keys"
          :default-expanded-keys="default_expanded_keys"
          show-checkbox
          node-key="id"
          ref="tree"
          :props="defaultProps"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
              <span>
                <img :src="node.data.icon" alt>
              </span>
              {{ node.data.menuName}}
            </span>
          </span>
        </el-tree>
      </el-scrollbar> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /* 分页 */
      pageInfo: {
        // 页码
        page: 1,
        // 每页显示的条数
        limit: 20,
        // 总共的条数
        total: 100
      },
      // 编辑修改时默认的选中项
      default_checked_keys: [],
      default_expanded_keys: [],
      // 编辑修改时默认的选中项
      AddRoles: [],
      defaultProps: {
        children: 'chirlds',
        label: 'menuName'
      }
    }
  },
  components: {

  },
  methods: {
    // loadNode (node, resolve) {
    //   const params = {
    //     buildNo: node.data.innerNo,
    //     floorNo: node.data.innerNo,
    //     menuType: 'DATA'
    //   }
    //   if (node.level >= 3) { return resolve([]) }
    //   if (node.data.type === 'BUILD') {
    //     if (node.data.children) {
    //       // 结构树楼层接口
    //       axios('/page/project/floor/list', params, 'POST').then(res => {
    //         if (res.data.resultCode === '0000') {
    //           node.data.children = res.data.data
    //           node.data.children.forEach(item => {
    //             item.icon = require('static/images/icon-1.png')
    //           })
    //           if (node.level === 1) {
    //             return resolve(node.data.children)
    //           }
    //         }
    //       })
    //     }
    //   }
    //   // 
    //   if (node.data.type === 'FLOOR') {
    //     axios('/page/project/room/list', params, 'POST').then(res => {
    //       if (res.data.resultCode === '0000') {
    //         node.data.children = res.data.data
    //         node.data.children.forEach(arritem => {
    //           arritem.icon = require('static/images/icon-2.png')
    //           arritem.leaf = true
    //         })
    //         if (node.level === 2) {
    //           return resolve(node.data.children)
    //         }
    //       }
    //     })
    //   }
    // },
    // // 拉取结构树
    // tree () {
    //   const params = {
    //     productId: this.id
    //   }
    //   this.$http('/page/product/queryRoleRelMenu', params, 'POST').then(res => {
    //     if (res.data.resultCode === '0000') {
    //       this.AddRoles = res.data.data.list
    //       if (this.default_checked_keys.length === 0 && this.default_expanded_keys.length === 0) {
    //         this.default_checked_keys = treeContruct(res.data.data.list)
    //         this.default_expanded_keys = treeContruct(res.data.data.list, 1)
    //       }
    //       this.AddRoles.forEach(item => {
    //         item.icon = require('static/images/icon-1.png')
    //         item.chirlds.forEach(Elements => {
    //           Elements.icon = require('static/images/icon-1.png')
    //           Elements.chirlds.forEach(items => {
    //             items.icon = require('static/images/icon-2.png')
    //           })
    //         })
    //       })
    //     }
    //   })
    // },
    // // 勾选结构树复选框
    // handleCheckChange (checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys) {
    //   this.halfCheckedNodes = []
    //   checkedKeys.halfCheckedNodes.forEach(item1 => {
    //     this.halfCheckedNodes.push(item1.id)
    //     this.halfCheckedNodes = Array.from(new Set(this.halfCheckedNodes))
    //   })

    //   this.checkedNodes = []
    //   checkedKeys.checkedNodes.forEach(item1 => {
    //     this.checkedNodes.push(item1.id)
    //     this.checkedNodes = Array.from(new Set(this.checkedNodes))
    //     this.halfCheckedNodes.push(item1.id)
    //     this.halfCheckedNodes = Array.from(new Set(this.halfCheckedNodes))
    //   })
    // },
    // // 查看结构树
    // treeList () {
    //   const params = {
    //     roleId: sessionStorage.getItem('produclisttId'),
    //     'productId': this.data.id
    //   }
    //   this.$http('/page/product/queryRoleRelMenu', params, 'POST').then(res => {
    //     if (res.data.resultCode === '0000') {
    //       // 默认选中项
    //       this.default_checked_keys = treeContruct(res.data.data.list)
    //       // 默认展开项
    //       this.default_expanded_keys = treeContruct(res.data.data.list, 1)

    //       this.AddRoles = treeStatus(res.data.data.list)
    //     }
    //   })
    // },
    // add (index) {
    //   this.itemsNum.push(
    //     {
    //       paramKey: '',
    //       paramValue: ''
    //     }
    //   )
    //   this.$nextTick(() => {
    //     this.$refs.propScroll.wrap.scrollTop = this.$refs.propScroll.$refs.resize.clientHeight
    //   })
    // },
    // // 表格
    // List () {
    //   const params = {
    //     'levelReq1': sessionStorage.getItem('levelReq1') ? sessionStorage.getItem('levelReq1').split(',') : [],
    //     'levelReq2': sessionStorage.getItem('levelReq2') ? sessionStorage.getItem('levelReq2').split(',') : [],
    //     'levelReq3': sessionStorage.getItem('levelReq3') ? sessionStorage.getItem('levelReq3').split(',') : [],
    //     'levelReq4': sessionStorage.getItem('levelReq4') ? sessionStorage.getItem('levelReq4').split(',') : [],
    //     'levelReq5': sessionStorage.getItem('levelReq5') ? sessionStorage.getItem('levelReq5').split(',') : [],
    //     'startTime': sessionStorage.getItem('startTime'),
    //     'endTime': sessionStorage.getItem('endTime'),
    //     pageNo: this.pageInfo.page,
    //     pageSize: this.pageInfo.limit,
    //   }
    //   this.$http('/componentPool/list', params, 'POST').then(res => {
    //     if (res.data.resultCode === '0000') {
    //       console.log('99999', res.data.data)
    //       this.pageInfo.total = res.data.data.totalSize
    //       this.tableData = res.data.data.pageList
    //       if (this.$refs['myScrollbar']) {
    //         this.$refs['myScrollbar'].wrap.scrollTop = 0
    //       }

    //       this.isloading = false
    //     }
    //   })
    // },
    // handleSizeChange (val) {
    //   this.pageInfo.limit = val
    //   this.pageInfo.page = 1
    //   this.List()
    // },
    // handleCurrentChange (val) {
    //   this.pageInfo.page = val
    //   this.List()
    // }
  }
}
</script>

<style scoped >
</style>
