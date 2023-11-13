import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super-admin';
  opened :boolean = false;
  changeValue (newVlaue:boolean){
    this.opened = newVlaue;
    console.log(this.opened);
  }
}
