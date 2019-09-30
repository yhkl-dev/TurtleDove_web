<template>
  <div class="dashboard-editor-container">
    <pane-group></pane-group>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineData"></line-chart>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart height="300px" width="500px" :chart-data="pieData"></pie-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart></bar-chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PieChart from './components/PieChart'
  import BarChart from './components/BarChart'
  import PaneGroup from './components/PaneGroup'
  import LineChart from './components/LineChart'
  import { getWorkOrderHistoryCount, getLineChartData } from '@/api/workorder'

  // const lineChartData = {
  //   newVisitis: {
  //     expectedData: [100, 120, 161, 134, 105, 160, 165],
  //     actualData: [120, 82, 91, 154, 162, 140, 145]
  //   },
  //   messages: {
  //     expectedData: [200, 192, 120, 144, 160, 130, 140],
  //     actualData: [180, 160, 151, 106, 145, 150, 130]
  //   }
  // }
  export default {
    name: 'dashboard',
    components: { BarChart, PieChart, PaneGroup, LineChart },
    data() {
      return {
        // lineChartData: lineChartData.newVisitis,
        currentRole: 'adminDashboard',
        pieData: [],
        lineData: []
      }
    },
    computed: {
      ...mapGetters([
        'roles'
      ])
    },
    methods: {
      fetchData() {
        getWorkOrderHistoryCount().then(
          res => {
            this.pieData = res
            console.log(this.pieData)
          }
        )
        getLineChartData().then(
          res => {
            this.lineData = res
          }
        )
      }
    },
    created() {
      this.fetchData()
    }
  }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
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
