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

  header_3_text_nombre: string = "Gemus gabian";
  header_3_text_edad: string = "30 años";
  header_3_text_lugar: string = "Salta Capital";
  header_3_text_oficio: string = "Carpintero";

  historias = ["navidad", "vacaciones", "nuevo perrito", "primer trabajo", "navidad", "vacaciones", "nuevo perrito", "primer trabajo"];

  constructor() {}

}
