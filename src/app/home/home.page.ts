import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mail:string;
  parola:string;
    constructor(public rout: Router){    }
  yolla(){
    //kullanıcı adı ve şifresi sistemde kayıtlı ise 
    if (true){
        this.rout.navigate(["/anasayfa"]);
    }
  }
  RegisterGo(){
      this.rout.navigate(["/register"]);
  }
}
