import { ArrayType } from '@angular/compiler';

export interface IProduct {
  id:number;
  titel:string;
  description:string;
  rating:number;
  stock:number;
  retailer_id:number;
  quantity:number;
  brand:string;
  category:string;
  thumbnail:string;
  images:string[];
}
