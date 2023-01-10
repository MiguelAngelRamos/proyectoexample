import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public tituloNav: string = 'Aplicación Angular';

  public opciones: any [] = [
    { path: '/home', name: 'Home'},
    { path: '/depositos', name: 'Opciones'},
    { path: '/prestamos', name: 'Prestamos'},
    { path: '/giros', name: 'Giros'},
    { path: '/cta-corriente', name: 'Cuenta Corriente'}
  ];
}

// const servicio = { 
//   path: '/home', 
//   name: 'Home'
// }

// servicio.name; // 'Home'