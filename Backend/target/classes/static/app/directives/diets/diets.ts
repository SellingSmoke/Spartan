import { Component, Input, OnInit, AfterViewInit } from 'angular2/core';
import { Diet, IDiet } from '../../models/diet.model';
import { ShowFoodPipe } from '../../pipes/diet-pipes.pipe';
import { AutenticacionService } from '../../services/autenticacion.service';

declare var jQuery:JQueryStatic;

@Component({
	selector: 'diets',
  templateUrl: 'app/directives/diets/diets.html',
	styleUrls: ['app/directives/diets/diets.css'],
	pipes: [ShowFoodPipe]
})

export class Diets implements OnInit, AfterViewInit{

	@Input()
	diet: Diet;

	static days =['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

	// Contendrá los platos de cada dia de la semana
	matrix:string[][];

	day: number;
	day_s:string;

	rol:boolean;
	edit_mode:boolean;

	/**
		Prioridad 1
	*/

	constructor(private aut:AutenticacionService) {
		this.setDay(new Date().getDay() + 1);
		this.edit_mode = false;
		this.rol = this.aut.esProfesor();
	}

	/**
		Al iniciarse el componente
		Prioridad 2
	*/
	ngOnInit(){
		if(!this.diet){
			this.diet = new Diet(1, "", ""); // BORRAR EN UN FUTURO
			this.matrix = [
				/** Lunes     */ ["", "", "", ""],
				/** Martes    */ ["", "", "", ""],
				/** Miercoles */ ["", "", "", ""],
				/** Jueves    */ ["", "", "", ""],
				/** Viernes   */ ["", "", "", ""],
				/** Sabado    */ ["", "", "", ""],
				/** Domingo   */ ["", "", "", ""]
			];
		}else{
			let m = JSON.stringify(this.diet.matrix);
			console.log(m);
			this.matrix = JSON.parse(m);
			console.log(this.matrix);
			this.diet.matrix;
		}
	}

	/**
		Al iniciarse el componente
		Prioridad 3
	*/

	ngAfterViewInit(){
		this.hideColumns(this.day);
	}

	/**
		Oculta todas las columnas menos la del dia que le pasas
	*/

	hideColumns(day:number){
		this.setDay(day);
		for(var n = 1; n <= 8; n++){
			if(n != this.day){
				//jQuery('table#tabla-dieta thead th:eq('+n+')').hide();						// Ocultamos la cabecera de las columas
				jQuery('table#tabla-dieta tbody td:nth-child('+(n+1)+')').hide();	// Ocultamos todo los detalles de esa columna
			}else{
				//jQuery('table#tabla-dieta thead th:eq('+n+')').show();						// Mostramos la cabecera
				jQuery('table#tabla-dieta tbody td:nth-child('+(n+1)+')').show();	// Mostramos el contenido
			}
		}
	}

	/**
		 Cambiar el dia de la semana
	*/

	setDay(day:number) {
		if(day < 1){ // DOMINGO -> SABADO
			day = 6;
		}else if(day > 7){ // SABADO -> DOMINGO
			day = 1;
		}
		this.day = day;
		this.day_s = Diets.days[day - 1 ];
	}

	/**
		 Cambiar el modo de edición
	*/
	editMode(save:boolean){
		if(save){
			// Aqui se hará PUT sobre la meta

		}
		this.edit_mode = !this.edit_mode;
	}

};
