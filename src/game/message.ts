import { io } from "socket.io-client";

let socket;

export function initMessage() {
  socket = io("http://localhost:3001");

  console.log("socket");
  socket.on("connect", () => {
    console.log("连接成功");
  });
}

export const message = {
  emit(...args) {
    return socket.emit(...args);
  },
  on(...args) {
    return socket.on(...args);
  },
};
