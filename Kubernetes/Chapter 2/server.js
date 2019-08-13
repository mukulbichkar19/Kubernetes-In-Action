const http = require('http');
const os = require('os');

console.log("Kubernetes Docker Server Starting...");

var handler = function(req, res) {
    console.log("Received request from " + req.connection.remoteAddress);
    res.writeHead(200);
    res.end("You've are at: " + os.hostname() + "\n");
}

var www = http.createServer(handler);
www.listen(8000);