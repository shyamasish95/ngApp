import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://fakestoreapi.com/products';
  constructor(private _http:HttpClient) { }

  GetAllProducts():Observable<Product[]>{
    return this._http.get<Product[]>(this.url);
  }
}
