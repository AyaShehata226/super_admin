import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CardsComponent } from './Components/cards/cards.component';
import { ColumnChartComponent } from './Components/column-chart/column-chart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProductsComponent } from './Components/products/products.component';
import { RetailersComponent } from './Components/retailers/retailers.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    CardsComponent,
    ColumnChartComponent,
    DashboardComponent,
    CustomersComponent,
    OrdersComponent,
    ProductsComponent,
    RetailersComponent,
    NotFoundComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CanvasJSAngularChartsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
