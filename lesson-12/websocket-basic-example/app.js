const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const socketList = [];

wsServer.on("connection", (socket)=> {
    socketList.push(socket);
    console.log(socketList)
    setTimeout(()=> {
        socket.send("Welcome to web-socket server");
    }, 3000)
    // console.log("New frontend connected");
    socketList.forEach(item => {
        if(item !== socket) {
            item.send("New member connect")
        }
    })
});

socket.on("close", () => {
    // Найти индекс сокета в массиве socketList
    const index = socketList.indexOf(socket);
    if (index !== -1) {
      // Удалить сокет из массива
      socketList.splice(index, 1);
    }
    console.log("User disconnected");
  });