/**
 * 小程序-授权-用户插入接口--插入
 */
const query =require('../config/mysql');  //连接数据库
let insertUserMessage = function(choose,id,usernmae,img,place,source,UserType) {
   //查询id
   if(choose == 0){
    let _sql = ` select id,UserType from user where id = '${id}'`
      return query( _sql,__filename);
   }else if(choose == 1){
    // 插入用户信息
    let _sql = `insert into user(id,usernmae,img,place,source,userlongitude,userlaitude,UserType) VALUES ('${id}','${usernmae}',
    '${img}','${place}','${source}','0','0','${UserType}')`
    return query( _sql,__filename);
   };

}

module.exports = insertUserMessage;
