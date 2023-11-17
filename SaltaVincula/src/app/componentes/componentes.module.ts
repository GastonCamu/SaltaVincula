import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { ComentariosComponent } from './comentarios/comentarios.component';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { TabsPageModule } from '../tabs/tabs.module';
import { Tab1Page } from '../tab1/tab1.page';

@NgModule({
  declarations: [ComentariosComponent],
  imports: [CommonModule, IonicModule, FormsModule,RouterModule],
  exports: [ComentariosComponent],
  providers: [Tab1Page],
})
export class ComponentesModule {}

