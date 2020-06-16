import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avales',
  templateUrl: './avales.component.html',
  styleUrls: ['./avales.component.css']
})
export class AvalesComponent implements OnInit {

  constructor() { }

  Alias:string[] = ["elemento1","elemento2"];
  ngOnInit(): void {
  }

}
