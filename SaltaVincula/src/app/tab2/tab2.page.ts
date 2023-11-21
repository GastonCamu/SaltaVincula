import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usuarioPorDefecto: string='Tom Riddle';
  
  constructor() {}
  mensajes = [
    { nombre: 'Alicia', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '4+ mensajes nuevos' },
    { nombre: 'Persona Random', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
    { nombre: 'Gastón', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: 'Visto' },
    { nombre: 'Alicia', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '10+ mensajes nuevos' },
    { nombre: 'Juan', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
    { nombre: 'Juancito', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
  ];

  eliminarMensaje(mensaje: any) {
    // Lógica para eliminar el mensaje de la lista
    const index = this.mensajes.indexOf(mensaje);
    if (index !== -1) {
      this.mensajes.splice(index, 1);
    }
  }

}
