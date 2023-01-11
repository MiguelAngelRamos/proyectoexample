import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

public title: string = 'Home';
public headersTable: string [] = ['Saldo', 'Estado'];
public saldo: number = 0;
public estado: string = 'Sin estado';
public status: boolean = false;

opcionesBtnAumentar = {
  color: 'btn btn-success',
  titleBtn: 'Aumentar Saldo'
}

opcionesBtnDisminuir = {
  color: 'btn btn-danger',
  titleBtn: 'Disminuir Saldo'
}

opcionesBtnEstado = {
  color: 'btn btn-warning',
  titleBtn: 'Cambiar Estado'
}

constructor() {}

public aumentarSaldo() {
  this.saldo = this.saldo + 1000;
}

public disminuirSaldo() {
  this.saldo = this.saldo - 1000;
}

public cambiarEstado() {
  // public estado: string = 'Sin estado';
  this.status = !this.status;
   //* operador ternario
  this.estado = this.status ? 'Activo':'Inactiva';
}

}
