import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [ComentariosComponent],
  imports: [CommonModule, IonicModule, FormsModule], // Añade FormsModule aquí
  exports: [ComentariosComponent],
})
export class ComponentesModule {}

