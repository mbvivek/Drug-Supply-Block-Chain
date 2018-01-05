import { Injectable } from "@angular/core";
import { Connect, SimpleSigner } from "uport-connect";

@Injectable()
export class UportService {
  uport: any;

  constructor() {
    this.uport = new Connect("Drug Supply Block Chain", {
      clientId: "2p1a13bWtfjMZBW4u2oHFwfcLy4GC49yvRn",
      //network: "rinkeby or ropsten or kovan",
      network: "rinkeby",
      signer: SimpleSigner(
        "38c29529840853e8343de2a133f012ed3d87fed838645d90d9644d58560f8757"
      )
    });
  }

  getUport() {
    return this.uport;
  }

  // requestCredentials() {
  //   this.uport
  //     .requestCredentials({
  //       requested: ["name", "phone", "country"],
  //       notifications: true // We want this if we want to recieve credentials
  //     })
  //     .then(credentials => {
  //       // Do something
  //     });
  // }

  // attestCredentials() {
  //   this.uport.attestCredentials({
  //     sub: THE_RECEIVING_UPORT_ADDRESS,
  //     claim: {
  //       CREDENTIAL_NAME: CREDENTIAL_VALUE
  //     },
  //     exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000 // 30 days from now
  //   });
  // }
}
