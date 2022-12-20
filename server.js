var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express()
var port = process.env.PORT || 5000

app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(cors());
app.use(bodyParser.json());
app.listen(port)

console.log('server started ' + port)
