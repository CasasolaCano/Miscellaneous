import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: [
  ]
})
export class NewUserComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
  
    try {
      this.router.parent.params.subscribe(params => {
        console.log("Ruta hija");
        console.log(params);
      });
    } catch (error) {
      console.log(error);
    }
    
   }

  ngOnInit(): void {
  }

}
