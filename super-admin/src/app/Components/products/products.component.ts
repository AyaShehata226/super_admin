import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProducts';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { ToastrService } from 'ngx-toastr';
import { categories } from 'src/app/Models/categories';
import {CategoriesService} from "src/app/Services/categories/categories.service"
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:IProduct[]=[];
  productId:string ="";
  productCat:string = "";
  productBrand:string = "";
  pageSize:number =20;
  currentPage:number =1;
  selectedProducts:IProduct[]=[];
  totalPages: number=0;  // Total number of pages
  categories:categories[] = [];
constructor(public prdService:ProductsService ,public toastr:ToastrService , public cateService:CategoriesService){
  
}
ngOnInit(): void {
  this.loadProducts();
  this.getAllCategories();
}
loadProducts():void{
  this.prdService.getAllProducts().subscribe({
    next: (data) => {
      this.products = data;
      this.selectedProducts=data;
      this.updateDisplayedProducts();
      console.log(this.selectedProducts);
      
    },
    error: (err) => {
      console.log(err);
    }
  });
}
getAllCategories():void{
  this.cateService.getAllCategories().subscribe({
    next: (data) => {
      this.categories = data;
      this.updateDisplayedProducts();
      console.log(this.categories);
    },
    error: (err) => {
      console.log(err);
    }
  });

}
searchProductCat():void {
  if (this.productCat.trim()!=="") {
    this.selectedProducts = this.products.filter(product => product.category === this.productCat.trim());
    this.updateDisplayedProducts();

    this.totalPages = Math.ceil(this.selectedProducts.length / this.pageSize);
    console.log(this.selectedProducts);

    // console.log(this.totalPages);
  }
  else{
    this.loadProducts()
  }
}
searchProductbrand():void {
  if (this.productBrand.trim()!=="") {
    this.selectedProducts = this.products.filter(product => product.brand === this.productBrand.trim());
    this.updateDisplayedProducts();

    this.totalPages = Math.ceil(this.selectedProducts.length / this.pageSize);
    console.log(this.selectedProducts);
    console.log(this.productBrand);
  }
  else{
    this.loadProducts()
  }
}
updateDisplayedProducts():void{
  const startIndex = (this.currentPage - 1) * this.pageSize;
  this.selectedProducts = this.products.slice(startIndex, startIndex + this.pageSize);
}
onPageChange(page: number): void {
  this.currentPage = page;
  this.updateDisplayedProducts();
  this.totalPages = Math.ceil(this.products.length / this.pageSize);  

}
searchProductId(): void {
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
