import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [
  ]
})
export class NgClassComponent implements OnInit {

  alert:string = "alert-danger";
  loading:boolean = false;

  propiedades = {

    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  execute() {
    this.loading = true;

    setTimeout(() => this.loading = false, 3000);
  }

}
