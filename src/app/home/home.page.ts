import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mail:string;
  parola:string;
    constructor(public rout: Router, public aut:AngularFireAuth  ){    }
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
