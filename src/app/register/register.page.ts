import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { User } from '../home/home.page';
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  user = {} as User;
  constructor(public home:Router ,public aut:AngularFireAuth) { }

    async homego(user:User){
      const result = this.aut.auth.createUserWithEmailAndPassword(user.username,user.password)
     
    this.home.navigate(["/home"])
  }
 
}
