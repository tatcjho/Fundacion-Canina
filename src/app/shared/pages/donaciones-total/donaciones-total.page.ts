import { donativo } from './../../model/donativo';
import { Component, OnInit } from '@angular/core';
import { DonativoService } from '../../services/donativo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donaciones-total',
  templateUrl: './donaciones-total.page.html',
  styleUrls: ['./donaciones-total.page.scss'],
})
export class DonacionesTotalPage implements OnInit {

  prod: Observable<any[]>;

  constructor(private donativoService: DonativoService) { }

  async ngOnInit() {
   this.prod = this.donativoService.getProductos();
  }



}
