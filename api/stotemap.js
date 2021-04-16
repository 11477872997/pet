/*
*  小程序地图找店--查询
*/
const dbstotemap = require('../db/dbstotemap'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const stotemap = async (ctx, next) => {
    let req = ctx.request.body;
    try {
            let data = await dbstotemap();
            ctx.response.status = 200;
            ctx.body = {
                code: -1,
                desc: '查询成功',
                data
            }
      
    } catch (err) {
        ctx.response.status = 500;
        ctx.body = {
            code: 0,
            msg: "服务器异常"
        }
        logsUtil.logError(ctx, err);	  //错误日志
        console.error('insertStorteMessage服务器报错，请看log/error目录最新日志内容', err);
    }

}

module.exports = stotemap
