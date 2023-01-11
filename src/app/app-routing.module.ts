import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepositosComponent } from './pages/depositos/depositos.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { GirosComponent } from './pages/giros/giros.component';
import { CuentaCorrienteComponent } from './pages/cuenta-corriente/cuenta-corriente.component';

//*  www.dominioorganizacion.cl/contacto
//* ng serve -o => http://localhost:4200
//* http://localhost:4200/  "no existe el path vacio"
//* http://localhost:4200/contacto "no existe la ruta contacto"

//* localhost:4200/home
//* localhost:4200/depositos 
//* localhost:4200/prestamos

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'depositos', component: DepositosComponent },
  { path: 'prestamos', component: PrestamosComponent },
  { path: 'giros', component: GirosComponent },
  { path: 'cta-corriente', component: CuentaCorrienteComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
