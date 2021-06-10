import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:UserService, private router: Router) { }

  ngOnInit()
  {
  }


  async onLogin(email,password){

    try{
      const user = await this.auth.login(email.value, password.value)
      this.router.navigate(['/inicio']);

      //console.log("Usuario registrado");

    }catch(e){
      console.log(e);

    }

  }

}
