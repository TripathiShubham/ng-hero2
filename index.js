var express  = require('express'),
    app      = express();

app.use('/public', express.static(__dirname + '/public'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log("server started on port 3000");
});