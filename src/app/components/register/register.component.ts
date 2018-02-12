import { Component, OnInit } from "@angular/core";
import kjua = require("kjua");
import { UportService } from "../../services/uport/uport.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  uportService: any;
  qr: any;
  org: any;
  isQRCScanned: boolean;

  constructor(uportService: UportService) {
    this.uportService = uportService;
    this.org = {
      name: null,
      addr: null,
      type: null,
      adminName: null,
      adminAddr: null
    };
  }

  ngOnInit() {
    this.generateQRCode();
  }

  generateQRCode() {
    this.uportService.uport
      .requestCredentials(
        {
          requested: ["name"],
          notifications: false
        },
        uri => {
          this.qr = kjua({
            text: uri,
            fill: "#000000",
            size: 500,
            back: "rgba(255,255,255,1)"
          });
        }
      )
      .then(credentials => {
        console.log(credentials);
        this.isQRCScanned = true;
        this.org.adminName = credentials.name;
        this.org.adminAddr = credentials.address;
      });
  }

  reloadQRC(event) {
    event.preventDefault();
    this.org.adminName = "";
    this.generateQRCode();
    this.isQRCScanned = false;
  }

  onSubmit(event, form) {
    if (!form.valid) {
      alert("invalid form data");
      return;
    }
    console.log(this.org);
  }
}
