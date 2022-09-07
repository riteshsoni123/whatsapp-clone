const { Server } = require("socket.io");
const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    console.log(text);
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("recieve-message", {
        reciepients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
