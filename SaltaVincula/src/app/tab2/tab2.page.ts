// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss']
// })
// export class Tab2Page {

//   usuarioPorDefecto: string='Tom Riddle';
  
//   constructor() {}
//   mensajes = [
//     { nombre: 'Alicia', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '4+ mensajes nuevos' },
//     { nombre: 'Persona Random', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
//     { nombre: 'Gastón', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: 'Visto' },
//     { nombre: 'Alicia', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '10+ mensajes nuevos' },
//     { nombre: 'Juan', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
//     { nombre: 'Juancito', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
//   ];

//   eliminarMensaje(mensaje: any) {
//     // Lógica para eliminar el mensaje de la lista
//     const index = this.mensajes.indexOf(mensaje);
//     if (index !== -1) {
//       this.mensajes.splice(index, 1);
//     }
//   }
// }


// tab2.page.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usuarioPorDefecto: string = 'Tom Riddle';
  mensajes: any[] = []; // Inicializamos mensajes como un arreglo vacío
  filtroNombre: string = '';


  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  cargarMensajesDesdeAPI() {
    // Verifica si el término de búsqueda está vacío
    if (!this.filtroNombre) {
      // Si está vacío, carga todos los mensajes
      const apiUrl = 'http://localhost:8000/api/mensajes';
      this.http.get(apiUrl).subscribe((data: any) => {
        this.mensajes = data;
        this.cdr.detectChanges(); 
      });
    } else {
      const apiUrl = `http://localhost:8000/api/mensajes?nombre=${this.filtroNombre}`;
      this.http.get(apiUrl).subscribe((data: any) => {
        this.mensajes = data;
        this.cdr.detectChanges();
      });
    }
  }
  buscarMensajes(event: any) {
    console.log('Evento ionChange activado', event);
    this.filtroNombre = event.target.value;
    this.cargarMensajesDesdeAPI();
  }

  
  eliminarMensaje(mensaje: any) {
    const index = this.mensajes.indexOf(mensaje);
    if (index !== -1) {
      // Eliminar el mensaje de la lista en el frontend
      this.mensajes.splice(index, 1);

      // Lógica para eliminar el mensaje en la API 
      const deleteUrl = `http://localhost:8000/api/mensajes/${mensaje.nombre}`;
      this.http.delete(deleteUrl).subscribe(response => {
        console.log('Mensaje eliminado en la API:', response);
      });
    }
  }

  // Método que se ejecuta cuando se carga la página
  ionViewDidEnter() {
    this.cargarMensajesDesdeAPI(); // Cargar mensajes al entrar en la página
  }
}
