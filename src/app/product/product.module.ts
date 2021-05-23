import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './container/product/product.component';
import { ProductItemComponent } from './component/product-item/product-item.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductComponent, ProductItemComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProductComponent],
})
export class ProductModule {}
