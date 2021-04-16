/**
 * 小程序-宠物圈-发表动态接口--插入
 */
const query =require('../config/mysql');  //连接数据库
let dbdunamic = function(choose,DunamicId,id,DuamincContent,DuaminTime,DuaminImg) {
  if(choose == 0){
      let _sql = `insert into dunamic(DunamicId,id,DuamincContent,DuaminTime,DuaminImg) VALUES ('${DunamicId}','${id}','${DuamincContent}','${DuaminTime}','${DuaminImg}')`
      return query( _sql,__filename);
    }else if(choose = 1){
      let _sql = ` select usernmae from user where id = '${id}'`
      return query( _sql,__filename);
    }
}
let Dunam = function(DunamicId) {
  let _sql = ` select * from dunamic where DunamicId = '${DunamicId}'`
  return query( _sql,__filename);
}

module.exports = {dbdunamic,Dunam}
// module.exports = {registerUser,insertUser} 