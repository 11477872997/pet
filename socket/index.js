module.exports = (server,cors) =>{
    // const io = require("socket.io")(server, { cors: true });
    const io = require("socket.io")(server, {cors: true});
    // 监听
    // 监听客户端连接
    io.on('connection',function(socket) {
            console.log('客户端有连接')
            
            // 监听客户端断开
            io.on('disconnect', () => {
                console.log('客户端断开')
            })
            
            // 给客户端发送消息
            // io.emit('welcome','欢迎连接socket')
            
            //     // 监听客户端消息
            //     io.on('hello', data => {
            //         console.log('接收客户端发送数据', data)
            //     })

        });
}