import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from './shared/services/user-service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/inicio', icon: 'home' },
    { title: 'Quiénes Somos', url: '/quienes-somos', icon: 'happy' },
    { title: '¿Cómo ayudar?', url: '/como-ayudar', icon: 'information' },
    { title: 'Alianzas', url: '/donacion', icon: 'heart' },
    { title: 'Contáctanos', url: '/contactos', icon: 'flash' },

  ];

  constructor(public auth: UserService, public router:Router, public menu: MenuController) {}

ngOnInit(){
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.menu.enable(false);

}

  async logOut(){

    try{
      const user = await this.auth.logout()
      this.router.navigate(['/home']);
     console.log("Cerrando sesion..");
     this.menu.enable(false);
    }catch(e){
      console.log(e);

    }

  }


}
