//---------------------client----------------------
// creating a custom socket client and connecting it....
 var net = require('net');

var express = require("express");
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/', (req, res) => {
  res.send("hola")
})

app.post('/', function (req, res) {
  test = JSON.stringify(req.body)
  res.send(test)
  sendAlgo(5000, test)
})


function sendAlgo(puerto, msj) {
  const clients = net.connect({
      port: puerto,
      localAddress: "127.0.0.1"
      // path: "186.143.197.58"
  }, () => {
      clients.write(msj);
  });
}
