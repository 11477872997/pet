const query =require('../config/mysql');  //连接数据库
let dBusernmae = function(usernmae) {
       //查询用户
    let _sql = ` select usernmae from storte where usernmae = '${usernmae}'`
      return query( _sql,__filename);
}
let dBpassword = function(password) {
    //查询密码
    let _sql = ` select password from storte where  password = '${password}'`
    return query( _sql,__filename);
}


module.exports = {dBusernmae,dBpassword};
