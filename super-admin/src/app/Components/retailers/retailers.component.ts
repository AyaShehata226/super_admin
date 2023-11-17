import { Component, OnInit } from '@angular/core';
import { Retailer } from './../../Models/Retailers';
import { RetailersService } from 'src/app/Services/Retailers/retailers.service';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.scss']
})
export class RetailersComponent implements OnInit {
  Retailers:Retailer[]=[]
constructor(public RetService:RetailersService){}
ngOnInit(): void {
  this.RetService.getAllRetailers().subscribe({
    next:(data)=>{
      this.Retailers=data;
      console.log(this.Retailers);
    },
    error:(err)=>{
      console.log("error"); 
    }
  })
}

}
