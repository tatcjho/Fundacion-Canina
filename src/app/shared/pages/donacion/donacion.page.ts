import { donativo } from './../../model/donativo';
import { Component, OnInit } from '@angular/core';
import { DonativoService } from '../../services/donativo.service';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.page.html',
  styleUrls: ['./donacion.page.scss'],
})
export class DonacionPage implements OnInit {
  public product: donativo;
  constructor(private donativoService: DonativoService) { }

  ngOnInit() {
    this.newProduct()
  }

  newProduct() {
    var id = new Date().getTime();
    this.product = {
      donativo_id: id.toString(),
      donativo_name: "",
      donativo_cantidad: "",
      donativo_animal: null,
    };

  }
  add()
  {
    this.addProduct(this.product);
  }
  addProduct(product: donativo){
    // this.newProduct();
    this.donativoService.createProduct(product).then(() => {
      console.log("entroooo");

      this.product = {};
    });
  }



}
