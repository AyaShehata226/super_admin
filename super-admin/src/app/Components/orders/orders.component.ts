import { Orders } from './../../Models/orders';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders/orders.service';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Models/IProducts';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  isLoading: boolean = false ;
  orders:Orders[]=[];
  productId:string ="";
  currentPage:number =1;
  selectedOrders:Orders[]=[];
  pageSize:number =20;
  totalPages: number=0;  // Total number of pages
  customerCart:IProduct[]=[];
  constructor(public orderSer:OrdersService ,public toastr:ToastrService,private spinner: NgxSpinnerService){ }
  ngOnInit(): void {
    this.loadOrders();
    this.isLoading = true;
  this.spinner.show();

  setTimeout(() => {
    this.spinner.hide();
  }, 5000);
  }

  loadOrders():void{
    this.orderSer.getAllProducts().subscribe({
      next: (data) => {
        data.Orders = [...data.Orders]
        this.orders.push(...data.Orders ); 
        this.selectedOrders.push(...data.Orders );
        this.updateDisplayedOrders();
        this.isLoading = false;
        this.orders.map(ord=>{
          ord.cart_Customer = [...ord.cart_Customer]
          this.customerCart.push(...ord.cart_Customer)
          console.log(data.Orders);
        })
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  updateDisplayedOrders():void{
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.selectedOrders = this.orders.slice(startIndex, startIndex + this.pageSize);
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedOrders();
    this.totalPages = Math.ceil(this.orders.length / this.pageSize);  
  
  }
}
