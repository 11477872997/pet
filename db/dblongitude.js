const query =require('../config/mysql');  //连接数据库
let dblongitude = function(id, typename, userlongitude, userlaitude) {
    if(typename  == 0 ){
        let _sql = `update storte user Storelongitude = '${userlongitude}' , Storelaitude = '${userlaitude}' where id = '${id}';`
        return query( _sql,__filename)
    }else if(typename == 1){
        let _sql = `update storte set Storelongitude = '${userlongitude}' , Storelaitude = '${userlaitude}' where id = '${id}';`
        return query( _sql,__filename)
    }
  
}

module.exports = dblongitude;
