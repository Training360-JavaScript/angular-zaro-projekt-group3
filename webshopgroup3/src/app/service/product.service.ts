import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BaseService } from './base.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product>{

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'product';
   }
}
