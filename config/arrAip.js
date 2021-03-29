/**
 *  路由接口权限配置是否需要tonken 认证
 */
const myAPI  = {   //权限
  insertUser: /^\/api\/insertUser/,
  insertStorte: /^\/api\/insertStorte/,
  tokenStorte: /^\/api\/tokenStorte/,
  dunamic: /^\/api\/dunamic/,
  dunamicList: /^\/api\/dunamicList/,
}

const arrAPI = [
  myAPI.insertUser,
  myAPI.insertStorte,
  myAPI.tokenStorte,
  myAPI.dunamic,
  myAPI.dunamicList,
]

module.exports = arrAPI