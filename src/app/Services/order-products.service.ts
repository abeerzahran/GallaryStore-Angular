import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrderProducts } from '../Models/IOrderProducts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderProductsService {

  apiUrl:string="http://localhost:5087/api/OrderProducts"
  constructor(public httpClient: HttpClient) { }



  updateOrderProduct(orderProduct:any){
    return this.httpClient.put(this.apiUrl,orderProduct);
  }

  deleteOrderProduct(orderProduct:any):Observable<any>
  {
    // console.log(orderProduct);
    const headers= new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.httpClient.delete(this.apiUrl,{headers:headers,body:orderProduct});

    // console.log(req);

  }


  addOrderProduct( orderProduct:any){
    const headers= new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    });
    return this.httpClient.post(this.apiUrl,orderProduct,{headers});
  }

  getProductInCart(productId:number)
  {
    const headers= new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    });
    return this.httpClient.get(`${this.apiUrl}/getproduct/${productId}`,{headers});
  }
}
