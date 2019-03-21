import Vue from 'vue'
import Router from 'vue-router'

// 导入路由规则
import HomeRouter from '@/module/home/router'
import CMSRouter from '@/module/cms/router'

Vue.use(Router)
// 定义路由配置
let routes = []
let concat = (router) => {
  routes = routes.concat(router)
}
// 合并路由规则
concat(HomeRouter) // 加入home模块的路由
concat(CMSRouter) // 加入CMS模块的路由
export default routes
