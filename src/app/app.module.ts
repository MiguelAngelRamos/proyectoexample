import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DepositosComponent } from './pages/depositos/depositos.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { GirosComponent } from './pages/giros/giros.component';
import { CuentaCorrienteComponent } from './pages/cuenta-corriente/cuenta-corriente.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DepositosComponent,
    PrestamosComponent,
    GirosComponent,
    CuentaCorrienteComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
