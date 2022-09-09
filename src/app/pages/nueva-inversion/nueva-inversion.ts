import { Component } from '@angular/core';
import { UserData } from '../../providers/user-data';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { IInversion } from "../../interfaces/iinversion.interface";


@Component({
  selector: 'nueva-inversion',
  templateUrl: 'nueva-inversion.html',
  styleUrls: ['./nueva-inversion.scss'],
})
export class NuevaInversion {
  inversion: IInversion = {
    id: null,
    tipo: '',
    monto: 10,
    fecha_inversion: '',
    fecha_pago: '',
    imagen_recibo: null,
    user_id: null,
    estado: 'pendiente',
    created_at: '',
    updated_at: '',
  };
  submitted = false;

  constructor(public router: Router,) {
    
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    return;
    if (form.valid) {
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  cargarFoto() {
    console.log('Foto')
  }

}
