const {dBusernmae,dBpassword} = require("../db/dBtokenStorte");
const logsUtil = require('../config/log');//自定义日志；
const md5 = require('../config/md5')  //md加密
const Config = require('../config/config');
//引入jwt做token验证
const jwt = require('jsonwebtoken');
const tokenStorte = async (ctx, next) => {
    let req = ctx.request.body;
    try{
        if(!req.usernmae || !req.password){ //密码账号不能为空
            ctx.response.status = 200;
            ctx.body = {
                code: -1,
                text: '参数不正确或缺少参数！'
            }
        }else{
           let myUsernmae= await dBusernmae(req.usernmae);
           if(myUsernmae.length > 0){
             let password = md5.MD5(req.password); //密码 
             let myPassword = await dBpassword(password);
               //生成token，验证登录有效期
               const token = jwt.sign({}, Config.jwtSecret, { expiresIn: Config.tokenExpiresTime });
             if(myPassword.length > 0){
                if(password == myPassword[0].password){
                    ctx.response.status = 200;
                    ctx.body = {
                        code: -1,
                        row: req.name,
                        token: token,
                        text: '登陆成功'
                    } 
                }
             }else{
                ctx.response.status = 200;
                ctx.body = {
                    code: -1,
                    text: '用户密码错误！'
                } 
             }
           }else{
                ctx.response.status = 200;
                ctx.body = {
                    code: -1,
                    text: '该商家尚未注册或用户账号错误！'
                } 
           }
        }
    }catch(err){
        ctx.response.status = 500;
        ctx.body = {
            code: 0,
            msg: "服务器异常"
        }
        logsUtil.logError(ctx, err);	  //错误日志
        console.error('insertUser服务器报错，请看log/error目录最新日志内容', err);
    }
  

}

module.exports = tokenStorte