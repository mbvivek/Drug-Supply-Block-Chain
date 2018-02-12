// Organization Contract Controller

exports.findContract = function(request, response) {
  var address = request.params.contractAddr;
  var res = {
    address: address,
    name: "Sample Organization Contract"
  };
  response.json(res);
};

exports.createContract = function(request, response) {
  var res = {
    address: null,
    events: []
  };
  var body = request.body;
  options.arguments = [];
  options.arguments.push(body.contractName);

  //contract
  var contract = new web3.eth.Contract(abi, null, options);

  console.log("contract deployed..");

  //deploy the contract
  contract
    .deploy(options)
    .send({
      from: web3.eth.accounts[0],
      gas: 4700000
    })
    .then(function(instance) {
      if (instance) {
        //if contract is deployed, set the deployed address to the contract instance
        contract.options.address = instance.options.address;
        res.address = contract.options.address;
        //get all events
        contract.getPastEvents("SampleCreated", {}, function(error, events) {
          if (error) {
            response.send("error");
          } else {
            for (let event of events) {
              res.events.push(event);
            }
            //_onSuccess(contract);
            response.json(res);
          }
        });
      } else {
        //fail
        response.send("fail");
      }
    });
};

var bytecode =
  "6060604052341561000f57600080fd5b60405161022838038061022883398101604052808051820191905050426000819055508060019080519060200190610048929190610140565b506000547f95df2d8b31744cc23bee1e55abf837f6491f116c6b054a1adb45c94f57f57386336001604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200182810382528381815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561012b5780601f106101005761010080835404028352916020019161012b565b820191906000526020600020905b81548152906001019060200180831161010e57829003601f168201915b5050935050505060405180910390a2506101e5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018157805160ff19168380011785556101af565b828001600101855582156101af579182015b828111156101ae578251825591602001919060010190610193565b5b5090506101bc91906101c0565b5090565b6101e291905b808211156101de5760008160009055506001016101c6565b5090565b90565b6035806101f36000396000f3006060604052600080fd00a165627a7a72305820991075b6def22936fc5b36400587fcc28f8469ba56741aa5033bc3503a38c74c0029";

var abi = [
  {
    inputs: [
      {
        name: "_name",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        name: "time",
        type: "uint256"
      },
      {
        indexed: false,
        name: "name",
        type: "string"
      }
    ],
    name: "SampleCreated",
    type: "event"
  }
];

//options {data, arguments}
var options = {
  data: bytecode,
  arguments: []
};