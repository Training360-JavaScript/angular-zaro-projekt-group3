import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';
import { BaseService } from 'src/app/service/base.service';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseService<Bill>{

  constructor(
    public override http: HttpClient,
  ) { 
    super(http);
    this.entityName = 'bill'
  }

 

}
