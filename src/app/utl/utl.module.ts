import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UtlService } from './servicios/utl.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MainPageComponent,
    AlumnosComponent,
    AgregarComponent,
    UsuariosComponent
  ],
  exports:[
    MainPageComponent,
    UsuariosComponent
  ],
  providers:[
    UtlService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UtlModule { }
