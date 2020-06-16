import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limites',
  templateUrl: './limites.component.html',
  styleUrls: ['./limites.component.css']
})
export class LimitesComponent implements OnInit {

  constructor() { }

  Alias:string[] = ["elemento1","elemento2"];
  ngOnInit(): void {
  }

}
