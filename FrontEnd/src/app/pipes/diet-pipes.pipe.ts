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
                if(values.length == 1){
                  return value;
                }
                return values[1];
        case 1: // Segundo plato
                return values[2];
        case 2: // Postre
                return values[3]
        default:
                return "Invalid food";
      }
    }
}
