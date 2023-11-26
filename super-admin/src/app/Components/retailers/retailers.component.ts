import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Retailer } from './../../Models/Retailers';
import { RetailersService } from 'src/app/Services/Retailers/retailers.service';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.scss']
})
export class RetailersComponent implements OnInit {
  Retailers:Retailer[]=[];
  RetailerEmail:string="";
  selectRetailer:Retailer[]=[];
  pageSize:number =1;
  currentPage:number =1;
  totalPages: number=0;  // Total number of pages
  isLoading: boolean = false ;
constructor(public RetService:RetailersService , private spinner: NgxSpinnerService){}
ngOnInit(): void {
  this.loadRetailers();
  this.isLoading = true;
  this.spinner.show();

  setTimeout(() => {
    this.spinner.hide();
  }, 5000);
}
loadRetailers(): void{
  this.RetService.getAllRetailers().subscribe({
    next:(data)=>{
      this.Retailers=data;
      this.selectRetailer=data;
      this.updateDisplayRetailer();
      console.log(data);
    },
    error:(err)=>{
      console.log(err); 
    }
  })
}
searchRetailer(): void {
  if (this.RetailerEmail.trim()!=="") {
    this.selectRetailer = this.Retailers.filter(Retailer => Retailer.email === this.RetailerEmail.trim());
    console.log(this.selectRetailer);

  }else{
    this.loadRetailers();
  }
}

updateDisplayRetailer():void{
  const startIndex = (this.currentPage - 1) * this.pageSize;
  this.selectRetailer = this.Retailers.slice(startIndex, startIndex + this.pageSize);
}
onPageChange(page: number): void {
  this.currentPage = page;
  this.updateDisplayRetailer();
  this.totalPages = Math.ceil(this.Retailers.length / this.pageSize);  
  console.log(this.totalPages);
}
}
