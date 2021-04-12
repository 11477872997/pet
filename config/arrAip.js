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
  comment: /^\/api\/comment/,
  inquireComment: /^\/api\/inquireComment/,
  reply: /^\/api\/reply/,
  commentSon: /^\/api\/commentSon/,
 
}

const arrAPI = [
  myAPI.insertUser,      //插入用户信息
  myAPI.insertStorte,    //插入商家信息
  myAPI.particularspage,
  myAPI.tokenStorte,     //商家登陆验证
  myAPI.dunamic,         //宠物圈发动态
  myAPI.dunamicList,     //宠物圈动态列表
  myAPI.thisPage,        //宠物圈 列表详情页
  myAPI.fliename,        // 上传图片接口
  myAPI.ifStorte,        // 判断商家接口
  myAPI.longitude,       // 公共获取经纬度
  myAPI.comment,         //宠物圈评论接口
  myAPI.inquireComment,  //宠物圈查询当前动态评论列表接口
  myAPI.reply,           //宠物圈当前动态评论列表接口
  myAPI.commentSon,     //宠物圈当前动态评论的评论列表接口
]

module.exports = arrAPI