<template>
    <div class="app-container">
      <el-row :gutter="24">
        <el-col :span="7">
          <el-card>
            <div slot="header">
              <span>项目列表</span>
              <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-plus" circle></el-button>
            </div>
            <el-table :data="projectList" v-loading="loading" :show-header="false" @row-click="handleClick">
              <el-table-column prop="project_name" label="项目名称" align="center"></el-table-column>
              <el-table-column label="" align="right">
                <template>
                  <el-button size="small" type="text">edit</el-button>
                  <el-button size="small" type="text">delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="17">
          <el-card>
            <div slot="header">
              <span><h4>{{ this.projectName }} 参数</h4></span>
            </div>
            <project-configure v-bind:project-configure-parameter="projectConfigureParameter"
                               @refresh="refresh"
                               v-bind:projectId="projectId"></project-configure>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import { getProjectList } from '@/api/project'
  import ProjectConfigure from './ProjectConfigure'

  export default {
    name: 'ProjectList',
    components: { ProjectConfigure },
    data() {
      return {
        loading: false,
        projectList: [],
        projectConfigureParameter: [],
        projectId: '',
        projectName: '',
        totalNum: 0
      }
    },
    methods: {
      fetchData() {
        this.loading = true
        getProjectList().then(
          res => {
            this.projectList = res.results
            this.totalNum = res.count
            this.loading = false
          }
        )
      },
      handleClick(row) {
        console.log(row)
        this.projectConfigureParameter = row.configurations
        this.projectId = row.id
        this.projectName = row.project_name
        const items = this.projectConfigureParameter
        this.projectConfigureParameter = items.map(v => {
          this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
          v.originalValue = v.value //  will be used when user click the cancel botton
          v.originalName = v.name//  will be used when user click the cancel botton
          return v
        })
      },
      refresh() {
        this.fetchData()
      }
    },
    created() {
      this.fetchData()
    }
  }

</script>

<style scoped>

</style>
