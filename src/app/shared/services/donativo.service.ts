import { donativo } from './../model/donativo';
import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonativoService {
public carrito = [];
  constructor(private product: AngularFirestore,) { }

  public createProduct(product: donativo) {
    return this.product.collection("donativos").doc(product.donativo_id).set(product);
  }

  public getProductos(): Observable<any[]>{
    return this.product.collection('donativos').valueChanges();
  }

}
