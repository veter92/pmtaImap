const http = require('http');
const logger = require('pino')()

// SERVER
requestListener = function (req, res) {
    res.writeHead(200);
    res.end('OK');
},
// INIT SERVER
initServer = function(port){
    var server = http.createServer(requestListener)
    server.listen(process.env.PORT)
    logger.info(`SERVER started on port:${port}`)
}

module.exports = {initServer}