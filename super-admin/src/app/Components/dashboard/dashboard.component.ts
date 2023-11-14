import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  opened :boolean = false;
  changeValue (newVlaue:boolean){
    this.opened = newVlaue;
    console.log(this.opened);
  }

}
