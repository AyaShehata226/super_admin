import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
@Output () toggleSidebarEvent:EventEmitter<boolean> =new EventEmitter <boolean>();
toggleSidebar(){
  //fire event 
  this.toggleSidebarEvent.emit(true)
}
}
