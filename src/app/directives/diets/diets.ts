import { Component, Input, OnInit } from 'angular2/core';
import { Diet, IDiet } from '../../models/diet.model';
import { ShowFoodPipe } from '../../pipes/diet-pipes.pipe';

declare var jQuery:JQueryStatic;

@Component({
	selector: 'diets',
  templateUrl: 'app/directives/diets/diets.html',
	styleUrls: ['app/directives/diets/diets.css'],
	pipes: [ShowFoodPipe]
})

export class Diets implements OnInit{

	@Input()
	diet: Diet;

	static days =['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

	day: number;
	day_s:string;

	rol:boolean;
	edit_mode:boolean;

	constructor() {
		this.setDay(new Date().getDay() + 1);
		this.edit_mode = false;
		this.rol = localStorage.getItem("rol") === "1";
		console.log(this.day);
	}

	/**
		Al iniciarse
	*/
	ngOnInit(){
		if(!this.diet){
			this.diet = new Diet(1, "", "");
		}
		// Para que oculten al cargarse la dieta
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
