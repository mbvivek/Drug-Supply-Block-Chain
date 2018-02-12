// Application Server

// web3
Web3 = require("web3");
Accounts = require("web3-eth-accounts");

// uport
uportConnect = require("uport-connect");
//import { Connect, SimpleSigner } from "uport-connect";


var express = require("express");
var bodyParser = require("body-parser");

// create express app
var app = express();

// create web3 object
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// add testrpc accounts
web3.eth.getAccounts().then(accounts => {
  web3.eth.accounts = accounts;
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// add routes
require("./routes/route.js")(app);

// define a simple route
app.get("/", function(req, res) {
  res.send("Welcome to Drug Supply Block Chain!");
});

// listen for requests
app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});

console.log(uportConnect);

var signer = uportConnect.SimpleSigner(
  "947483440f13e79e7149022777cd3be31e2fe01d27fd60ff33bc2e7308e68d9b"
);

var credentials = new uportConnect.Credentials({
  appName: "Drug Supply Block Chain",
  address: "2of76V3H9JWoW6YdXpaLeTpoaEFGRwcorLa",
  signer: signer
});
