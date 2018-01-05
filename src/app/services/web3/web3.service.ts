import { Injectable } from "@angular/core";
import Web3 = require("web3");
import Accounts from "web3-eth-accounts";

@Injectable()
export class Web3Service {
  web3: any;

  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );
    this.web3.eth.getAccounts().then(accounts => {
      this.web3.eth.accounts = accounts;
    });
  }

  getWeb3() {
    return this.web3;
  }
}
