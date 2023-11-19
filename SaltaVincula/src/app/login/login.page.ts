import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userOriginal: string = "root";
  passwordOriginal: string = "root";
  user: string = "";
  password: string = "";
  
  constructor(private alertController: AlertController, private router: Router) { }

  async verificarCredenciales() {
    console.log(this.user, this.password);
    let mensaje: string;

    if (this.user === this.userOriginal && this.password === this.passwordOriginal) {
      mensaje = 'Inicio de sesión exitoso';
      this.router.navigate(['/tabs']);
    } else {
      mensaje = 'Usuario o contraseña incorrectos';
    }

    // Crear la alerta con el mensaje correspondiente
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión',
      message: mensaje,
      buttons: ['OK'],
    });

    // Presentar la alerta
    await alert.present();
  }
  ngOnInit() {
  }

}
