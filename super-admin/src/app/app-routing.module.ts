import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { RetailersComponent } from './Components/retailers/retailers.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/Login/login/login.component';

const routes: Routes = [
  {path:'' , redirectTo:'/dashboard' , pathMatch: 'full'},
  {path: 'dashboard' , component:DashboardComponent , title: 'dashboard page'},
  {path: 'products' , component:ProductsComponent , title: 'products page'},
  {path: 'customers' , component:CustomersComponent , title: 'customers page'},
  {path: 'orders' , component:OrdersComponent , title: 'orders page'},
  {path: 'retailers' , component:RetailersComponent , title: 'retailers page'},
  {path: 'statistics' , component:StatisticsComponent , title: 'statistics page'},
  {path: 'singup', component:RegisterComponent , title: 'singup page'},
  {path: 'login', component:LoginComponent , title: 'login page'},
  {path:'**' , component:NotFoundComponent , title: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
