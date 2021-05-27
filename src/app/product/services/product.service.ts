import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';

import { Product} from '../models/product';
import { Observable, throwError } from 'rxjs';
import  {ProductError }  from "src/app/product/models/product-error";


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productError:ProductError = {};
  constructor(private http: HttpClient) {
    
  }

  getAllProduct(): Observable<Product[] | ProductError>{
    return this.http.get<Product[]>('http://localhost:3000/products').pipe(map((data: Product[]) => {
        return data;
    }), catchError((err) => this.handleError(err)));
  }

  handleError(err:HttpErrorResponse):Observable<ProductError>{
    this.productError.displayMessage = "sdfds"
    this.productError.statusCode = err.status;
    this.productError.developerMessage = err.statusText;
    this.productError.errorNumber = 100;
    return throwError(this.productError)
  }

}
