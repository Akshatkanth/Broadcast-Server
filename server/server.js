const WebSocket = require("ws");

const PORT = 8080;
const server = new WebSocket.Server({port:PORT});

const clients = new Set();

server.on("connection", (socket) => {
    console.log("Client connected");
    clients.add(socket);

    socket.on("message", (message) => {
        for (const client of clients) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
                }
            }
        });

    socket.on("close", () => {
        console.log("Client Disconnected");
        clients.delete(socket);
    });
});

process.on("SIGINT", () => {
  console.log("\nShutting down server...");
  for (const client of clients) {
    client.close();
  }
  server.close(() => {
    process.exit(0);
  });
});


console.log(`Server running on ws://localhost:${PORT}`);