import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public user$: Observable<User>;


  constructor(
  private auth: UserService,
  private router: Router
  ) { }

  ngOnInit() {
  }

 async onRegister(email,password){
    console.log(email,password)
    try{
      const user = await this.auth.register(email.value, password.value);
      this.router.navigate(['/login'])
      if(user){
        console.log('Usuario', user)
      }
    }catch(error){
      console.log(error)
    }

  }




}
