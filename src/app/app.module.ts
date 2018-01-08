import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RoutesModule } from "./routes/routes.module";
import { UportService } from "./services/uport/uport.service";
import { Web3Service } from "./services/web3/web3.service";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, RoutesModule, NgbModule.forRoot()],
  providers: [UportService, Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
