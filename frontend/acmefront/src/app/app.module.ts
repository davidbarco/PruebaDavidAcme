import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterConductorComponent } from './components/register-conductor/register-conductor.component';
import { RegisterVehiculoComponent } from './components/register-vehiculo/register-vehiculo.component';
import { RegisterPropietarioComponent } from './components/register-propietario/register-propietario.component';
import { MenuComponent } from './components/menu/menu.component';


const appRoutes: Routes = [
  { path: '', component: RegisterConductorComponent },
  { path: 'registrarConductor', component: RegisterConductorComponent },
  { path: 'registrarvehiculo', component: RegisterVehiculoComponent },
  { path: 'registrarPropietario', component: RegisterPropietarioComponent },
  


  { path: '**', component: RegisterConductorComponent }//Ruta para cuando no encontramos una página
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterConductorComponent,
    RegisterVehiculoComponent,
    RegisterPropietarioComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
