import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:UserService, private router: Router, public alertController: AlertController) { }

  ngOnInit()
  {
  }


  async onLogin(email,password){

    try{
      const user = await this.auth.login(email.value, password.value)

      if(user){
        if(user.email == "admin@gmail.com"){
          this.router.navigate(['/donaciones-total']);
        }else{
          this.router.navigate(['/inicio']);
        }
      }else{
        this.isNotLogin()
        console.log("no es usuario")
      }


      //console.log("Usuario registrado");

    }catch(e){
      console.log(e);

    }

  }

  async isNotLogin() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Correo no válido!',
      message: 'Este correo no está registrado',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
