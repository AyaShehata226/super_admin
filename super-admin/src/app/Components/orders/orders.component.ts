import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  isLoading: boolean = false ;
  constructor(private spinner: NgxSpinnerService){
    
  }
  ngOnInit(): void {
    this.isLoading = true;
  this.spinner.show();

  setTimeout(() => {
    this.spinner.hide();
  }, 5000);
  }
}
