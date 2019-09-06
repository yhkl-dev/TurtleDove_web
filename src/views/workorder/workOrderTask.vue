<template>
  <div class="app-container">
    <el-row>
      <el-input size="small">搜索内容</el-input>
      <el-button>新建工单</el-button>
    </el-row>
    <el-table v-loading="loading"   element-loading-text="拼命加载中" :data="workOrderTaskList" border size="medium"
              style="width: 100%">
      <el-table-column prop="order_task_id" label="工单id" align="center" width="300px"></el-table-column>
      <el-table-column prop="order_title" label="工单标题" align="center"></el-table-column>
      <el-table-column prop="order_model" label="工单类型" align="center"></el-table-column>
      <el-table-column prop="getWorkTaskCode(order_status)" label="工单状态" align="center"></el-table-column>
<!--      <el-table-column  label="工单状态" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          <el-tag>{{ getWorkTaskCode(scope.row.order_status) }}</el-tag>-->
<!--        </template>-->
<!--      </el-table-column>-->

      <el-table-column prop="current_exec_user.username" label="当前执行用户" align="center"></el-table-column>
      <el-table-column prop="current_audit_user.username" label="当前审核用户" align="center"></el-table-column>
      <el-table-column prop="create_time" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="update_time" label="更新时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="checkWorkOrderTaskDetail(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 10px"
         class="text-center"
         v-show="taskTotalNum>=15">
      <el-pagination background
                     @current-change="paginationChange"
                     layout="total, prev, pager, next, jumper"
                     :current-page.sync="page"
                     :total="taskTotalNum">
      </el-pagination>
    </div>
    <el-dialog title="工单详情" :visible.sync="workOrderTaskDetailVisible" width="70%" center>
      <work-order-detail  v-bind:workOrderDetail="workOrderDetail" @replyWorkOrderTaskForm="replyWorkOrderTaskForm"></work-order-detail>
    </el-dialog>
  </div>

</template>

<script>
  import { getWorkOrderTaskList, addWorkOrderOperation, getWorkOrderOperationCode, getWorkOrderTaskCode } from '@/api/workorder'
  import workOrderDetail from './workOrderDetail'

  export default {
    name: 'workOrderTask',
    components: { workOrderDetail },
    data() {
      return {
        workOrderTaskList: [],
        workOrderDetail: null,
        workOrderTaskCode: [],
        workOrderOperationCode: [],
        taskTotalNum: '',
        params: {},
        workOrderTaskDetailVisible: false,
        loading: false,
        searchForm: {
          task_order_id: '',
          page: ''
        },
        page: ''
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {}
        // this.workOrderTaskCode[0]: workOrderTaskCode[1],
        for (var i = 0; i < this.workOrderTaskCode.length; i++) {
          statusMap.append(this.workOrderTaskCode[i][0], this.workOrderTaskCode[i][1])
        }
        console.log(statusMap)
        return statusMap[status]
      }
    },
    methods: {
      fetchData(params) {
        this.loading = true
        getWorkOrderTaskList(params).then(
          res => {
            this.workOrderTaskList = res.results
            this.taskTotalNum = res.count
            this.loading = false
          }
        )
        getWorkOrderTaskCode(params).then(
          res => {
            this.workOrderTaskCode = res.code
          }
        )
        getWorkOrderOperationCode(params).then(
          res => {
            this.workOrderOperationCode = res.code
          }
        )
      },
      paginationChange(val) {
        this.searchForm.page = val
        this.fetchData(Object.assign(this.searchForm))
      },
      checkWorkOrderTaskDetail(row) {
        this.workOrderTaskDetailVisible = true
        this.workOrderDetail = row
      },
      getWorkTaskCode(code) {
        const statusMap = {}
        // this.workOrderTaskCode[0]: workOrderTaskCode[1],
        for (var i = 0; i < this.workOrderTaskCode.length; i++) {
          statusMap.append(this.workOrderTaskCode[i][0], this.workOrderTaskCode[i][1])
        }
        console.log(statusMap)
        return statusMap[status]
      },
      replyWorkOrderTaskForm(data) {
        console.log(data)
        addWorkOrderOperation(data).then(res => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.workOrderTaskDetailVisible = false
          this.fetchData()
        })
      }
    },
    created() {
      this.fetchData()
    }
  }
</script>

<style scoped>
  /*.work_order_class {*/
  /*  overflow: scroll;*/
  /*}*/
</style>
