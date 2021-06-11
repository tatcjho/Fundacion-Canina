import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { donativo } from '../../model/donativo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore,) {

  }


  public saveDonativo(d: donativo) {
    return this.db.collection('products').doc(`${d.donativo_id}`).set(d)
  }
}
