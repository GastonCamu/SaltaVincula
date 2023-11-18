import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() title: string="";
  imgURL="/assets/img/Salta.png";
  constructor(private router: Router) { }

  redirectToTab2(){
    if (this.router) {
      this.router.navigate(['/tab2']); // Asegúrate de proporcionar la ruta correcta
    }}
  
  ngOnInit() {}

}
