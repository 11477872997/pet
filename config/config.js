/**
 * 全局配置文件
 */

const  Config = {
   host:80,
    // 数据库配置
    databases: {
      database: 'pet',//数据库名称
      user: 'root',//mysql用户名
      password: 'root123',//mysql密码
      port: '3306',//mysql端口号
      host: "8.129.209.91",//服务器i
      connecTimeout: 500,//连接超时,
      multipleStatements: false,//是否允许一个query中包含多条sql语句
      waitForConnection: true,//当无连接池可用时，等待(true) 还是抛错(false)
    connectionLimit: 100,//连接限制
    queueLimit: 0//最大连接等待数(0为不限制)
  },
  //秘钥
 jwtSecret: 'jwtSecret',
 tokenExpiresTime :  60 * 60 * 24 ,// 24小时过期
}
module.exports = Config;