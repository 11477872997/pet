module.exports = (server,cors) =>{
    // const io = require("socket.io")(server, { cors: true });
    const io = require("socket.io")(server, {cors: true});
    // 监听
    // 监听客户端连接
    let users = []; //存放前端传过来的用户
    io.on('connection',function(socket) {
        socket.emit('success', '连接到服务器')

        socket.on('disconnect', () => {
            io.emit('quit', socket.id)
        })

        });
}