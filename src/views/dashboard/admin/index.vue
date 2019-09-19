<template>
  <div class="dashboard-editor-container">
    <pie-chart :chart-data="pieData"></pie-chart>

<!--    <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>-->

<!--    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">-->
<!--      <line-chart :chart-data="lineChartData"></line-chart>-->
<!--    </el-row>-->

  </div>
</template>

<script>
  import PieChart from '../components/PieChart'

  export default {
    name: 'dashboard-admin',
    components: {
      PieChart
    },
    data() {
      return {
        pieData: []
      }
    },
    methods: {
      fetchData() {
        getWorkOrderHistoryCount().then(
          res => {
            this.pieData = res
            console.log(this.pieData)
          }
        )
      }
    },
    created() {
      this.fetchData()
    }
  }

</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }

</style>
