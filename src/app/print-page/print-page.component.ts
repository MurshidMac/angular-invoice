import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css']
})
export class PrintPageComponent implements OnInit {

  invoiceNumber: '10';

  constructor() { }

  ngOnInit() {
  }

}