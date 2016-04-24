import { Component, OnInit, Input } from 'angular2/core';
import { Diet, IDiet } from '../../models/diet.model';
import { DietService } from '../../services/diet.service';
import { ShowFoodPipe } from '../../pipes/diet-pipes.pipe';

declare var jQuery:JQueryStatic;

@Component({
	selector: 'diets',
  templateUrl: 'app/directives/diets/diets.html',
	styleUrls: ['app/directives/diets/diets.css'],
  providers: [DietService],
	pipes: [ShowFoodPipe]
})

export class Diets implements OnInit{

	@Input()
	diet_id:number;

	static days =['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

	diet: Diet;
	day: number;
	day_s:string;

	rol:boolean;
	edit_mode:boolean;

	constructor(private _dietService: DietService) {
		this.diet = new Diet(1, "", "");
		this.setDay(new Date().getDay() + 1);
		this.edit_mode = false;
		this.rol = localStorage.getItem("rol") === "1";
		console.log(this.day);
	}

	/**
		Método que se llama inmediatamente después del constructor
	*/

  ngOnInit() {
		if (this.diet_id !== -1){ // Si existe la dieta
			this._dietService.getDiet(this.diet_id).then(
				diet => {
								 this.diet = diet;
								 this.hideColumns(this.day);
							  }
			);
		}else{
			this.hideColumns(this.day);
		}
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
			this.diet.id = 1;
			this.diet_id = 1;
		}
		this.edit_mode = !this.edit_mode;
	}

};
