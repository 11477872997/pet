/**
 * 公共上传图片接口
 */
const fs = require('fs');
const path = require('path');
const dbfliename = require('../db/dbfliename'); //引入查询sql 语句
const logsUtil = require('../config/log'); //自定义日志；
const fliename = async (ctx, next) => {
    let req = ctx.request.body;
    try {
        if (req.id  && req.fliename) {
            let users = await dbfliename(req.id); //查询用户
            let uploadPathth = users[0].usernmae;
            if (uploadPathth != undefined) {
                const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
                // 创建可读流
                const reader = fs.createReadStream(file.path);
                // 修改文件的名称
                var myDate = new Date();
                let newFilename = myDate.getTime() + '.' + file.name.split('.')[1];
                let user = uploadPathth //根据不同用户创建不同文件夹
                let uploadPath = path.join(__dirname, '../public/upload') + `/${user}` + `/${req.fliename}`;
                fs.mkdir(uploadPath, {
                    recursive: true
                }, (err) => {
                    if (err) {
                        // throw err;
                        console.log(err)
                    } else {
                        //创建可写流
                        const upStream = fs.createWriteStream(uploadPath + `/${newFilename}`);
                        // 可读流通过管道写入可写流
                        reader.pipe(upStream);
                    }
                })
                ctx.response.status = 200;
                ctx.body = {
                    code: -1,
                    msg: "图片上传成功"
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: -1,
                desc: '参数不齐全或参数不对'
            }
        }
    } catch (error) {
        ctx.response.status = 500;
        ctx.body = {
            code: 0,
            msg: "服务器异常"
        }
        logsUtil.logError(ctx, error); //错误日志
        console.error('insertStorteMessage服务器报错，请看log/error目录最新日志内容', error);
    }

}

module.exports = fliename