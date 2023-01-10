import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepositosComponent } from './pages/depositos/depositos.component';

//* localhost:4200/home
//* localhost:4200/depositos 

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'depositos', component: DepositosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
