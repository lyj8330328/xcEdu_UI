// public是对axios的工具类封装，定义了http请求方法
import http from './../../../base/api/public'
import queryString from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre
// 页面分页查询
export const pageList = (page, size, params) => {
  // 将json对象转换成键值对
  let query = queryString.stringify(params)
  return http.requestQuickGet(apiUrl + '/cms/page/list/' + page + '/' + size + '/?' + query)
}
// 页面添加
export const pageAdd = params => {
  return http.requestPost(apiUrl + '/cms/page/add', params)
}
// 根据id查询页面
export const pageGet = id => {
  return http.requestQuickGet(apiUrl + '/cms/page/get/' + id)
}
// 页面修改
export const pageEdit = (id, params) => {
  return http.requestPut(apiUrl + '/cms/page/update/' + id, params)
}
// 删除页面
export const pageDel = id => {
  return http.requestDelete(apiUrl + '/cms/page/delete/' + id)
}
// 页面发布
export const pagePost = id => {
  return http.requestPost(apiUrl + '/cms/page/postPage/' + id)
}
