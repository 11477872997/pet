/**
 *  路由接口权限配置是否需要tonken 认证
 */
const myAPI  = {   //权限
  insertUser: /^\/api\/insertUser/,
  insertStorte: /^\/api\/insertStorte/,
  tokenStorte: /^\/api\/tokenStorte/,
  dunamic: /^\/api\/dunamic/,
  dunamicList: /^\/api\/dunamicList/,
  thisPage: /^\/api\/thisPage/,
  fliename: /^\/api\/fliename/,
  ifStorte: /^\/api\/ifStorte/,
  longitude: /^\/api\/longitude/,
  comment: /^\/api\/comment/,
  inquireComment: /^\/api\/inquireComment/,
  reply: /^\/api\/reply/,
  commentSon: /^\/api\/commentSon/,
  ifusername: /^\/api\/ifusername/,
  stotemap:/^\/api\/stotemap/,
 
}

const arrAPI = [
  myAPI.insertUser,       //小程序-授权-用户插入接口--插入
  myAPI.insertStorte,    //小程序-授权-商家注册接口
  myAPI.tokenStorte,  //H5-商家登陆接口--登陆  
  myAPI.dunamic,         //小程序-宠物圈-发表动态接口--插入
  myAPI.dunamicList,    //小程序-宠物圈-动态查询列表接口--查询
  myAPI.thisPage,     //小程序-宠物圈-查询当前详情页接口--查询
  myAPI.fliename,    //公共-上传文件/图片等接口--插入
  myAPI.ifStorte,      //小程序-公共-判断用户与商家是否存在的接口--查询
  myAPI.longitude,       //小程序-公共-获取经纬度接口--插入
  myAPI.comment,       //小程序-宠物圈-当前评论--插入  
  myAPI.inquireComment,  //小程序-宠物圈-当前动态评论列表--0一级--查询
  myAPI.reply,   //小程序-宠物圈-当前的评论的评论/回复 --插入   
  myAPI.commentSon,   //小程序-宠物圈-当前动态评论的评论列表--二级-1--查询
  myAPI.ifusername,     //小程序 判断是否有该商家名--查询
  myAPI.stotemap,     //小程序地图找店--查询
]

module.exports = arrAPI