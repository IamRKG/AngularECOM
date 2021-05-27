import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/product';
import { ProductError } from '../../models/product-error';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  productList: Product[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data: Product[] | ProductError) => {
       this.productList = <Product[]>data;
    }, (err:ProductError) => console.log(err));
  }
}
