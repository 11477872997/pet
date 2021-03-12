# 项目目录解释
+ config  放一些配置文件
 +  config.js 全局配置文件变量
 +  mysql.js 数据连接配置
 +  logconfig.js 日志配置
 +  log.js 日记记录配置
+ db 数据库sql语句
  +  
+ router 接口路由
  +  router 接口地址 
+ api 业务逻辑
 + 
+ public 静态文件
 + 
+ .gittignore 过滤上传GitHub 的文件夹配置
+ app 入口文件
---
## 项目使用的框架插件
|命令|备注|配置|注意|
|:-|:-:|:-:|:-:|
|npm install -y| 初始化项目|
|npm install koa| koa2 框架|
|npm install -g nodemon|   监控服务器/自动重新部署|配置package.json"scripts": { "server": "nodemon ./app" }|nodemon 不是内部命令的话记得配置环境变量|
|npm install -D console-color-mr|console颜色插件|
|npm install mysql --save| mysql 连接数据库插件|
|npm i koa-router --save|koa 路由插件|
| npm i koa-body -S|获取post请求过来的值和上传的文件 插件| |引入必须在路由或koa-body前不然拿不到值|
| npm i koa2-cors --save|跨域解决|
| npm install koa-helmet --save|提高网站安全性插件|
| npm install log4js|记录日志插件|
| npm install koa-json|字符串转换|
| npm install koa-static|访问静态资源插件|
| npm install socket.io|聊天应用 插件|前端版下载：npm install socket.io-client 版本为："socket.io-client": "^2.3.1" 测试在组件中：import io from "socket.io-client";  this.socket = io("http://localhost:3000" || "/");|注意后端版本"socket.io": "^2.3.0"|

---
## 提高网站安全性插件详细
```
 app.use(helmetcontentSecurityPolicy()); // 内容安全策略
 app.use(helmet.dnsPrefetchControl()); // dns预读取控制
 app.use(helmet.expectCt()); // 证书透明度 (Certificate Transparency)，防止错误签发的网站证书的使用不被察觉
 app.use(helmet.frameguard()); // iframe访问策略，预防点击劫持
 app.use(helmet.hidePoweredBy()); // 隐藏`X-Powered-By`头信息
 app.use(helmet.hsts()); // HTTP严格传输安全协议（HTTP Strict Transport Security）
 app.use(helmet.ieNoOpen()); // IE8特有，强制保存潜在不安全的下载app.use(helmet.noSniff()); // 禁止嗅探MIME类型
 app.use(helmet.permittedCrossDomainPolicies()); // 访问源策略控制
 app.use(helmet.referrerPolicy()); // 引用策略
 app.use(helmet.xssFilter()); // cross site script跨站脚本过滤
```
---
## nodemon.json 文件解释
```
{
    "restartable": "rs", //重启的命令，默认是 rs ，可以改成你自己喜欢的字符串。当用 nodemon 启动应用时，
	                    可以直接键入 rs 直接重启服务。  除了字符串值外，还可以设置 false 值，这个值的
						意思是当 nodemon 影响了你自己的终端命令时，设置为 false 则不会在 nodemon 
						运行期间监听 rs 的重启命令。
    "ignore": [    //忽略的文件后缀名或者文件夹，文件路径的书写用相对于 nodemon.json 所在位置的相对路径，
	              下同。nodemon 会默认忽略一些文件，默认忽略的文件有：.git, node_modules, bower_components, 
				  .sass-cache，如果这些文件想要加入监控，需要重写默认忽略参数字段 ignoreRoot，比如加入：
				  "ignoreRoot": [".git", "bower_components", ".sass-cache"]，然后在 watch 中将 node_modules
				   文件路径加入监控，那么 node_modules 内的文件也加入了监控了。
        ".git",
        "node_modules/**/node_modules"
    ],
    "verbose": true,  //true 表示输出详细启动与重启信息  false 表示不输出这些运行信息
    "execMap": {   //运行服务的后缀名和对应的运行命令，"js": "node --harmony" 表示用 nodemon 代替 node  
	              --harmony 运行 js 后缀文件；"" 指 www 这些没有后缀名的文件；默认的 defaults.js 配置文
				  件会识别一些文件：py: 'python',rb: 'ruby'。
        "": "node",
        "js":"node --harmony"
    },
    "events": {  这个字段表示 nodemon 运行到某些状态时的一些触发事件，总共有五个状态：
	   start - 子进程（即监控的应用）启动

		crash - 子进程崩溃，不会触发 exit

		exit - 子进程完全退出，不是非正常的崩溃

		restart - 子进程重启

		config:update - nodemon 的 config 文件改变
    },
    "watch": [  监控的文件夹路径或者文件路径。
        "api",
        "test/samples/"
    ],
    "env": {   //运行环境 development 是开发环境，production 是生产环境。port 是端口号。
        "NODE_ENV": "development",
        "PORT": "3000"
    },
    "ext": "js json ",  //监控指定后缀名的文件，用空格间隔。默认监控的后缀文件：
						.js, .coffee, .litcoffee, .json。但是对于没有文件后缀的文件，比如 www 文件，
						我暂时找不到怎么用 nodemon 去监控，就算在 watch 中包含了，nodemon 也会忽略掉。

                      注：关于监控以及忽略文件修改有个顺序的问题，或者说优先级，首先 nodemon 会先读取 watch 
					  里面需要监控的文件或文件路径，再从文件中选择监控 ext 中指定的后缀名，最后去掉从 ignore 
					  中指定的忽略文件或文件路径。
    "legacy-watch": false  //nodemon 使用 Chokidar 作为底层监控系统，但是如果监控失效，
	                        或者提示没有需要监控的文件时，就需要使用轮询模式（polling mode），
							即设置 legacy-watch 为 true，也可以在命令行中指定：
}
```    
---
## Cluster API 多线程解释
```
 cluster.setttings:配置集群参数对象
 cluster.isMaster:判断是不是master节点
 cluster.isWorker:判断是不是worker节点
 Event: ‘fork’: 监听创建worker进程事件
 Event: ‘online’: 监听worker创建成功事件
 Event: ‘listening’: 监听worker向master状态事件
 Event: ‘disconnect’: 监听worker断线事件
 Event: ‘exit’: 监听worker退出事件
 Event: ‘setup’: 监听setupMaster事件
 cluster.setupMaster([settings]): 设置集群参数
 cluster.fork([env]): 创建worker进程
 cluster.disconnect([callback]): 关闭worket进程
 cluster.worker: 获得当前的worker对象
 cluster.workers: 获得集群中所有存活的worker对象
 worker对象
 worker的各种属性和函数：可以通过cluster.workers, cluster.worket获得。

 worker.id: 进程ID号
 worker.process: ChildProcess对象
 worker.suicide: 在disconnect()后，判断worker是否自杀
 worker.send(message, [sendHandle]): master给worker发送消息。注：worker给发master发送消息要用process.send(message)
 worker.kill([signal=‘SIGTERM’]): 杀死指定的worker，别名destory()
 worker.disconnect(): 断开worker连接，让worker自杀
 Event: ‘message’: 监听master和worker的message事件
 Event: ‘online’: 监听指定的worker创建成功事件
 Event: ‘listening’: 监听master向worker状态事件
 Event: ‘disconnect’: 监听worker断线事件
 Event: ‘exit’: 监听worker退出事件
 ```