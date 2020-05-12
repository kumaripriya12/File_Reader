var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
var url = require('url');
const fs = require('fs');


app.use(cors())

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname )
    }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
       if (err instanceof multer.MulterError) {
           return res.status(500).json(err)
       	} else if (err) {
           return res.status(500).json(err)
        }
  		return res.status(200).send(req.file)
    })
});

app.get('/', function(req, res) { 
	var urlData = url.parse(req.url, true);
	var filePath = urlData.query.destination + '/' + urlData.query.filename;
	
	fs.readFile(filePath, 'utf-8', (err, data) => { 
    if (err) throw err; 
     
    return res.status(200).send({file_content: data});
	}) 
});

app.listen(8000, function() {
    console.log('App running on port 8000');
});