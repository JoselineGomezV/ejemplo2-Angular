import { Component, Input, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/Utl.Interface';
import { UtlService } from '../servicios/utl.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent{
  //Este parametro va ser recibido por el papá
  // @Input() alumnosUtl:AlumnosUtl[]=[];

  get alumnos(){
    return this.alumnosUtl.alumno;
  }
  constructor(private alumnosUtl:UtlService){

  }
}
