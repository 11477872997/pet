const query =require('../config/mysql');  //连接数据库

let insertUserMessage = function(choose,id,usernmae,img,place,source) {
   //查询id
   if(choose == 0){
    let _sql = ` select id from user where id = '${id}'`
      return query( _sql,__filename);
   }else if(choose == 1){
    // 插入用户信息
    let _sql = `insert into user(id,usernmae,img,place,source) VALUES ('${id}','${usernmae}','${img}','${place}','${source}')`
    return query( _sql,__filename);
   };

}

module.exports = insertUserMessage;
