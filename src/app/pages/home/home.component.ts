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

}
