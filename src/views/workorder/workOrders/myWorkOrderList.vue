<template>
  <div class="app-container">
    <div class="filter-container">
      <el-row :gutter="24">
        <el-col :span="3">
          <el-select v-model="searchForm.template_order_model"
                     size="small"
                     placeholder="工单类型"
                     default-first-option>
            <el-option v-for="(item,value) in workOrderModelList"
                       :key="value"
                       :label="item.model_name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker style="width: 100%;"
                          size="small"
                          v-model="dateValue"
                          type="datetimerange"
                          value-format="yyyy-MM-dd HH:mm:ss"
                          align="right"
                          unlink-panels
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          :picker-options="pickerOptions">
          </el-date-picker>
        </el-col>
        <el-col :span="4">
          <el-input v-model="searchForm.order_task_id"
                    size="small"
                    placeholder="工单编号"
                    @keyup.enter.native="handleFilter">
            <el-button slot="append"
                       icon="el-icon-search"
                       @click="handleFilter">
            </el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="filter-container"
         style="margin-bottom: 10px; margin-top: 20px; position: relative;">
      <el-row :gutter="24">
        <el-col :span="18" >
          <el-button type="primary"
                     size="small"
                     icon="el-icon-plus"
                     @click="handleAddWorkOrderTask">新建工单</el-button>
          <el-button type="primary"
                     size="small"
                     icon="el-icon-refresh"
                     @click="handleRefresh">刷 新</el-button>
        </el-col>
        <el-col :span="6">
          <el-pagination background
                         @current-change="paginationChange"
                         :pager-count="5"
                         :page-size="searchForm.page_size"
                         layout="total, prev, pager, next, jumper"
                         :current-page.sync="searchForm.page"
                         :total="taskTotalNum"
                         v-show="taskTotalNum>=0">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
    <el-table :data="workOrderTaskList"
              v-loading="loading"
              highlight-current-row
              border>
      <el-table-column label="工单id"
                       prop="order_task_id"
                       align="center"
                       width="200px">
      </el-table-column>
      <el-table-column label="工单标题"
                       prop="order_title"
                       align="center">
      </el-table-column>
      <el-table-column label="工单类型"
                       prop="order_model"
                       align="center">
      </el-table-column>
      <el-table-column label="当前执行用户"
                       align="center">
        <template slot-scope="scope">
          {{ scope.row.current_exec_user || '——' }}
        </template>
      </el-table-column>
      <el-table-column label="当前审核用户"
                       align="center">
        <template slot-scope="scope">
          {{ scope.row.current_audit_user || '——' }}
        </template>
      </el-table-column>
      <el-table-column label="创建时间"
                       prop="create_time"
                       align="center">
      </el-table-column>
      <el-table-column label="上次更新时间"
                       prop="update_time"
                       align="center">
      </el-table-column>
      <el-table-column label="工单状态"
                        align="center">
        <template slot-scope="scope" >
          <el-tag>{{ scope.row.status_name }} </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作"
                       align="center"
                       width="150px">
        <template slot-scope="scope">
          <el-button type="primary"
                     plain
                     size="mini"
                     icon="el-icon-document" circle
                     @click="checkWorkOrderTaskDetail(scope.row)">
          </el-button>
          <el-button type="warning"
                     size="mini"
                     icon="el-icon-edit" circle
                     v-if="scope.row.status_code === 1 "
                     @click="editWorkOrderTaskDetail(scope.row)">
          </el-button>
          <el-button type="success"
                     size="mini"
                     icon="el-icon-check" circle
                     v-if="scope.row.status_code === 1"
                     @click="submitWorkOrderTaskDetail(scope.row)">
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="workOrderTaskDetailVisible"
               width="70%"
               center
               @closed="restOrderField">
      <template slot="title">
        <span><h3>工单详情</h3></span>
      </template>
      <work-order-detail  v-bind:workOrderDetail="workOrderDetail"
                          @replyWorkOrderTaskForm="replyWorkOrderTaskForm"
                          @handleWorkOrderOperation="handleWorkOrderOperation">
      </work-order-detail>
    </el-dialog>
    <el-dialog title="新建工单"
               center
               :visible.sync="workOrderTaskVisible"
               width="30%">
      <el-form ref="addWorkOrderTaskForm"
               :model="addWorkOrderTaskForm"
               label-width="80px">
        <el-form-item label="工单标题">
          <el-input v-model="addWorkOrderTaskForm.order_title"
                    placeholder="请输入工单标题">
          </el-input>
        </el-form-item>
        <el-form-item label="工单需求">
          <el-input v-model="addWorkOrderTaskForm.order_purpose"
                    type="textarea"
                    :rows="8"
                    placeholder="请输入工单需求">
          </el-input>
        </el-form-item>
        <el-form-item label='工单类型'>
          <el-select v-model="addWorkOrderTaskForm.template_order_model"
                     style="width: 100%" placeholder="请选择工单类型">
            <el-option v-for="(item, index) in workOrderModelList"
                       :key="index"
                       :label="item.model_name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     size="small"
                     @click="handleCommitAddWorkOrderTask">立即创建</el-button>
          <el-button size="small"
                     @click="workOrderTaskVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑"
               center
               :visible.sync="updateWorkOrderTaskVisible"
               width="30%">
      <el-form ref="editWorkOrderTaskForm"
               :model="editWorkOrderTaskForm"
               label-width="80px">
        <el-form-item label="工单标题">
          <el-input v-model="editWorkOrderTaskForm.order_title"
                    placeholder="请输入工单标题">
          </el-input>
        </el-form-item>
        <el-form-item label="工单需求">
          <el-input v-model="editWorkOrderTaskForm.order_purpose"
                    type="textarea"
                    :rows="8"
                    placeholder="请输入工单需求">
          </el-input>
        </el-form-item>
        <el-form-item label='工单类型'>
          <el-select v-model="editWorkOrderTaskForm.template_order_model"
                     style="width: 100%" placeholder="请选择工单类型">
            <el-option v-for="(item, index) in workOrderModelList"
                       :key="index"
                       :label="item.model_name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     size="small"
                     @click="handleCommitUpdateWorkOrderTask">保 存</el-button>
          <el-button type="primary"
                     size="small"
                     @click="submitWorkOrderTaskDetailInUpdateForm">提 交</el-button>
          <el-button size="small"
                     @click="updateWorkOrderTaskVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import { addWorkOrderOperation, updateWorkOrderTask } from '@/api/workorder'
  import workOrderDetail from './workOrderDetail'

  export default {
    name: 'MyWorkOrderList',
    components: { workOrderDetail },
    props: ['workOrderTaskList', 'taskTotalNum', 'workOrderModelList', 'loading'],
    data() {
      return {
        workOrderTaskDetailVisible: false,
        updateWorkOrderTaskVisible: false,
        workOrderTaskVisible: false,
        workOrderDetail: {},
        addWorkOrderTaskForm: {
          order_title: '',
          order_purpose: '',
          order_status: 1,
          template_order_model: ''
        },
        editWorkOrderTaskForm: {
          id: '',
          order_title: '',
          order_purpose: '',
          order_status: 1,
          template_order_model: ''
        },
        searchForm: {
          order_task_id: '',
          order_title: '',
          template_order_model: '',
          create_time_before: '',
          create_time_after: '',
          page: 1,
          page_size: 5
        },
        workOrderOperationForm: {
          ops_status: '',
          work_order: ''
        },
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        dateValue: ''
      }
    },
    methods: {
      handleRefresh() {
        this.$emit('refresh')
      },
      handleFilter() {
        if (this.dateValue === null || this.dateValue === '' || this.dateValue.length === 0) {
          this.searchForm.create_time_before = ''
          this.searchForm.create_time_after = ''
        } else {
          this.searchForm.create_time_before = this.dateValue[1]
          this.searchForm.create_time_after = this.dateValue[0]
        }
        this.$emit('handleSearchTask', this.searchForm)
      },
      paginationChange(val) {
        this.searchForm.page = val
        this.handleFilter()
      },
      checkWorkOrderTaskDetail(row) {
        this.workOrderTaskDetailVisible = true
        this.workOrderDetail = row
      },
      restOrderField() {
        this.workOrderTaskDetailVisible = false
        this.$refs[this.workOrderDetail].resetFields()
      },
      handleAddWorkOrderTask() {
        this.workOrderTaskVisible = true
        if (this.$refs['addWorkOrderTaskForm'] !== undefined) {
          this.$refs['addWorkOrderTaskForm'].resetFields()
        }
      },
      handleCommitAddWorkOrderTask() {
        this.$emit('handleCommitAddWorkOrderTask', this.addWorkOrderTaskForm)
        this.workOrderTaskVisible = false
      },
      replyWorkOrderTaskForm(data) {
        addWorkOrderOperation(data).then(res => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.workOrderTaskDetailVisible = false
          this.fetchData()
        })
      },
      handleWorkOrderOperation(data) {
        addWorkOrderOperation(data).then(res => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.workOrderTaskDetailVisible = false
          this.$emit('refresh')
        })
      },
      submitWorkOrderTaskDetail(row) {
        this.workOrderOperationForm.ops_status = 1
        this.workOrderOperationForm.work_order = row.id
        addWorkOrderOperation(this.workOrderOperationForm).then(() => {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
          this.updateWorkOrderTaskVisible = false
          this.$emit('refresh')
        })
      },
      submitWorkOrderTaskDetailInUpdateForm() {
        this.workOrderOperationForm.ops_status = 1
        this.workOrderOperationForm.work_order = this.editWorkOrderTaskForm.id
        addWorkOrderOperation(this.workOrderOperationForm).then(() => {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
          this.updateWorkOrderTaskVisible = false
          this.$emit('refresh')
        })
      },
      editWorkOrderTaskDetail(row) {
        if (this.$refs['editWorkOrderTaskForm'] !== undefined) {
          this.$refs['editWorkOrderTaskForm'].resetFields()
        }
        this.updateWorkOrderTaskVisible = true
        const { id, order_title, order_purpose, template_order_model } = row
        this.editWorkOrderTaskForm = { id, order_title, order_purpose, template_order_model }
      },
      handleCommitUpdateWorkOrderTask() {
        updateWorkOrderTask(this.editWorkOrderTaskForm.id, this.editWorkOrderTaskForm).then(() => {
          this.updateWorkOrderTaskVisible = false
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.$emit('refresh')
        })
      }
    }
  }
</script>

<style scoped>
  .div_class {
    margin-left: 20px;
    position: relative;
  }
</style>
