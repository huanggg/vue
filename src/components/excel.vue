<template>
  <div class="excel">
    <vxe-button @click="getValidEvent">获取有效数据</vxe-button>
    <vxe-button @click="getInsertEvent">获取新增</vxe-button>
    <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
    <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
    <vxe-button @click="exportCsvEvent">导出.csv</vxe-button>
    <input type="file" @change="fileChangeEvent" accept=".csv, .xls, .xlsx">
    <div :style="{width:returnWidth+'px'}">
      <vxe-excel ref="xExcel" :columns="columns" :data.sync="tableData" :edit-config="{key: 'id'}"></vxe-excel>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  data () {
    const column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const columns = []
    const sessio = sessionStorage.getItem('xx')
    console.log('xxxxhhhhhh', sessio)
    for (let i = 0; i < sessio; i++) {
      columns.push(column[i])
    }
    return {
      width: 0,
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

      tableData: []
    }
  },
  components: {

  },
  /* eslint-disable */
  computed: {
    returnWidth: function () {
      console.log('sessionStorage.getItem()', typeof sessionStorage.getItem('xx'))
      const sexx = sessionStorage.getItem('xx')

      switch (sexx) {
        case '1':
          return sessionStorage.getItem('xx') * 77 + 48.8
          break
        case '2':
          return sessionStorage.getItem('xx') * 77 + 48.8
          break
        case '3':
          return sessionStorage.getItem('xx') * 77 + 48.8
          break
        case '4':
          return sessionStorage.getItem('xx') * 77 + 47
          break
        case '5':
          return sessionStorage.getItem('xx') * 77 + 46.4
          break
        case '6':
          return sessionStorage.getItem('xx') * 77 + 45.5
          break
        case '7':
          return sessionStorage.getItem('xx') * 77 + 44.5
          break
        case '8':
          return sessionStorage.getItem('xx') * 77 + 43.8
          break
        case '9':
          return sessionStorage.getItem('xx') * 77 + 42.8
          break
        case '10':
          return sessionStorage.getItem('xx') * 77 + 41.8
          break
        case '11':
          return sessionStorage.getItem('xx') * 77 + 40.8
          break
        case '12':
          return sessionStorage.getItem('xx') * 77 + 39.8
          break
        case '13':
          return sessionStorage.getItem('xx') * 77 + 38.8
          break
        case '14':
          return sessionStorage.getItem('xx') * 77 + 37.8
          break
        case '15':
          return sessionStorage.getItem('xx') * 77 + 36.8
          break
        default:
        // return sessionStorage.getItem('xx') * 78 + 48.8
      }
    }
  },
  /* eslint-disable */
  mounted () {
    this.kk()
  },
  methods: {
    kk () {
      const sessio = sessionStorage.getItem('yy')
      for (let i = 1; i <= sessio; i++) {
        this.tableData.push({ A: '', id: i })
      }
    },
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
    fileChangeEvent (evnt) {
      const files = evnt.target.files
      const fileReader = new FileReader()
      fileReader.onload = (ev) => {
        const data = ev.target.result

        const workbook = XLSX.read(data, { type: 'binary' })
        const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1)
        const tableData = csvData.split('\n').map(vRow => {
          const vCols = vRow.split(',')
          const item = {}
          vCols.forEach((val, cIndex) => {
            const kIndex = Math.floor(cIndex / 26)
            const lIndex = cIndex % 26
            let key
            if (kIndex) {
              key = `${keys[kIndex]}${keys[lIndex]}`
            } else {
              key = keys[lIndex]
            }
            item[key] = val
          })
          return item
        })
        this.tableData = tableData
        this.tableData.forEach((item, index) => {
          item.id = index
        })
        console.log('data', this.tableData)
      }
      fileReader.readAsBinaryString(files[0])
    }
  }
}
</script>

<style scoped >
.excel {
  width: 100%;
  height: 100%;
  /* background: blue; */
}
</style>
<style>
.vxe-table .vxe-table--body-wrapper,
.vxe-table .vxe-table--fixed-left-body-wrapper,
.vxe-table .vxe-table--fixed-right-body-wrapper {
  /* overflow-y: hidden !important ; */
  /* overflow-x: auto !important; */
}
</style>
