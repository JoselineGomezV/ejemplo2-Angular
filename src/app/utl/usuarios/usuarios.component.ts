import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
form = new FormGroup({
  nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
  password: new FormControl('',[Validators.required]),
})

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
  }

obtenerErrorNombre(){
  var nom = this.form.get('nombre');
  if(nom?.hasError('required')){
    return 'El campo nombre es requerido'
  }
  if(nom?.hasError('minleght')){
    return 'La longtud mínima es de 3 carácteres'
  }
  return;
}
obtenerErrorPassword(){
  var pass = this.form.get('password');
  if(pass?.hasError('required')){
    return 'El campo password es requerido'
  }
  return;
}
guardarUsuario(){
  console.log('Registro guardado');
}
}
