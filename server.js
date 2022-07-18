var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
const elasticsearch = require('elasticsearch');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(cors());
app.use(bodyParser.json());

const client = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
});

client.ping({ requestTimeout: 30000 }, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('Everything is ok');
  }
});

app.get('/search', function (req, res) {
  let body = {
    size: 100,
    from: 0,
    query: {
      match: {
        cast_name: {
          query: req.query['q'],
          fuzziness: 4
        }
      }
    }
  }

  client.search({ index: 'vue-elastic', body: body, type: 'characters_list' })
    .then(results => {
      res.send(results.hits.hits);

    })
    .catch(err => {
      console.log(err)
      res.send([]);
    });

})

var port = process.env.PORT || 5000
app.listen(port)

// app.all('*', function (req, res) {
//   res.redirect('/');
// });

console.log('server started ' + port)
