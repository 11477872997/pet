##  socket 解释
```
io.emit() 给所有客户端广播消息
socket.emit()   给该socket的客户端发送消息
火狐关掉访问页面，socket.emit('quit', socket.id)相当于给火狐这个客户端发消息，但是这个页面已经关掉了，自然是看不到的
io.emit('quit', socket.id) 给所有客户端广播消息，所以谷歌浏览器也可以收到这条消息
或使用socket.broadcast.emit('quit', socket.id);
socket.broadcast.emit() 向所有的socket连接进行广播，但是不包括发送者自身
```