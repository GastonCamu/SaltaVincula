import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements AfterViewInit {

  @ViewChild(IonModal) modal: IonModal | undefined;
  @Input() publicacion: any;

  message = 'Aquí se verían los comentarios si hubieran...';
  name: string | undefined;

  ngAfterViewInit() {
    // Verifica si modal está definido antes de intentar acceder a él
    if (this.modal) {
      // Hacer algo con this.modal
    }
  }

  cancel() {
    // Verifica si modal está definido antes de intentar usarlo
    if (this.modal) {
      this.modal.dismiss(null, 'cancel');
    }
  }

  confirm() {
    // Verifica si modal está definido antes de intentar usarlo
    if (this.modal) {
      this.modal.dismiss(this.name, 'confirm');
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Comentario: \n${ev.detail.data}`;
    }
  }


}
