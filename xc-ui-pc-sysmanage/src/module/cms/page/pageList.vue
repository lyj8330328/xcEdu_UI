<template>
  <div>
    <el-button type="primary" v-on:click="query" size="small">查询</el-button>
    <!--data table-->
    <el-table :data="list" highlight-current-row v-loading="listLoading" style="width: 100%;">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120">
      </el-table-column>
      <el-table-column prop="pageType" label="类型（静态、动态）" width="150">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180" :formatter="formatCreateTime">
      </el-table-column>
      <el-table-column label="编辑" width="80">
        <template slot-scope="scope">

          <el-button
            size="small" type="primary"
            @click="edit(scope.row.pageId)">编辑
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="删除" width="80">
        <template slot-scope="scope">

          <el-button
            size="mini"
            type="danger"
            @click="del(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="静态化" width="80">
        <template slot-scope="scope">
          <el-button
            size="small" type="primary" plain @click="generateHtml(scope.row.pageId)">静态化
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="发布" width="80">
        <template slot-scope="scope">
          <el-button
            size="small" type="primary" plain @click="postPage(scope.row.pageId)">发布
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页条-->
    <el-col :span="30" class="toolbar">
      <el-pagination background layout="prev, pager, next"  :page-size="this.params.size"
                     :total="total" :current-page="this.params.page" @current-change="changePage"
                     style="float:right;">
      </el-pagination>
    </el-col>
  </div>
</template>

<script>
    import * as cmsApi from '../api/cms'
    import utilApi from '@/common/utils';
    export default {
      name: 'pageList',
      data () {
        return {
          params: {
            page: 1, // 页码
            size: 5, // 每页显示个数
            siteId: ''// 站点id
          },
          listLoading: false,
          list: [],
          total: 10,
          siteList: [] // 站点列表
        }
      },
      mounted () {
        this.query()
      },
      methods: {
        query () {
          cmsApi.pageList(this.params.page, this.params.size, this.params).then((resp) => {
            console.log(resp)
            this.total = resp.queryResult.total
            this.list = resp.queryResult.list
          })
        },
        changePage (page) {
          this.params.page = page
          this.query()
        },
        formatCreateTime (row, column) {
          let createTime = new Date(row.pageCreateTime);
          if (createTime) {
            return utilApi.formatDate(createTime, 'yyyy-MM-dd hh:mm:ss');
          }
        }
      }
    }
</script>

<style scoped>

</style>
