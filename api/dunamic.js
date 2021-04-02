/**
 * 发表动态接口
 */
 const fs = require('fs');
 const path = require('path');
const dbdunamic = require('../db/dbdunamic'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const timeInfo = require('../config/time')//自定义时间
const getTIme = require('../config/getTime')//自定义处理时间
const dunamic = async (ctx,next)=>{
    let req = ctx.request.body;
    // console.log("req"+req)
    try{
        if(req.id && req.DuamincContent){  
            

            let num = 1;  
            let user = await dbdunamic(num,req.id); //查询用户
            let uploadPath = `public/upload/${user[0].usernmae}/${req.name}`;
                fs.readdir( `${uploadPath}`, function (err, files) {
                    console.log(`${uploadPath}`)
                    if (err) {
                      return console.log('目录不存在')
                    }
                     console.log(files)
                  })
 
           
           
            // await dbdunamic(choose,req.id,req.DuamincContent,DuaminTime);
            // // await dbdunamic(choose,req.DunamicId,req.id,req.DuamincContent,DuaminTime,DuaminImg);
            // let num = 2;
            // let data = await dbdunamic(num, req.DunamicId);
            // let time = data[0].DuaminTime;
            // let newtime = getTIme(time);
            // data[0].DuaminTime = newtime;
            ctx.response.status = 200;
            ctx.body = {
                code: -1,
                desc: '插入成功',
                // data
            }
         
        }else{
            ctx.response.status = 416;
            ctx.body = {
                code: -1,
                desc: '参数不齐全或参数不对'
            }
        }

    }catch(error){
        ctx.response.status = 500;
        ctx.body = {
            code: 0,
            msg: "服务器异常"
        }
        logsUtil.logError(ctx, error);	  //错误日志
        console.error('insertStorteMessage服务器报错，请看log/error目录最新日志内容', error);
    }
     
}

module.exports = dunamic