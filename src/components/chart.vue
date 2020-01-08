<template>
  <!-- <ve-line :data="chartData" :settings="chartSettings"></ve-line> -->
  <div>
    <div id="myCharts" ref="myCharts" style="width:100%;height:600px"></div>
    <el-button @click="changeData()">数据切换</el-button>
    <el-button @click="changeData2()">数据切换2</el-button>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    // this.chartSettings = {
    //   axisSite: { right: ['下单率'] },
    //   yAxisType: ['KMB', 'percent'],
    //   yAxisName: ['数值', '比率']
    // }
    return {
      // chartData: {
      //   columns: ['日期', '访问用户', '下单用户', '下单率'],
      //   rows: [
      //     { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
      //     { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
      //     { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
      //     { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
      //     { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
      //     { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
      //   ]
      // }
      myCharts: '',
      port: '8080',
      option: {
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          formatter: ''
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: "标准保费",
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value}% '
            },
          },
          {
            type: 'value',
            name: "标准保费333",
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value}'
            },
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',


          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            yAxisIndex: '1',

          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',


          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',

          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },


          }
        ]
      }
    }
  },
  mounted () {
    // 以下三步即可完成echarts的初始化使用, 代码注释的详解别忘了看看
    this.myCharts = echarts.init(this.$refs.myCharts);
    console.log(myCharts)
    this.init()
  },
  methods: {
    init () {
      this.option.tooltip.formatter = '占用率:<br/>' + this.port + ':{c0}%<br/>内存使用率:<br/>' + this.port + ':{c1}%'

      let obj = {
        data: ['周一1', '周二', '周三', '周四', '周五', '周六', '周日'],
        seriesData: [
          {
            id: 1,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            id: 2,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            id: 3,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            id: 4,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            id: 5,
            data: [150, 232, 201, 154, 190, 330, 410]
          }

        ]
      }
      this.option.xAxis[0].data = obj.data
      obj.seriesData.forEach((item, index) => {
        this.option.series[index].data = item.data
      })
      this.myCharts.setOption(this.option);
    },
    changeData () {
      this.option.xAxis[0].data = ['11', '22', '33', '44', '55', '66', '77']
      this.option.series[0].data = [120, 132, 101, 134, 90, 230, 210]
      this.option.series[1].data = [220, 182, 191, 234, 290, 330, 310]
      this.option.series[2].data = [150, 232, 201, 154, 190, 330, 410]
      this.option.series[3].data = [320, 332, 301, 334, 390, 330, 320]
      this.option.series[4].data = [320, 332, 301, 334, 390, 330, 320]
      this.myCharts.setOption(this.option);
    },
    changeData2 () {
      this.option.xAxis[0].data = ['1111111', '2222222', '3333333', '444444', '555555', '666666', '7777777']
      this.option.series[0].data = [120, 132, 101, 134, 90, 230, 210]
      this.option.series[1].data = [220, 182, 191, 234, 290, 330, 310]
      this.option.series[2].data = [150, 232, 201, 154, 190, 330, 410]
      this.option.series[3].data = [320, 332, 301, 334, 390, 330, 320]
      this.option.series[4].data = [320, 332, 301, 334, 390, 330, 320]
      this.myCharts.setOption(this.option);
    }
  }
}
</script>