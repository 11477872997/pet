/**
 * 发表动态接口
 */
const dbdunamic = require('../db/dbdunamic'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const timeInfo = require('../config/time')//自定义时间
const getTIme = require('../config/getTime')//自定义处理时间
const dunamic = async (ctx,next)=>{
    let req = ctx.request.body;
    try{
        if(req.DunamicId && req.id && req.DuamincContent ){
            let choose = 0;
            let myDate = await dbdunamic(choose, req.DunamicId);
            if (myDate.length > 0) {
                ctx.response.status = 200;
                ctx.body = {
                    code: -1,
                    desc: '唯一id重复'
                }
            }else{
                let choose = 1;
                let DuaminTime = timeInfo;
                let DuaminImg = req.DuaminImg;
                 if(DuaminImg == undefined){
                    DuaminImg = ''
                }
                await dbdunamic(choose,req.DunamicId,req.id,req.DuamincContent,DuaminTime,DuaminImg);
                let num = 2;
                let myDate = await dbdunamic(num, req.DunamicId);
                let time = myDate[0].DuaminTime;
                let newtime = getTIme(time);
                myDate[0].DuaminTime = newtime;
                ctx.response.status = 200;
                ctx.body = {
                    code: -1,
                    desc: '插入成功',
                    data:myDate
                }
    
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