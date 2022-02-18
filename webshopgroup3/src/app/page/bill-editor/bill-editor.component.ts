import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BillService } from 'src/app/service/bill.service';
import { Bill } from 'src/app/model/bill';
//import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bill-editor',
  templateUrl: './bill-editor.component.html',
  styleUrls: ['./bill-editor.component.scss']
})
export class BillEditorComponent implements OnInit {

  // apiUrl: string = environment.apiUrl;
  // entityName: string = 'bill';

  // list$: 
  // Observable<Bill> = this.activatedRoute.params.pipe(
  //   switchMap(params => this.billService.get(params['id']))
  // )

  bill$: Observable<Bill> = this.activatedRoute.params.pipe(switchMap(params =>this.billService.get(params['id'])))
  

  constructor(
    private activatedRoute = ActivatedRoute,
    private billService = BillService,
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    
  }

  // get(id: number): Observable<Bill> {
  //   return this.http.get<Bill>(`${this.apiUrl}${this.entityName}/${id}`)
  // }

}
