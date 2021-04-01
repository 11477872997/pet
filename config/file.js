/**
 * 处理发表的动态每个不同用户上传到不同文件夹图片
 */
const fs = require('fs');
const path = require('path');
let file = function (ctx,name){
  return new Promise((resolve,reject)=>{
    const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    // 修改文件的名称
    var myDate = new Date();
    var newFilename = myDate.getTime()+'.'+file.name.split('.')[1];
    let user  = name  //根据不同用户创建不同文件夹
    var uploadPath = path.join(__dirname, '../public/upload')+ `/${user}`;
    fs.mkdir(uploadPath,{recursive:true},(err)=>{
        if(err){
            // throw err;
            console.log(err)
        }else{
        //创建可写流
        const upStream = fs.createWriteStream(uploadPath + `/${newFilename}`);
        // 可读流通过管道写入可写流
        reader.pipe(upStream);
        }
    });
  setTimeout(()=>{   //延迟读取，为了解决第一创建文件目录完就先执行
      fs.readdir(uploadPath, function (err, files) {
        if (err) {
          return console.log('目录不存在')
        }
        resolve(files);
      })
  },500)
   
  })
 
  }

exports.file = file;


