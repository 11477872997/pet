const query =require('../config/mysql');  //连接数据库
let dbdunamic = function(choose,DunamicId,id,DuamincContent,DuaminTime,DuaminImg) {
    if(choose == 0){
        let _sql = ` select DunamicId from dunamic where DunamicId = '${DunamicId}'`
        return query( _sql,__filename);
    }else if(choose == 1){
      let _sql = `insert into dunamic(DunamicId,id,DuamincContent,DuaminTime,DuaminImg) VALUES ('${DunamicId}','${id}','${DuamincContent}','${DuaminTime}','${DuaminImg}')`
      return query( _sql,__filename);
    }
}

module.exports = dbdunamic;

