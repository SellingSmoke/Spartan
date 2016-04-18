import { Component } from 'angular2/core';
import { Diet } from '../models/diet';
import { DietService } from '../services/diet.service';

@Component({
	selector: 'diets',
  templateUrl: 'app/diets/diets.html',
  providers: [DietService]
})

export class Dietas {

	diet: Diet;

	constructor(private _dietService: DietService) { }

	/**
		Método que se llama inmediatamente después del OnInit
	*/

  ngOnInit() {
		this.getDiet(1);
  }

	/**
		Método que pedirá los alumnos y al recibirlos los pasará al método para obtener sus metas
	*/

	getDiet(id:number){
		this._dietService.getDiet(id).then(
			diet => {
				this.diet = diet;
				console.log("AQUI -> "+diet.name);
			}
		);
	}

};
