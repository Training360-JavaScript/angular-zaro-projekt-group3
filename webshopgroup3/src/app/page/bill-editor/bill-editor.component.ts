import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BillService } from 'src/app/service/bill.service';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-bill-editor',
  templateUrl: './bill-editor.component.html',
  styleUrls: ['./bill-editor.component.scss']
})
export class BillEditorComponent implements OnInit {

  

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
