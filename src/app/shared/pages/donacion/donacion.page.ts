import { donativo } from './../../model/donativo';
import { Component, OnInit } from '@angular/core';
import { DonativoService } from '../../services/donativo.service';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.page.html',
  styleUrls: ['./donacion.page.scss'],
})
export class DonacionPage implements OnInit {
  public product: donativo;
  constructor(private donativoService: ProductService) { }

  ngOnInit() {
    this.newProduct()
  }

  newProduct() {
    var id = new Date().getTime();
    this.product = {
      donativo_id: id.toString(),
      donativo_name: "",
      donativo_cantidad: "",
      //donativo_animal: null,
      donativo_cedula: "",
      donativo_donante:"",
    };

  }
  public addProduct(d: donativo) {
      this.donativoService.saveDonativo(d).then(() => {
       console.log("donacion guardada")

      })

  }



}
