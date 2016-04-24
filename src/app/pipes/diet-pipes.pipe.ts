import { Pipe, PipeTransform } from 'angular2/core';
/*
 * Show the course
 *
 * Usage:
 *   value | ShowFood:course
 * Example:
 *   {{ ["Pizza", "Hamburguer", "IceCream"] |  ShowFood:1 }}
 *   formats to: "Hamburguer"
*/
@Pipe({name: 'ShowFood'})
export class ShowFoodPipe implements PipeTransform {
    transform(value:string, [course]) : string {

      var values = value.split("-");

      switch(course){
        case 0: // Primer plato
                return values[0];
        case 1: // Segundo plato
                return values[1];
        case 2: // Postre
                return values[2]
        default:
                return "Invalid food";
      }
    }
}
