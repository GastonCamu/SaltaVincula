import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  publicaciones: number = 5;
  seguidores: number = 720;
  siguiendo: number = 1960;

  constructor() {}

}
