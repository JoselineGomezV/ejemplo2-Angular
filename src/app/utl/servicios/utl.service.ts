import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/Utl.Interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {
  private _alumnosUtl: AlumnosUtl[] = [
    {
      nombre: 'Gustavo',
      edad: 21,
    },
    {
      nombre: 'Marco',
      edad: 22,
    },
    {
      nombre: 'Melisa',
      edad: 22,
    }
  ]

  constructor() { }

  get alumno():AlumnosUtl[]{
    return[...this._alumnosUtl];
  }
  
  agregarNuevoAlumno(datos:AlumnosUtl){
    this._alumnosUtl.push(datos);
  }
}
