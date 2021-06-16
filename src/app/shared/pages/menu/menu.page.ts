import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  public appPages = [
    { title: 'Home', url: '/inicio', icon: 'home' },
    { title: 'Quiénes Somos', url: '/quienes-somos', icon: 'happy' },
    { title: '¿Cómo ayudar?', url: '/como-ayudar', icon: 'information' },
    { title: 'Alianzas', url: '/folder/alianzas', icon: 'heart' },
    { title: 'Contáctanos', url: '/contactos', icon: 'flash' },

  ];

  constructor(public auth: UserService, public router:Router,) { }

  ngOnInit() {
  }

  async logOut(){

    try{
      const user = await this.auth.logout()
      this.router.navigate(['/home']);
     console.log("Cerrando sesion..");
    }catch(e){
      console.log(e);

    }

  }

}
