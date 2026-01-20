#!/usr/bin/env node

const command = process.argv[2];

if(!command){
    console.log("Usage: ");
    console.log(" broadcast-server start ");
    console.log(" broadcast-server connect ");
    process.exit(1);
}

if(command === "start"){
    require("../server/server")
}else if(command === "connect"){
    require("../client/client");
}else{
    console.log("Unknown command: ", command)
}