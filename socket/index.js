/**
 * 聊天 模块
 * 
 */
odule.exports = (server,cors) =>{
    // const io = require("socket.io")(server, { cors: true });
    const io = require("socket.io")(server, {cors: true});
   //定义一个对象保存当前在线的用户
// var map = {}
io.on('connection',function(socket) {
    console.log('客户端有连接',socket.id);
    // socket.emit('success', '连接聊天服务器成功',socket.id);
    // socket.on('disconnect', (data) => { 
    //     console.error('用户连接断开',socket.id);
    //     io.emit('quit', socket.id)
    // })
    socket.on('sendMsg', (data) => {
        console.log(data) 
        data.id = socket.id;
        io.emit('receiveMessage', data)
    })   
      
}); 

}