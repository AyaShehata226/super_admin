import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from './Services/admin-auth/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'super-admin';
  opened= true;
  show : boolean = false;
  constructor(private adminSrv : AdminAuthService , private router : Router){}
  ngOnInit(): void {
    if(localStorage.getItem('adminToken')){
      this.show = true;
    }else{
      this.show = false;
    }
  }
  logout(){
    this.adminSrv.logout();
    this.router.navigate(['login']); 
  }
}
