import { donativo } from './../model/donativo';
import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class DonativoService {

  constructor(private product: AngularFirestore,) { }

  public createProduct(product: donativo) {
    return this.product.collection("products").doc(product.donativo_id).set(product);
  }
}
