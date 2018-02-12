import { Injectable } from "@angular/core";
import Web3 = require("web3");
import Accounts from "web3-eth-accounts";
import { UportService } from "../uport/uport.service";

@Injectable()
export class Web3Service {
  uportService: any;
  web3: any;

  constructor(uportService: UportService) {
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
