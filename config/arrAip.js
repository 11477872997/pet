/**
 *  路由接口权限配置是否需要tonken 认证
 */
const myAPI  = {   //权限
  insertUser: /^\/api\/insertUser/,
  insertStorte: /^\/api\/insertStorte/,
  tokenStorte: /^\/api\/tokenStorte/,
  dunamic: /^\/api\/dunamic/,
  dunamicList: /^\/api\/dunamicList/,
  particularspage: /^\/api\/particularspage/,
  thisPage: /^\/api\/thisPage/,
  fliename: /^\/api\/fliename/,
  ifStorte: /^\/api\/ifStorte/,
  longitude: /^\/api\/longitude/,
}

const arrAPI = [
  myAPI.insertUser,
  myAPI.insertStorte,
  myAPI.tokenStorte,
  myAPI.dunamic,
  myAPI.dunamicList,
  myAPI.thisPage,
  myAPI.fliename,
  myAPI.ifStorte,
  myAPI.longitude,
]

module.exports = arrAPI