import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public publicaciones: any[] = [];

  constructor() {
    // Simula la carga de publicaciones después de 2 segundos
    setTimeout(() => {
      this.cargarPublicaciones();
    }, 2000);
  }

  cargarPublicaciones() {
    // Aquí cargarías las publicaciones desde tu fuente de datos
    this.publicaciones = [
      {
        titulo: 'Publicación 1',
        tipo: 'imagen',
        imagenUrl: 'https://img.freepik.com/fotos-premium/lindo-gatito-gatito-bebe-animal_853115-5758.jpg',
        texto: 'Contenido de la publicación 1. Más texto aquí...',
      },
      {
        titulo: 'Publicación 2',
        tipo: 'imagen',
        imagenUrl: 'https://www.eloccidental.com.mx/incoming/gvhext-richard-burlton-htpmedsyzag-unsplash.jpg/ALTERNATES/LANDSCAPE_768/richard-burlton-HTpmedSyZag-unsplash.jpg',
        texto: 'Contenido de la publicación 2. Más texto aquí...',
      },
      {
        titulo: 'Publicación 3',
        tipo: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=YaEG2aWJnZ8',
        texto: 'Contenido de la publicación 2. Más texto aquí...',
      },
      {
        titulo: 'Publicación 4',
        tipo: 'imagen',
        imagenUrl: 'https://img.freepik.com/fotos-premium/perro-gorro-fiesta-que-dice-feliz-cumpleanos_81048-4465.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais',
        texto: 'Contenido de la publicación 2. Más texto aquí...',
      },
      
      
      // ... más publicaciones
    ];
  }
}
