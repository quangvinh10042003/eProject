import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  create() {
    document.getElementById('list')?.classList.toggle('none')
  }
  create1() {
    document.getElementById('list1')?.classList.toggle('none')
  }
  create2() {
    document.getElementById('list2')?.classList.toggle('none')
  }
}