module.exports = (server,cors) =>{
    const io = require("socket.io")(server, { cors: true });
    // 监听
    io.on("connection", (socket) => {
    console.log("有人链接");
    });
}