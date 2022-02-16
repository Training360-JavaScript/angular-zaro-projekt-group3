import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order>{

  constructor(
    public override http: HttpClient
  ) { 
    super(http);
    this.entityName = 'order'
  }
}
