import http from './public'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre

// 数据字典
export const sysGetDictionary = type => {
  return http.requestQuickGet(apiUrl + '/sys/dictionary/' + type)
}

// 获取jwt令牌
export const getjwt = () => {
  return http.requestQuickGet('/openapi/auth/userjwt')
}
