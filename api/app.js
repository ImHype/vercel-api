const http = require('http');
http.createServer(
    (req, res) => {
        res.end('hello' + req.url)
    }
).listen(3000)