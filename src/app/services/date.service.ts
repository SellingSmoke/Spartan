import { Injectable } from 'angular2/core';

@Injectable()
export class DateService {

  /**
     Devuelve el dia de la semana
  */

  getDay() {
    var fecha  = new Date();
    var dias=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    console.log(dias[fecha.getDay()]);
		return dias[fecha.getDay()];
  }

}
