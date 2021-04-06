/**
 * 发表动态接口
 */
const fs = require('fs');
const path = require('path');
const { dbdunamic, Dunam } = require('../db/dbdunamic'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const timeInfo = require('../config/time')//自定义时间
const getTIme = require('../config/getTime');//自定义处理时间
const arrAPI = require('../config/arrAip');
const dunamic = async (ctx, next) => {
    let req = ctx.request.body;
    try {
        if (req.id && req.DuamincContent && req.fliename) {
            let DunamicId = `${new Date().getTime()}-${Math.random().toString(36).substr(2)}`;
            let num = 1;
            let user = await dbdunamic(num, null, req.id); //查询用户
            let uploadPath = `public/upload/${user[0].usernmae}/${req.fliename}`;
            //检测文件或者文件夹存在 nodeJS
           let fsExistsSync =  function (uploadPath) {
                try{
                    fs.accessSync(path.join(__dirname,"../"+ uploadPath));
                }catch(e){
                    return false;
                }
                return true;
            }
           if(fsExistsSync(uploadPath) == false){   //目录不存在 
            let choose = 0;
            let  uploadPath = '';
            await dbdunamic(choose, DunamicId, req.id, req.DuamincContent, timeInfo, uploadPath);
            let data = await Dunam(DunamicId);
            let time = data[0].DuaminTime;
            let newtime = getTIme(time);
            data[0].DuaminTime = newtime;
            ctx.response.status = 200;
            ctx.body = {
                code: -1,
                desc: '插入成功',
                data
            }
           }else if(fsExistsSync(uploadPath) == true){ //目录存在
              let myfile =  fs.readdirSync(`${uploadPath}`, function (err, files) {
                if (err) {
                    console.log(err)
                    return err
                }
                return files;
            });
             let arr = [];
            myfile.forEach(function(item){
                arr.push({
                    content:uploadPath+"/"+item
                })
            })
            let choose = 0;
            await dbdunamic(choose, DunamicId, req.id, req.DuamincContent, timeInfo, JSON.stringify(arr));
            let data = await Dunam(DunamicId);
            let time = data[0].DuaminTime;
            let newtime = getTIme(time);
            data[0].DuaminTime = newtime;
            data[0].DuaminImg = JSON.parse(data[0].DuaminImg);
            ctx.response.status = 200;
            ctx.body = {
                code: -1,
                desc: '插入成功',
                data
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
        logsUtil.logError(ctx, error);	  //错误日志
        console.error('insertStorteMessage服务器报错，请看log/error目录最新日志内容', error);
    }

}

module.exports = dunamic