/**
 * 宠物圈后台项目
 * */
const Koa = require('koa');
const app = new Koa();
const path = require('path');  
const cluster = require('cluster');  //多线程
const config = require('./config/config.js');// 全局配置文件
require('console-color-mr'); // console.log 颜色插件
const json = require('koa-json');// 字符串转换
app.use(json());
const helmet = require("koa-helmet");  //提高网站安全性
app.use(helmet());
const logsUtil = require('./config/log');  //自定日志

const koaBody = require('koa-body');  //处理post请求参数
/**
 * 处理post请求参数
 * */ 
 app.use(koaBody({
  multipart:true, // 支持文件上传
  formidable:{
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize: 500*1024*1024, // 文件上传大小5m
  }
}));

const cors = require('koa2-cors');//跨域
/**
 * 处理跨域
 * */ 
app.use(
  cors({
    origin: function (ctx) { //设置允许来自指定域名请求
      // if (ctx.url === '/test') {
        return '*'; // 允许来自所有域名请求
      // }
      // return 'http://localhost:8089'; //只允许http://localhost:8080这个域名的请求  
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法'
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);
 


// const static = require('koa-static');  //静态资源
// app.use(static(__dirname , 'public'));

const static = require("koa-static")  

// // 重写URL,改掉/public
app.use(async (ctx, next) => {
    // 判断,如果当前请求是以/public开头, 重写其url再放行
    if (ctx.request.url.startsWith('/public')) {
        ctx.request.url = ctx.request.url.replace('/public', '');
    }
    // else 不是/public开头,统一放行
    await next();
});

//处理静态资源,maxage为缓存时间，单位为毫秒
app.use(static(path.resolve('public'),{maxage:599999.9880000001}))








  // 表示里面的reginters、login不做token验证
// 拦截没token认证的接口配置
app.use(async (ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: '-1',
        desc: '登陆过期，请重新登陆'
      };
    } else {
      throw err;
    }
  })
})



  const koajwt = require('koa-jwt')  //路由权限控制
  const arrAPI = require('./config/arrAip')  //路由权限控制
  // const arr = [/^\/api\/insertUser/, /^\/api\/insertStorte/, /^\/api\/tokenStorte/,/^\/api\/dunamic/]
  //路由权限控制
  app.use(koajwt({
    secret: config.jwtSecret
  }).unless({
    path: arrAPI
  }))


// 配置解析请求中间件
const router = require('./router/router.js')  //路由模块
app.use(router.routes())  /*启动路由*/
  .use(router.allowedMethods());






/**
 * 捕获全局请求不存在的接口返回404
 * */ 
app.use(async (ctx, next) => {
  // console.log(ctx)
  await next();
  if (parseInt(ctx.status) === 404) {
    logsUtil.logResponse(ctx);
    ctx.response.status = 404;
    ctx.body = '404'
  } else if (parseInt(ctx.status) === 500) {
    ctx.response.status = 500;
    ctx.body = "500"
  }

})

/**
 * 全局捕获应用层报错
 * */ 
app.on('error', (err, ctx) => {
  console.error('服务器报错，请看log/error目录最新日志内容', err);
  logsUtil.logError(ctx, err)
});
//聊天socket服务器
const server = require("http").createServer(app.callback());
// 初始化 socket
require('./socket/index')(server,cors);


/**
 * 多线程
 * cluster 用于监听 process(child) 子进程触发的各种事件
 * worker 在主进程中获取，用于和自身通信。当子进程触发事件时，会返回当前的 worker 以及相关的信息到主进程相应的事件中
 * process(parent) 主进程本身的进程实例，在通信过程中基本没有用到
 * process(child) 子进程本身的实例，只能在子进程获取用于监听自身的事件
 */

//启用轮叫调度，实现负载均衡
cluster.schedulingPolicy = cluster.SCHED_RR;
if (cluster.isMaster) {//主进程
  const numCPUs = require('os').cpus().length;
  // 循环 fork 任务 CPU i5-7400 四核四进程
  // 开启多个子进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.info(`主进程运行在 ${worker.process.pid} `);
    // 主进程退出，子进程全部退出
    for (let pid in worker) {
      worker[pid].kill();
    }
  });
  
} else {
  //监听端口
  server.listen(`${config.host}`, () => {
    console.info(`子进程运行在${process.pid}`)
  });
}


