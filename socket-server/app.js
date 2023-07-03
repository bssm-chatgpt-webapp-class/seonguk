const { Client } = require("socket.io");

const server = require("http").createServer();
const io = require("socket.io")(server);
io.on("connection", (client) => {
  client.on("chat", (data) => {
    console.log("data : ", data);
  });
  client.on("disconnect", () => {
    /* … */
  });
});
setInterval(() => {
  console.log("새로고침");
  io.emit("chat", "hello");
}, 1000);
server.listen(5000);
