import {Component} from 'angular2/core';

@Component({
	selector: 'perfil',
    templateUrl: 'app/perfil/perfil.html',
		styleUrls: ['app/perfil/perfil.css']
})

/*
export interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  genero: string;
  edad: string;
	email: string;
}
*/
export class Perfil {
	public modelo;

	constructor(){
		this.modelo = {
			id: 2,
			nombre: "Sergio",
			apellido: "Pérez Peló",
			genero: "Masculino",
			edad: 20,
			email: "spartanos@spartan.com",
			entrenador : "Arnold suaseneguer"
		};
	}
};
