var http = require('http');
var fs = require('fs');
var app = express();

var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query;
var filePath = query.filepath;

app.use(cors())

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream("public\\1588947561367-client.txt");
    stream.pipe(res);
    console.log(stream);
});
server.listen(8001);