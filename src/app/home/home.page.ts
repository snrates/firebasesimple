import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
//import { User } from '../home/home.page';
import { ToastController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {} as User;
  
    constructor(public rout: Router, public aut:AngularFireAuth,private toast: ToastController, ){    }
   
    async  showtoast(msg: string){
      const toast = await this.toast.create({
       message: msg,
       duration:3000,            
     });
     toast.present();}

  yolla(user:User){  
    const result = this.aut.auth.signInWithEmailAndPassword(user.username,user.password)
    .then((result) => {
      console.log(result.user.email)
        this.rout.navigate(["/anasayfa"]);
      })
      .catch((error) => {
        console.log(error)
        this.showtoast("Kullanıcı girişi başarısız")
      }) 
  }
  RegisterGo(){
      this.rout.navigate(["/register"]);
  }
}
export interface User{
  username: string
  password: string
} 