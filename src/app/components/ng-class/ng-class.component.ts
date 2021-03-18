import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [
  ]
})
export class NgClassComponent implements OnInit {

  alert:string = "alert-danger";

  propiedades = {

    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
