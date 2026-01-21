const WebSocket = require("ws");
const readline = require("readline");

const socket = new WebSocket("ws://localhost:8080")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

socket.on("open", () => {
    console.log("Connected to server");
});

socket.on("message", (data) => {
    console.log("Broadcast: ", data.toString());
});

rl.on("line", (line) => {
    socket.send(line);
});
