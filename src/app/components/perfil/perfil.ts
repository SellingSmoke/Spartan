import {Component} from 'angular2/core';

@Component({
	selector: 'perfil',
    templateUrl: 'app/components/perfil/perfil.html',
		styleUrls: ['app/components/perfil/perfil.css']
})

export class Perfil {
	public modelo;
	public cambiarPassword:string;
	public cambiarCorreoE:string;
	public cambiarAge:string;
	constructor(){
		this.cambiarPassword = undefined;
		this.cambiarCorreoE = undefined;
		this.cambiarAge = undefined;
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
	esMasculino():boolean{
		return this.modelo.genero==="Masculino";
	}
	cambiarPassClick(){
		this.cambiarPassword="cambiar";
	}
	cambiarPass():boolean{
		return this.cambiarPassword!==undefined;
	}
	cambiarAlgo():boolean{
		return this.cambiarPassword!==undefined || this.cambiarCorreoE!==undefined || this.cambiarAge!==undefined;
	}
	guardarPass(){
		this.cambiarPassword=undefined;
	}

	cambiarEdadClick(){
		this.cambiarAge="cambiar";
	}

	cambiarEdad():boolean{
		return this.cambiarAge!==undefined;
	}

	guardarEdad(){
		this.cambiarAge=undefined;
	}

	cambiarCorreoClick(){
		this.cambiarCorreoE="cambiar";
	}

	cambiarCorreo():boolean{
		return this.cambiarCorreoE!==undefined;
	}

	guardarCorreo(){
		this.cambiarCorreoE=undefined;
	}
};
