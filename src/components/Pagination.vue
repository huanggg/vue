<template>
  <div class="pagination clearfix">
    <div style="height: 30px;">
      <div class="pagesize_select">
        <el-select v-model="pageSizes" @change="sizeChange">
          <el-option
            v-for="item in pageSizesList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div style="float: right; margin-top: 15px;">
        <el-pagination
          background=""
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSizes"
          layout="prev, pager, next, jumper"
          :total="total"
          :pager-count='5'
        ></el-pagination>
      </div>
      <span class="total">共{{total}}条记录</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pageSizesList: [
        {
          value: 10,
          label: '10/页'
        },
        {
          value: 20,
          label: '20/页'
        },
        {
          value: 30,
          label: '30/页'
        },
        {
          value: 40,
          label: '40/页'
        },
        {
          value: 50,
          label: '50/页'
        },
        {
          value: 100,
          label: '100/页'
        }
      ],
      pageSizes: 20,
      current: 1
    }
  },
  props: ['currentPage', 'total', 'pagesize'],
  methods: {
    // 每页显示数量改变
    sizeChange () {
      this.$emit('size-change', this.pageSizes)
    },
    handleCurrentChange (val) {
      this.current = val
      this.$emit('current-change', this.current)
    },
    // 确定前往**页
    changeCurrent () {
      // this.$emit("current-change", this.current);
    }
  },
  created () {
    this.pageSizes = this.pagesize
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pagination {
  width: 100%;
  height: 60px;
  text-align: right;
  line-height: 60px;
}

.pagesize_select {
  float: right;
  // margin: 0 10px;
  width: 90px;
}

.total {
  height: 30px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #b9c0c8;
  float: right;
  margin-top: 15px;
}
</style>
<style>
.pagesize_select .el-input--medium .el-input__inner {
  height: 30px;
  line-height: 30px;
}
</style>
