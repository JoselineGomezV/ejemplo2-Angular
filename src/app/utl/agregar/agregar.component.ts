import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/Utl.Interface';
import { UtlService } from '../servicios/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  //SE HACEN LOS INPUTS PARA PASAR EL ARREGLO Y EL OBJETO
  // @Input() alumnosUtl:AlumnosUtl[] = [];
  // @Input() regAlumno:AlumnosUtl = {
  //   nombre: '',
  //   edad: 0
  // }

  // @Output() onNuevoAlumno: EventEmitter<AlumnosUtl> = new EventEmitter();

  @Input() regAlumno:AlumnosUtl = {
    nombre: '',
    edad: 0
  }

  constructor(private alumnosUtl:UtlService){

  }

  agregar(){
    //AGREGAR ARREGLOS CON PUSH
    // this.alumnosUtl.push(this.regAlumno);
    // this.regAlumno = {
    //   nombre: '',
    //   edad: 0,
    // }
    // this.onNuevoAlumno.emit(this.regAlumno);
    this.alumnosUtl.agregarNuevoAlumno(this.regAlumno);
    this.regAlumno = {
      nombre: '',
      edad: 0,
    }
  }

}
