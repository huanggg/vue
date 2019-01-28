// <template>
//   <div class="CheckBox">
//     <div class="tableheader">
//       <div style="font-weight:bold"></div>
//       <div style="display:flex;align-items:center">
//         <div style="width:22px;height:22px;cursor:pointer" @click="layer(false,false)">
//           <img src="/static/images/close.png" style="width:100%;height:100%">
//         </div>
//       </div>
//     </div>
//     <div class="search">
//       <div class="top" style="display: flex;justify-content: space-between;">
//         <div style="display:flex;margin-right:47px;" class="left">
//           <div style="min-width:92px"></div>
//           <div style="max-width:202px;margin-right:4px;">
//             <!-- 请选择类别(C) -->
//             <el-select
//               v-model="major_first_list_value"
//               placeholder
//               @change="changeselect_first"
//               multiple
//               filterable
//               collapse-tags
//             >
//               <el-option
//                 v-for="item in major_first_list"
//                 :key="item.levelId"
//                 :label="item.levelName"
//                 :value="item.levelId"
//               ></el-option>
//             </el-select>
//           </div>
//           <div style="max-width:202px;margin-right:4px;">
//             <el-select
//               v-model="major_second_list_value"
//               @change="changeselect_second"
//               multiple
//               filterable
//               collapse-tags
//             >
//               <el-option
//                 v-for="item in major_second_list"
//                 :key="item.levelId"
//                 :label="item.levelName"
//                 :value="item.levelId"
//               ></el-option>
//             </el-select>
//           </div>
//           <div style="max-width:202px;margin-right:36px;">
//             <el-select
//               v-model="major_three_list_value"
//               placeholder
//               multiple
//               filterable
//               collapse-tags
//             >
//               <el-option
//                 v-for="item in major_three_list"
//                 :key="item.levelId"
//                 :label="item.levelName"
//                 :value="item.levelId"
//               ></el-option>
//             </el-select>
//           </div>
//           <div style="min-width:108px"></div>
//           <div style="max-width:202px;margin-right:4px;">
//             <el-select
//               v-model="SystemTypelist_value"
//               placeholder="请选择"
//               style="width:100%;"
//               filterable
//               multiple
//               collapse-tags
//             >
//               <el-option
//                 v-for="item in SystemTypelist"
//                 :key="item.id"
//                 :label="item.value"
//                 :value="item.id"
//               ></el-option>
//             </el-select>
//           </div>
//         </div>
//         <div style="display:flex;" class="right">
//           <div style="margin-right:6px;">
//             <el-button size="small" style="width:69px;color: #414656;" @click="reset()">重置</el-button>
//           </div>
//           <div>
//             <el-button size="small" type="primary" style="width:68px;" @click="query()">查询</el-button>
//           </div>
//         </div>
//       </div>
//       <div class="searchfooter" style="display: flex;margin-top:16px;">
//         <div style="min-width:92px"></div>
//         <div style="max-width:202px;margin-right:4px;">
//           <el-select
//             v-model="SharedParameterList_value"
//             placeholder="请选择"
//             style="width:100%;"
//             filterable
//             multiple
//             collapse-tags
//           >
//             <el-option
//               v-for="item in SharedParameterList"
//               :key="item.id"
//               :label="item.value"
//               :value="item.id"
//             ></el-option>
//           </el-select>
//         </div>
//       </div>
//     </div>
//     <div class="tablemain">
//       <el-scrollbar style="height:100%;width: 100%" ref="myScrollbar">
//         <el-table
//           :data="LayerTable"
//           style="width: 100%"
//           stripe
//           ref="multipleTable"
//           tooltip-effect="dark"
//           @select-all="selectAll"
//           @select="handleSelectionChange"
//           v-loading="loading"
//         >
//           <el-table-column type="selection" width="55"></el-table-column>
//           <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
//           <el-table-column prop="category" label=" " show-overflow-tooltip></el-table-column>
//           <el-table-column prop="family" label show-overflow-tooltip></el-table-column>
//           <el-table-column prop="type" label=" " show-overflow-tooltip></el-table-column>
//           <el-table-column prop="systemParam" label=" " show-overflow-tooltip></el-table-column>
//           <el-table-column prop="shareParam" label=" " show-overflow-tooltip></el-table-column>
//         </el-table>
//       </el-scrollbar>
//     </div>
//     <div class="tablefooter">
//       <div class="tablefootertop">
//         <div class="left" style="margin-top:20px; display:flex">
//           <div>
//             <img
//               src="/static/images/selectedcom.png"
//               style="width:24px;height:24px;margin-top:5px; "
//             >
//           </div>
//           <div style="margin-left:3px;">
//             <el-popover placement="top-start" width="761" trigger="click" v-model="visible">
//               <div v-if="multipleSelection.length==0" class="selectedperson">
//                 <div style="width:100%;height:6px;">
//                   <img
//                     src="/static/images/close.png"
//                     style="width:10px;height:10px;float:right;margin-right:11px;cursor:pointer"
//                     @click="visible = false"
//                   >
//                 </div>
//                 <div style="text-align:center;line-height:143px">暂无数据</div>
//               </div>
//               <div class="selectedperson" v-else>
//                 <div style="width:100%;height:11px;">
//                   <img
//                     src="/static/images/close.png"
//                     style="width:11px;height:11px;float:right;margin-right:11px;cursor:pointer"
//                     @click="visible = false"
//                   >
//                 </div>
//                 <div class="selectedpersonTable">
//                   <el-scrollbar style="height:100%;width: 100%">
//                     <el-table
//                       :data="multipleSelection"
//                       style="width: 100%"
//                       stripe
//                       tooltip-effect="dark"
//                     >
//                       <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
//                       <el-table-column prop="category" label show-overflow-tooltip></el-table-column>
//                       <el-table-column prop="family" label show-overflow-tooltip></el-table-column>
//                       <el-table-column prop="type" label=" " show-overflow-tooltip></el-table-column>
//                       <el-table-column prop="systemParam" label="  " show-overflow-tooltip></el-table-column>
//                       <el-table-column prop="shareParam" label=" " show-overflow-tooltip></el-table-column>
//                       <el-table-column label=" 操作 " width="70">
//                         <template slot-scope="scope">
//                           <span
//                             @click="smalldeleteditem(scope.$index,scope.row)"
//                             style="cursor:pointer;color:#2584ff;"
//                           >删除</span>
//                         </template>
//                       </el-table-column>
//                     </el-table>
//                   </el-scrollbar>
//                 </div>
//               </div>
//               <el-badge :value="num" slot="reference" :hidden="!num">
//                 <el-button size="small" type="text" style="color: #687385;"></el-button>
//               </el-badge>
//             </el-popover>
//           </div>
//         </div>
//         <div class="right">
//           <div class="pagination">
//             <pagination
//               @size-change="handleSizeChange"
//               @current-change="handleCurrentChange"
//               :currentPage="pageInfo.page"
//               :pagesize="pageInfo.limit"
//               :total="pageInfo.total"
//             ></pagination>
//           </div>
//         </div>
//       </div>
//       <div class="tablefooterfooter">
//         <div style="margin-top:9px;float:right;margin-right:20px;display:flex">
//           <div style="margin-right:6px;">
//             <el-button size="small" @click="layer(false,false)" style="width:81px;height:36px;">取消</el-button>
//           </div>
//           <el-button
//             type="primary"
//             size="smmall"
//             style="width:81px;height:36px;"
//             @click="layer(false,false,'save')"
//           >保存</el-button>
//         </div>
//       </div>
//     </div>
//   </div>
// </template>

// <script >
// import Pagination from '@/components/Pagination.vue'
// export default {
//   props: ['datalist', 'sourcedata', 'type'],
//   data () {
//     return {
//       loading: true,
//       visible: false,
//       major_first_list_value: [],
//       major_second_list_value: [],
//       major_three_list_value: [],
//       // 一级节点列表数据
//       major_first_list: [],
//       // 二级节点列表数据
//       major_second_list: [],
//       // 三级节点列表数据
//       major_three_list: [],

//       SystemTypelist: [],
//       SystemTypelist_value: [],
//       // 
//       SharedParameterList: [],
//       SharedParameterList_value: [],
//       LayerTable: [],
//       multipleSelection: [],
//       /* 分页 */
//       pageInfo: {
//         // 页码
//         page: 1,
//         // 每页显示的条数
//         limit: 20,
//         // 总共的条数
//         total: 100
//       },
//       params1: {},
//       params2: {},
//       params3: {},
//       params4: {},
//       params5: {}
//     }
//   },
//   components: {
//     Pagination
//   },
//   computed: {
//     // num () {
//     //   return this.multipleSelection.length
//     // }
//   },
//   mounted () {
//     // this.LayerTableMethod()
//     // this.major_first()
//     // this.SystemTypeName()
//     // this.SharedParameterName()
//   },
//   // methods: {
//   //   layer (boleen, num, save) {
//   //     this.$emit('layer', boleen, num, save, this.multipleSelection)
//   //     this.major_first_list_value = []
//   //     this.major_second_list_value = []
//   //     this.major_three_list_value = []
//   //     this.major_second_list = []
//   //     this.major_three_list = []
//   //     this.SystemTypelist_value = []
//   //     this.SharedParameterList_value = []
//   //     sessionStorage.setItem('levelReq1', this.major_first_list_value)
//   //     sessionStorage.setItem('levelReq2', this.major_second_list_value)
//   //     sessionStorage.setItem('levelReq3', this.major_three_list_value)
//   //     sessionStorage.setItem('levelReq4', this.SystemTypelist_value)
//   //     sessionStorage.setItem('levelReq5', this.SharedParameterList_value)
//   //     this.pageInfo.page = 1
//   //     this.multipleSelection = []
//   //   },
//   //   // 弹出框表格数据
//   //   LayerTableMethod () {
//   //     this.params1 = {
//   //       'levelReq1': sessionStorage.getItem('levelReq1') ? sessionStorage.getItem('levelReq1').split(',') : [],
//   //       'levelReq2': sessionStorage.getItem('levelReq2') ? sessionStorage.getItem('levelReq2').split(',') : [],
//   //       'levelReq3': sessionStorage.getItem('levelReq3') ? sessionStorage.getItem('levelReq3').split(',') : [],
//   //       'levelReq4': sessionStorage.getItem('levelReq4') ? sessionStorage.getItem('levelReq4').split(',') : [],
//   //       'levelReq5': sessionStorage.getItem('levelReq5') ? sessionStorage.getItem('levelReq5').split(',') : [],
//   //       pageNo: this.pageInfo.page,
//   //       pageSize: this.pageInfo.limit,
//   //     }
//   //     if (this.type === 'Relationshipadjust') {
//   //       this.params1.projectNo = this.sourcedata.projectNo
//   //       this.params1.stagingNo = this.sourcedata.stagingNo
//   //     } else {
//   //       this.params1.source = this.datalist.poolId
//   //     }
//   //     // 'source': this.datalist.poolId,
//   //     const url = this.type === 'Relationshipadjust' ? '/componentProject/modelComponentList' : '/componentPool/list'
//   //     this.$http(url, this.params1, 'POST').then(res => {
//   //       if (res.data.resultCode === '0000') {
//   //         console.log('99966666666666666666666', res.data.data)
//   //         this.pageInfo.total = res.data.data.totalSize
//   //         this.LayerTable = res.data.data.pageList
//   //         if (this.$refs['myScrollbar']) {
//   //           this.$refs['myScrollbar'].wrap.scrollTop = 0
//   //         }
//   //         this.loading = false
//   //         this.LayerTable.forEach((item, index) => {
//   //           item.visible = false
//   //         })
//   //         this.$nextTick(function () {
//   //           this.selectMemoriedDataFn()
//   //         })
//   //       }
//   //     })
//   //   },
//   //   // 一级节点列表接口
//   //   major_first () {
//   //     if (this.type === 'Relationshipadjust') {
//   //       this.params2 = {
//   //         'projectNo': this.sourcedata.projectNo,
//   //         'stagingNo': this.sourcedata.stagingNo,
//   //       }
//   //     } else {
//   //       this.params2 = {}
//   //     }
//   //     const url = this.type === 'Relationshipadjust' ? '/componentProject/cftLevelList' : '/componentPool/cftLevelList'
//   //     this.$http(url, this.params2, 'POST').then(res => {
//   //       if (res.data.resultCode === '0000') {
//   //         console.log('88888889999999999999', res.data.data)
//   //         this.major_first_list = res.data.data
//   //       }
//   //     })
//   //   },
//   //   // 一级节点列表选中项改变时接口
//   //   changeselect_first (val) {
//   //     this.major_second_list_value = []
//   //     this.major_three_list_value = []
//   //     this.major_second_list = []
//   //     this.major_three_list = []
//   //     // console.log(val)
//   //     if (this.type === 'Relationshipadjust') {
//   //       this.params3 = {
//   //         'levelId': val,
//   //         'levelType': 'C',
//   //         'projectNo': this.sourcedata.projectNo,
//   //         'stagingNo': this.sourcedata.stagingNo,
//   //       }
//   //     } else {
//   //       this.params3 = {
//   //         'levelId': val,
//   //         'levelType': 'C'
//   //       }
//   //     }
//   //     const url = this.type === 'Relationshipadjust' ? '/componentProject/cftLevelList' : '/componentPool/cftLevelList'
//   //     if (this.major_first_list_value.length !== 0) {
//   //       this.$http(url, this.params3, 'POST').then(res => {
//   //         if (res.data.resultCode === '0000') {
//   //           // console.log('8888888', res.data.data)
//   //           this.major_second_list = res.data.data
//   //         }
//   //       })
//   //     } else {
//   //       this.List(false)
//   //     }
//   //   },
//   //   // 
//   //   changeselect_second (val) {
//   //     this.major_three_list_value = []
//   //     this.major_three_list = []
//   //     // console.log(val)
//   //     if (this.type === 'Relationshipadjust') {
//   //       this.params4 = {
//   //         'levelId': val,
//   //         'levelType': 'F',
//   //         'projectNo': this.sourcedata.projectNo,
//   //         'stagingNo': this.sourcedata.stagingNo,
//   //       }
//   //     } else {
//   //       this.params4 = {
//   //         'levelId': val,
//   //         'levelType': 'F'
//   //       }
//   //     }
//   //     const url = this.type === 'Relationshipadjust' ? '/componentProject/cftLevelList' : '/componentPool/cftLevelList'
//   //     if (this.major_second_list_value.length !== 0) {
//   //       this.$http(url, this.params4, 'POST').then(res => {
//   //         if (res.data.resultCode === '0000') {
//   //           console.log('88888888888888888888', res.data.data)
//   //           this.major_three_list = res.data.data
//   //         }
//   //       })
//   //     }
//   //   },
//   //   // (ST)
//   //   SystemTypeName () {
//   //     if (this.type === 'Relationshipadjust') {
//   //       this.params5 = {
//   //         'projectNo': this.sourcedata.projectNo,
//   //         'stagingNo': this.sourcedata.stagingNo,
//   //       }
//   //     } else {
//   //       this.params5 = {}
//   //     }
//   //     const url = this.type === 'Relationshipadjust' ? '/componentProject/systemParamList' : '/componentPool/systemParamList'
//   //     this.$http(url, this.params5, 'POST').then(res => {
//   //       if (res.data.resultCode === '0000') {
//   //         console.log('8774540000000000000000', res.data.data)
//   //         this.SystemTypelist = res.data.data
//   //       }
//   //     })
//   //   },
//   //   // 
//   //   SharedParameterName () {
//   //     const params = {
//   //     }
//   //     this.$http('/componentPool/shareParamList', params, 'POST').then(res => {
//   //       if (res.data.resultCode === '0000') {
//   //         console.log('877454', res.data.data)
//   //         this.SharedParameterList = res.data.data
//   //       }
//   //     })
//   //   },
//   //   // 重置
//   //   reset () {
//   //     this.major_first_list_value = []
//   //     this.major_second_list_value = []
//   //     this.major_three_list_value = []
//   //     this.major_second_list = []
//   //     this.major_three_list = []
//   //     this.SystemTypelist_value = []
//   //     this.SharedParameterList_value = []
//   //     sessionStorage.setItem('levelReq1', this.major_first_list_value)
//   //     sessionStorage.setItem('levelReq2', this.major_second_list_value)
//   //     sessionStorage.setItem('levelReq3', this.major_three_list_value)
//   //     sessionStorage.setItem('levelReq4', this.SystemTypelist_value)
//   //     sessionStorage.setItem('levelReq5', this.SharedParameterList_value)
//   //     this.pageInfo.page = 1
//   //     this.LayerTableMethod()
//   //     this.multipleSelection = []
//   //   },
//   //   // 查询
//   //   query () {
//   //     if (
//   //       this.major_first_list_value.length === 0 &&
//   //       this.major_second_list_value.length === 0 &&
//   //       this.major_three_list_value.length === 0 &&
//   //       this.SystemTypelist_value.length === 0 &&
//   //       this.SharedParameterList_value.length === 0) {
//   //       console.log(555)
//   //     } else {
//   //       sessionStorage.setItem('levelReq1', this.major_first_list_value)
//   //       sessionStorage.setItem('levelReq2', this.major_second_list_value)
//   //       sessionStorage.setItem('levelReq3', this.major_three_list_value)
//   //       sessionStorage.setItem('levelReq4', this.SystemTypelist_value)
//   //       sessionStorage.setItem('levelReq5', this.SharedParameterList_value)
//   //       this.params1 = {
//   //         'levelReq1': this.major_first_list_value,
//   //         'levelReq2': this.major_second_list_value,
//   //         'levelReq3': this.major_three_list_value,
//   //         'levelReq4': this.SystemTypelist_value,
//   //         'levelReq5': this.SharedParameterList_value
//   //       }
//   //       if (this.type === 'Relationshipadjust') {
//   //         this.params1.projectNo = this.sourcedata.projectNo
//   //         this.params1.stagingNo = this.sourcedata.stagingNo
//   //       } else {
//   //         this.params1.source = this.datalist.poolId
//   //       }
//   //       const url = this.type === 'Relationshipadjust' ? '/componentProject/modelComponentList' : '/componentPool/list'
//   //       this.$http(url, this.params1, 'POST').then(res => {
//   //         if (res.data.resultCode === '0000') {
//   //           this.pageInfo.total = res.data.data.totalSize
//   //           this.pageInfo.page = 1
//   //           this.LayerTable = res.data.data.pageList
//   //         }
//   //       })
//   //     }
//   //   },

//   //   handleSizeChange (val) {
//   //     this.pageInfo.limit = val
//   //     this.pageInfo.page = 1
//   //     this.LayerTableMethod()
//   //   },
//   //   handleCurrentChange (val) {
//   //     this.pageInfo.page = val
//   //     this.LayerTableMethod()
//   //   },
//   //   // 全选切换方法
//   //   selectAll (selection) {
//   //     if (selection.length) {
//   //       selection.forEach(item => {
//   //         let flag = true
//   //         for (const i of this.multipleSelection) {
//   //           console.log(i)
//   //           if (item.id === i.id) {
//   //             flag = false
//   //           }
//   //         }
//   //         if (flag) {
//   //           this.multipleSelection.push(item)
//   //         }
//   //       })
//   //     } else {
//   //       if (this.LayerTable.length === this.multipleSelection.length) {
//   //         this.multipleSelection = []
//   //         return true
//   //       }
//   //       this.LayerTable.forEach(item => {
//   //         this.multipleSelection.splice(this.multipleSelection.findIndex(v => v.id === item.id), 1)
//   //       })
//   //     }
//   //   },
//   //   // 选中
//   //   handleSelectionChange (row, index) {
//   //     let flag = true
//   //     for (const i of this.multipleSelection) {
//   //       if (i.id === index.id) {
//   //         flag = false
//   //       }
//   //       // flag = i.id === index.id ? false : true
//   //     }
//   //     if (flag) {
//   //       this.multipleSelection.push(index)
//   //     } else {
//   //       this.multipleSelection.splice(this.multipleSelection.findIndex(v => v.id === index.id), 1)
//   //     }
//   //   },
//   //   smalldeleteditem (index, rowdata) {
//   //     this.multipleSelection.splice(index, 1)
//   //     this.$nextTick(function () {
//   //       this.LayerTable.forEach((item, ind) => {
//   //         if (rowdata.id === item.id) {
//   //           this.toggleSelection(ind, false)
//   //         }
//   //       })
//   //     })
//   //   },
//   //   toggleSelection (index, flag) {
//   //     this.$refs.multipleTable.toggleRowSelection(this.LayerTable[index], flag)
//   //   },
//   //   selectMemoriedDataFn () {
//   //     this.multipleSelection.forEach(row => {
//   //       this.LayerTable.forEach((item, index) => {
//   //         if (row.id === item.id) {
//   //           this.toggleSelection(index, true)
//   //         }
//   //       })
//   //     })
//   //   },
//   // }
// }
// </script>

// <style scoped >
// .CheckBox {
//   width: 100%;
//   height: 100%;
// }
// .search {
//   width: calc(100% - 52px);
//   height: 80px;
//   margin: 20px 26px;
//   line-height: 32px;
// }
// .tableheader {
//   width: 100%;
//   height: 48px;
//   border-bottom: 2px solid #f7f8fc;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0px 26px;
//   font-size: 14px;
//   color: #414656;
// }
// .tablemain {
//   width: calc(100% - 40px);
//   height: 300px;
//   margin: 20px 20px 0px 20px;
// }
// .tablefooter {
//   width: 100%;
//   height: calc(100% - 470px);
//   border-radius: 6px;
// }
// .tablefootertop {
//   width: 100%;
//   height: 73px;
//   display: flex;
//   border-bottom: 2px solid #f7f8fc;
//   justify-content: space-between;
//   padding: 0px 10px 0px 44px;
// }
// .selectedperson {
//   width: 761px;
//   height: 246px;
//   background: #ffffff;
//   padding-top: 11px;
//   padding-left: 18px;
// }
// .selectedpersonTable {
//   width: calc(100% - 18px);
//   height: 200px;
//   margin-top: 11px;
//   margin-right: 18px;
// }
// .pagination {
//   padding-right: 5px;
// }
// </style>
