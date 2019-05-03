import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  email:string;
  sifre:string;
  constructor(public home:Router) { }
  homego() {
        //kullanıcı oluşturuluacak
       // if(oluşturulduysa)

     this.home.navigate(["/home"])
  }

}
