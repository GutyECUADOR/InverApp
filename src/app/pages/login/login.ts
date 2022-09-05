import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public alertCtrl: AlertController
  ) { }

  async onLogin(form: NgForm) {
    this.submitted = true;
    
    const alert = await this.alertCtrl.create({
      header: 'Login Fallido',
      message: 'Ups no se pudo ingresar a la aplicación, revise su usuario y/o contraseña.',
      buttons: ['OK'],
    });

    await alert.present();
    return;
    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
