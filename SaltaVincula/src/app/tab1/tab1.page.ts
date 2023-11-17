import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComentariosComponent } from '../componentes/comentarios/comentarios.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public publicaciones: any[] = [];

  constructor(private sanitizer: DomSanitizer,public modalController: ModalController) {
    // Simula la carga de publicaciones después de 2 segundos
    setTimeout(() => {
      this.cargarPublicaciones();
    }, 2000);
  }

  async abrirComentarios(publicacion: any) {
    const modal = await this.modalController.create({
      component: ComentariosComponent,
      componentProps: {
        publicacion: publicacion,
      },
    });

    modal.onWillDismiss().then((data) => {
      console.log('Modal cerrado', data);
      // Puedes manejar los datos devueltos aquí si es necesario
    });

    await modal.present();
  }



    cargarPublicaciones() {
    this.publicaciones = [
      {
        usuario: 'Alicia', 
        tipo: 'imagen',
        imagenUrl: 'https://img.freepik.com/fotos-premium/lindo-gatito-gatito-bebe-animal_853115-5758.jpg',
        texto: 'Awwww',
      },
      {
        usuario: 'Gastón',
        tipo: 'imagen',
        imagenUrl: 'https://www.eloccidental.com.mx/incoming/gvhext-richard-burlton-htpmedsyzag-unsplash.jpg/ALTERNATES/LANDSCAPE_768/richard-burlton-HTpmedSyZag-unsplash.jpg',
        texto: 'Perrito que adoptamos! Acepto sugerencias de nombres...',
      },
      {
        usuario: 'Alicia',
        tipo: 'video',
        videoUrl: 'https://www.youtube.com/embed/YaEG2aWJnZ8',
        texto: 'Mi canción favorita del mes <3',
      },
      {
        usuario: 'Gastón',
        tipo: 'imagen',
        imagenUrl: 'https://img.freepik.com/fotos-premium/perro-gorro-fiesta-que-dice-feliz-cumpleanos_81048-4465.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais',
        texto: 'Esta es una foto del cumpleaños de mi perrito',
      },
      
      
      // ... más publicaciones
    ];
  }
    getSafeVideoUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
