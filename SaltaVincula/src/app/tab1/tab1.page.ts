import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ComentariosComponent } from '../componentes/comentarios/comentarios.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public publicaciones: any[] = [];
  usuarioPorDefecto: string='Tom Riddle';
  fotoPerfilPorDefecto: string='../../assets/img/tomRiddle.webp';
  tiempoPorDefecto:string='un momento';

  constructor(private sanitizer: DomSanitizer,public modalController: ModalController, private cdr: ChangeDetectorRef,private actionSheetController: ActionSheetController) {
    // Simula la carga de publicaciones después de 2 segundos
    setTimeout(() => {
      this.cargarPublicaciones();
    }, 2000);
  }
  
  // protected cdr =inject(ChangeDetectorRef); investigar, esto sería mejor

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
        imagenUsuario:'../../assets/img/modelo-foto-perfil.webp',
        tiempo:'1 hora'
      },
      {
        usuario: 'Gastón',
        tipo: 'imagen',
        imagenUrl: 'https://www.eloccidental.com.mx/incoming/gvhext-richard-burlton-htpmedsyzag-unsplash.jpg/ALTERNATES/LANDSCAPE_768/richard-burlton-HTpmedSyZag-unsplash.jpg',
        texto: 'Perrito que adoptamos! Acepto sugerencias de nombres...',
        imagenUsuario:'../../assets/img/modelo-foto-perfil.webp',
        tiempo:'4 horas'
      },
      {
        usuario: 'Alicia',
        tipo: 'video',
        videoUrl: 'https://www.youtube.com/embed/YaEG2aWJnZ8',
        texto: 'Mi canción favorita del mes <3',
        imagenUsuario:'../../assets/img/modelo-foto-perfil.webp',
        tiempo:'12 horas'
      },
      {
        usuario: 'Gastón',
        tipo: 'imagen',
        imagenUrl: 'https://img.freepik.com/fotos-premium/perro-gorro-fiesta-que-dice-feliz-cumpleanos_81048-4465.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais',
        texto: 'Esta es una foto del cumpleaños de mi perrito',
        imagenUsuario:'../../assets/img/modelo-foto-perfil.webp',
        tiempo:'2 días'
      },
      
      
      // ... más publicaciones
    ];
  }




  nuevaPublicacion: string = '';
  tipoContenido: string = 'texto'; // Valor predeterminado
  urlImagen: string = '';
  urlVideo: string = '';

  agregarPublicacion() {
    if (this.tipoContenido === 'imagen' && this.urlImagen.trim() !== '') {
      // Agregar nueva publicación con imagen
      this.publicaciones.unshift({
        usuario: this.usuarioPorDefecto,
        imagenUrl: this.urlImagen,
        tipo: 'imagen',
        texto: this.nuevaPublicacion,
        imagenUsuario:this.fotoPerfilPorDefecto,
        tiempo:this.tiempoPorDefecto,
      });
    } else if (this.tipoContenido === 'video' && this.urlVideo.trim() !== '') {
      // Agregar nueva publicación con video
      this.publicaciones.unshift({
        usuario: this.usuarioPorDefecto,
        videoUrl: this.urlVideo,
        tipo: 'video',
        texto: this.nuevaPublicacion,
        imagenUsuario:this.fotoPerfilPorDefecto,
        tiempo:this.tiempoPorDefecto,
      });
    }else if (this.tipoContenido === 'texto') {
      // Agregar nueva publicación sin video ni imagen
      this.publicaciones.unshift({
        usuario: this.usuarioPorDefecto,
        imagenUrl:'',
        tipo: '',
        texto: this.nuevaPublicacion,
        imagenUsuario:this.fotoPerfilPorDefecto,
        tiempo:this.tiempoPorDefecto,
      });
    }

    this.nuevaPublicacion = '';
    this.urlImagen = '';
    this.urlVideo = '';
    this.tipoContenido = 'texto'; // Restaurar el valor predeterminado

    this.cdr.detectChanges();

  }


  async mostrarOpciones(publicacion: any) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Eliminar Publicación',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.eliminarPublicacion(publicacion);
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
  
  async eliminarPublicacion(publicacion: any) {
    // Lógica para eliminar la publicación
    const index = this.publicaciones.indexOf(publicacion);
    if (index !== -1) {
      this.publicaciones.splice(index, 1);
    }
  }



    getSafeVideoUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
