
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ICart, IProData, IProduct } from './product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
productList:IProData[] = [];
cartObj:ICart={
  "CartId": 0,
  "CustId": 1,
  "ProductId": 0,
  "Quantity": 0,
  "AddedDate": new Date
}
constructor(private productService:ProductService){}

ngOnInit(): void {
 this.productService.getAllProducts().subscribe((products:IProduct)=>{
  this.productList = products.data;
 })
}

  addItemToCart(id: number){
    this.cartObj.ProductId = id;
    this.productService.addToCart(this.cartObj).subscribe((res:any)=>{
      console.log(res);
    })
  

  }
}
