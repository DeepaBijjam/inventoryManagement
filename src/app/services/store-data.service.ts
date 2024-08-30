import { Injectable } from '@angular/core';

interface User {
  
  supp_id:number;
  supp_name:string;
  supp_contact:number;
  supp_gst:string;
  supp_dl:string;
  supp_pan:string;
  supp_fssai:string;

}


interface Product {
  
  product_id:number;
  product_hsn_Code:string;
  product_bar_Code:number;
  product_code:string;
  product_name:string;
  product_packing:number;
  product_batch_Number:string;
  product_quantity:number;
  product_free:string;
  product_purchase_Price:Float32Array;
  product_expiry_Date:string;
  product_expiry_Month:string;
  product_expiry_Year:string;
  product_cgst:Float32Array;
  product_sgst:Float32Array;
  product_mrp:Float32Array;
  product_discount:Float32Array;
  product_retailer_price:Float32Array;
  product_special_Price:Float32Array;
  product_special_Price_GST:Float32Array;
  product_stockist_Price:Float32Array;
  
}

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  // Private array to store user data
  private users: User[] = [];
  private products:Product[] = [];

  // Method to add a user to the array
  addUser(user: User) {
    this.users.push(user);
  }

  addProduct(product:Product) {
    this.products.push(product);
  }

  // Method to retrieve all users
  getUsers(): User[] {
    return this.users;
  }


  // Method to retrieve all users
  getProducts(): Product[] {
    return this.products;
  }

}