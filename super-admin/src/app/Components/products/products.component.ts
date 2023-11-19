import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProducts';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:IProduct[]=[];
  productId:number =0;
  productCat:string = "";
  pageSize:number =20;
  currentPage:number =1;
  selectedProducts:IProduct[]=[];
  totalPages: number=0;  // Total number of pages

constructor(public prdService:ProductsService ,private toastr:ToastrService){
  
}
ngOnInit(): void {
  this.loadProducts();
}
loadProducts():void{
  this.prdService.getAllProducts().subscribe({
    next: (data) => {
      this.products = data;
      this.updateDisplayedProducts();
      console.log(this.products);
      
    },
    error: (err) => {
      console.log(err);
    }
  });
}
updateDisplayedProducts():void{
  const startIndex = (this.currentPage - 1) * this.pageSize;
  this.selectedProducts = this.products.slice(startIndex, startIndex + this.pageSize);
}
onPageChange(page: number): void {
  this.currentPage = page;
  this.updateDisplayedProducts();
}
calculateTotalPages(): void {
  this.totalPages = Math.ceil(this.products.length / this.pageSize);  
}

searchProductId(): void {
  // // Check if productId is not empty
  // if (this.productId!==0) {
  //   this.prdService.getProductById(this.productId).subscribe({
  //     next:(data)=>{
  //       console.log(data);
  //       console.log(this.productId);
        
  //       // this.selectedProductWithId=data
  //     },
  //     error:(err)=>{
  //       console.log(err); 
  //     }
  // });
  // }
}

searchProductCat(): void {
  // Check if productId is not empty
  if (this.productCat.trim()!=="") {
    this.prdService.getProductBycategory(this.productCat).subscribe({
      next:(data)=>{
        // this.selectedProducts=data
        console.log(data);
        console.log(this.productCat);
      },
      error:(err)=>{
        console.log(err); 
      }
  });
  }
  else{
    this.loadProducts()
  }
}

deleteProduct(productId: number): void {
  this.prdService.deleteProductById(productId).subscribe(
    () => {
      this.toastr.success(`Product with ID ${productId} deleted successfully.`);
      console.log(`Product with ID ${productId} deleted successfully.`);
    },
    (error) => {
      this.toastr.error(`Error deleting product with ID ${productId}`, 'Error');
      console.error(`Error deleting product with ID ${productId}`, error);
    }
  );
}
}
