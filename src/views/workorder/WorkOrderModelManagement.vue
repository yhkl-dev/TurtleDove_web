<template>
    <div class="app-container">
      <el-row :gutter="24">
        <el-col :span="6">
          <work-order-model-manager v-bind:workOrderModelList="workOrderModelList"
                                    v-bind:templateWorkOrderTypeList="templateWorkOrderTypeList"
                                    v-bind:templateWorkOrderFlowTypeList="templateWorkOrderFlowTypeList"
                                    @fresh="fresh"></work-order-model-manager>
        </el-col>
        <el-col :span="6">
          <work-order-type-manager v-bind:templateWorkOrderTypeList="templateWorkOrderTypeList"
                                   @fresh="fresh">
          </work-order-type-manager>
        </el-col>
        <el-col :span="6">
          <work-order-flow-type-manager v-bind:templateWorkOrderFlowTypeList="templateWorkOrderFlowTypeList"
                                        v-bind:templateWorkOrderFlowList="templateWorkOrderFlowList"
                                        @fresh="fresh">
          </work-order-flow-type-manager>
        </el-col>
        <el-col :span="6">
          <work-order-flow-manager v-bind:templateWorkOrderFlowList="templateWorkOrderFlowList"
                                   v-bind:userList="userList"
                                   @fresh="fresh">
          </work-order-flow-manager>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import { getWorkOrderModelList,
    getTemplateWorkOrderType,
    getTemplateWorkOrderFlowType,
    getTemplateWorkOrderTaskFlow } from '@/api/workorder'
  import { getUserList } from '@/api/users'
  import workOrderModelManager from './workOrderModel/workOrderModelManager'
  import workOrderTypeManager from './workOrderModel/workOrderTypeManager'
  import workOrderFlowTypeManager from './workOrderModel/workOrderFlowTypeManager'
  import workOrderFlowManager from './workOrderModel/workOrderFlowManager'

  export default {
    name: 'WorkOrderModelManagement',
    components: { workOrderModelManager, workOrderFlowManager, workOrderTypeManager, workOrderFlowTypeManager },
    data() {
      return {
        loading: false,
        workOrderModelTypeFormVisible: false,
        workOrderFlowTypeFormVisible: false,
        filterText: '',
        workOrderModelList: [],
        templateWorkOrderTypeList: [],
        templateWorkOrderFlowTypeList: [],
        templateWorkOrderFlowList: [],
        userList: [],
        workOrderModelDetail: {},
        workOrderModelTypeForm: {
          id: '',
          type_name: '',
          type_status: ''
        },
        workOrderFlowTypeForm: {
          id: '',
          flow_type_name: '',
          flow_type_status: '',
          task_audit_flow: '',
          task_audit_flow_name: '',
          task_exec_flow_name: '',
          task_exec_flow: ''
        },
        statusCode: [
          { id: 1, name: '启用' },
          { id: 0, name: '禁用' }
        ],
        params: {}
      }
    },
    methods: {
      fetchData(params) {
        this.loading = true
        getWorkOrderModelList(params).then(
          res => {
            this.workOrderModelList = res.results
            this.loading = false
          }
        )
        getTemplateWorkOrderType(params).then(
          res => {
            this.templateWorkOrderTypeList = res.results
            this.loading = false
          }
        )
        getTemplateWorkOrderFlowType(params).then(
          res => {
            this.templateWorkOrderFlowTypeList = res.results
            this.loading = false
          }
        )
        getTemplateWorkOrderTaskFlow(params).then(
          res => {
            this.templateWorkOrderFlowList = res.results
            this.loading = false
          }
        )
        getUserList(params).then(
          res => {
            this.userList = res.results
          }
        )
      },
      fresh() {
        this.fetchData()
      }
    },
    created() {
      this.fetchData()
    }
  }
</script>

<style scoped>

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
