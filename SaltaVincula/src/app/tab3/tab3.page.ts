import { Component } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nombre_user: string = "TomRiddle1926";
  foto_user: string = "./assets/img/tomRiddle.webp"

  publicaciones: number = 12;
  seguidores: number = 720;
  siguiendo: number = 1960;

  header_3_text_nombre: string = "Tom Riddle";
  header_3_text_edad: string = "71 años";
  header_3_text_lugar: string = "Salta Capital";
  header_3_text_oficio: string = "Mago";

  historias = ["navidad", "vacaciones", "arbol", "magia", "navidad", "vacaciones", "brasil", "trabajox", "viernes", "domingo", "varita", "fiesta"];
  historias_img = [
    "./assets/img/1.jpg",
    "./assets/img/2.jpg",
    "./assets/img/3.jpg",
    "./assets/img/4.jpg",
    "./assets/img/5.jpg",
    "./assets/img/6.jpg",
    "./assets/img/7.jpg",
    "./assets/img/8.jpg",
    "./assets/img/9.jpg",
    "./assets/img/10.jpeg",
    "./assets/img/11.avif",
    "./assets/img/12.webp",
  ];
  
  constructor() {}

}
