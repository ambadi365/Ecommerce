import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../pages/home/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl:string = "https://onlinetestapi.gerasim.in/api/Ecomm"
  constructor(private http:HttpClient) { }


  getAllProducts():Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/GetAllProducts`)
  }

  addToCart(body: any):Observable<any> {
return this.http.post<any>(`${this.baseUrl}/AddToCart`,body)
  }
}
