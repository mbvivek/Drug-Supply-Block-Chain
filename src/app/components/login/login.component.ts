import { Component, OnInit } from "@angular/core";
import kjua = require("kjua");
import { UportService } from "../../services/uport/uport.service";
import { Web3Service } from "../../services/web3/web3.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  uportService: any;
  web3Service: any;
  qr: any;

  constructor(uportService: UportService, web3Service: Web3Service) {
    this.uportService = uportService;
    this.web3Service = web3Service;
  }

  ngOnInit() {
    console.log("login onInit..");
    console.log(this.uportService);
    console.log(this.web3Service);
    this.login();
  }

  login() {
    this.uportService.uport
      .requestCredentials(
        {
          requested: ["name", "phone", "country"],
          notifications: false
        },
        uri => {
          console.log(uri);
          this.qr = kjua({
            text: uri,
            fill: "#000000",
            size: 500,
            back: "rgba(255,255,255,1)"
          });
        }
      )
      .then(credentials => {
        // Do something
      });
  }
}
