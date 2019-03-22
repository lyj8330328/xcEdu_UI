// public是对axios的工具类封装，定义了http请求方法
import http from './../../../base/api/public'
import queryString from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre
export const pageList = (page, size, params) => {
  // 将json对象转换成键值对
  let query = queryString.stringify(params)
  return http.requestQuickGet(apiUrl + '/cms/page/list/' + page + '/' + size + '/?' + query)
}