import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { promise } from 'selenium-webdriver';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user$: Observable<User>;

  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.auth.authState.pipe(
      switchMap((user) => {
        //Si un usuario esta logueado se recupera la informacion del usuario
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  //Registrar usuario
  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return user;
    } catch (error) {
      console.log('Error', error);
    }
  }

  //Iniciar sesion
  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error', error);
    }
  }

  //Cerrar sesion
  async logout(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.log('Error', error);
    }
  }

  //Actualizar usuario
  //Se lee documento de usuarios y se va actualizando el uid del usuario que se va registrando

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };
    return userRef.set(data, { merge: true });
  }
}
