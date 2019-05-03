import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  kullanıcı:string;
  sifre:string;
  constructor(public home:Router) { }
  homego() {
     this.home.navigate(["/home"])
  }

}
