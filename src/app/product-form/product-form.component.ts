import { Component, OnInit } from '@angular/core';
import { Products } from './products.module';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    model = new Products(1,'ProductA');

  constructor() { }

  ngOnInit() {
  }

}
