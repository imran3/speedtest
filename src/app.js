var express = require('express')
var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.json({msg: "hello there!"})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, function () {
  console.log('App listening on port: ', PORT)
})