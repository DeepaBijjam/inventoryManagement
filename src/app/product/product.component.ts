// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrl: './product.component.css'
// })
// export class ProductComponent {

// }





import { ChangeDetectionStrategy,Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreDataService } from '../services/store-data.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductComponent {
  
  protected readonly value = signal('');
  submitted: boolean | undefined;
 


  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }


  products: any[] = [];

  constructor(private storeDataService: StoreDataService) {}

  onSubmit(form: NgForm) {
    const productData = {
      // supp_id:form.value.supp_id,
      // supp_name:form.value.supp_name,
      // supp_contact:form.value.supp_contact,
      // supp_gst:form.value.supp_gst,
      // supp_dl:form.value.supp_dl,
      // supp_pan:form.value.supp_pan,
      // supp_fssai:form.value.supp_fssai


      product_id:form.value.product_id,
      product_hsn_Code:form.value.product_hsn_Code,
      product_bar_Code:form.value.product_bar_Code,
      product_code:form.value.product_code,
      product_name:form.value.product_name,
      product_packing:form.value.product_packing,
      product_batch_Number:form.value.product_batch_Number,
      product_quantity:form.value.product_quantity,
      product_free:form.value.product_free,
      product_purchase_Price:form.value.product_purchase_Price,
      product_expiry_Date:form.value.product_expiry_Date,
      product_expiry_Month:form.value.product_expiry_Month,
      product_expiry_Year:form.value.product_expiry_Year,
      product_cgst:form.value.product_cgst,
      product_sgst:form.value.product_sgst,
      product_mrp:form.value.product_mrp,
      product_discount:form.value.product_discount,
      product_retailer_price:form.value.product_retailer_price,
      product_special_Price:form.value.product_special_Price,
      product_special_Price_GST:form.value.product_special_Price_GST,
      product_stockist_Price:form.value.product_stockist_Price,
    };
   


    this.storeDataService.addProduct(productData); // Storing data in service
    this.fetchProducts();
    // form.reset();
    if (form.valid) {
      // Handle valid form submission
      console.log('Form Submitted!', form.value);
      form.resetForm(); // Reset the form state
    }
  }



  fetchProducts() {
    this.products = this.storeDataService.getProducts(); // Retrieving data from service
    this.submitted = true;
  }

  ngOnInit() {
    this.fetchProducts();
  }
}




