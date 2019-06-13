<template>
  <div class="page">
    <!-- <vxe-table
      border
      show-all-overflow
      :data.sync="tableData"
      :mouse-config="{selected: true}"
      :keyboard-config="{isArrow: true, isDel: true, isTab: true, isEdit: true}"
      :edit-config="{key: 'id', trigger: 'dblclick', mode: 'cell'}"
    >
      <vxe-table-column type="index" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="date" label="Date" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow :edit-render="{name: 'input'}"></vxe-table-column>
    </vxe-table>-->
    <vxe-button @click="getValidEvent">获取有效数据</vxe-button>
    <vxe-button @click="getInsertEvent">获取新增</vxe-button>
    <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
    <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
    <vxe-button @click="exportCsvEvent">导出.csv</vxe-button>
    <!-- <input type="file" @change="fileChangeEvent" accept=".csv, .xls, .xlsx"> -->

    <vxe-excel
      ref="xExcel"
      max-height="600"
      :columns="columns"
      :data.sync="tableData"
      :edit-config="{key: 'id'}"
    ></vxe-excel>
  </div>
</template>

<script>
export default {
  data () {
    // return {
    // tableData: [
    //   {
    //     name: 'zhang',
    //     sex: '男',
    //     date: '1988',
    //     address: '北京',
    //     id: 1
    //   },
    //   {
    //     name: 'zhang',
    //     sex: '男',
    //     date: '1988',
    //     address: '北京',
    //     id: 2
    //   },
    //   {
    //     name: 'zhang',
    //     sex: '男',
    //     date: '1988',
    //     address: '北京',
    //     id: 3
    //   },
    //   {
    //     name: 'zhang',
    //     sex: '男',
    //     date: '1988',
    //     address: '北京',
    //     id: 4
    //   }
    // ]
    // }
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
    return {
      columns: [
        {
          type: 'index',
          width: 50,
          align: 'center',
          headerAlign: 'center'
        }
      ].concat(columns.map(name => {
        return {
          prop: name,
          label: name,
          width: 76,
          headerAlign: 'center',
          editRender: {
            name: 'cell'
          }
        }
      })),
      // tableData: Array.from(new Array(20)).map(() => {
      //   let item = {}
      //   columns.forEach((name, index) => {
      //     item[name] = '',
      //       item.id = index
      //   })

      //   return item
      // })
      tableData: [
        {
          A: 'y ',
          B: 'f大商股份',
          C: 'f滚动',
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
      ]
    }
  },
  components: {

  },
  methods: {
    getValidEvent () {
      const validRecords = this.$refs.xExcel.getRecords().filter(item => Object.keys(item).some(key => item[key]))
      console.log(validRecords)
    },
    getInsertEvent () {
      const insertRecords = this.$refs.xExcel.getInsertRecords()
      // alert(insertRecords.length)
      console.log(insertRecords)
    },
    getRemoveEvent () {
      const removeRecords = this.$refs.xExcel.getRemoveRecords()
      // alert(removeRecords.length)
      console.log(removeRecords)
    },
    getUpdateEvent () {
      const updateRecords = this.$refs.xExcel.getUpdateRecords()
      // alert(updateRecords.length)
      console.log(updateRecords)
    },
    exportCsvEvent () {
      this.$refs.xExcel.exportCsv()
    },
    // fileChangeEvent (evnt) {
    //   const files = evnt.target.files
    //   const fileReader = new FileReader()
    //   fileReader.onload = (ev) => {
    //     const data = ev.target.result
    //     const workbook = XLSX.read(data, { type: 'binary' })
    //     const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    //     const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1)
    //     const tableData = csvData.split('\n').map(vRow => {
    //       const vCols = vRow.split(',')
    //       const item = {}
    //       vCols.forEach((val, cIndex) => {
    //         const kIndex = Math.floor(cIndex / 26)
    //         const lIndex = cIndex % 26
    //         let key
    //         if (kIndex) {
    //           key = `${keys[kIndex]}${keys[lIndex]}`
    //         } else {
    //           key = keys[lIndex]
    //         }
    //         item[key] = val
    //       })
    //       return item
    //     })
    //     this.tableData = tableData
    //   }
    //   fileReader.readAsBinaryString(files[0])
    // }
  }
}
</script>

<style scoped ></style>
