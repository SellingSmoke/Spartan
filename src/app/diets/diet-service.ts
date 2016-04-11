import { DIETS } from '../recursos-estaticos';
import { Diet } from '../diets/diet';
import { Injectable } from 'angular2/core';

@Injectable()
export class DietService {

  /**
     Devuelve la dieta con el id especificado
  */

  getDiet(id:number) {
    let diet = Promise.resolve(DIETS).then(
      diets => diets.filter(diet => diet.id === id)[0]
    );
    return diet;
  }

}
