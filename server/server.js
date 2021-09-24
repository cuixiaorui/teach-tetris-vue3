const Koa = require("koa");

const { createServer } = require("http");
const { Server } = require("socket.io");

const app = new Koa();
const httpServer = createServer(app.callback());
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3002",
  },
});

io.on("connection", (socket) => {
	console.log("server connection")
  socket.on("left", () => {
    console.log("left");

    io.emit("left");
  });

  socket.on("right", () => {
    io.emit("right");
    console.log("right");
  });

  socket.on("rotate", () => {
    io.emit("rotate");
    console.log("rotate");
  });

  socket.on("moveDown", () => {
    console.log("moveDown");

    io.emit("moveDown");
  });

  socket.on("initSelfGame", (info) => {
    console.log("initSelfGame");

    io.emit("initSelfGame",info);
  });


  socket.on("createBox", (info)=>{

	io.emit("createBox", info)
  })
});

httpServer.listen(3001);
