// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3001",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");

//   socket.on("message", (message) => {
//     io.emit("message", message);
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

// server.listen(5000, () => {
//   console.log("listening on *:5000");
// });
