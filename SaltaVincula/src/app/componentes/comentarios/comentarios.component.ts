import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent {
  comentarioAnterior='';
  message = '\nAquí se verían los comentarios si hubieran...';
  comentario: string | undefined;
  comentariosAbiertos = false;

  constructor(public modalController: ModalController) {}

  volver() {
    this.comentariosAbiertos = false;
    
    this.modalController.dismiss(null, 'volver');
  }


  async confirm() {
    this.message = `${this.comentarioAnterior}\n${this.comentario}`;
    this.comentarioAnterior=this.message;

    this.comentariosAbiertos = false;

  }
}



