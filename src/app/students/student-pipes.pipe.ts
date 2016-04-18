import { Pipe, PipeTransform } from 'angular2/core';
import { Goal } from '../dataTypes/goal';
/*
 * Beautify the progess bar if value is under 20
 *
 * Usage:
 *   value | BeautifyProgessBar
 * Example:
 *   {{ 15 |  BeautifyProgessBar }}
 *   formats to: ""
 *   {{ 65 |  BeautifyProgessBar }}
 *   formats to: "65% COMPLETADO"
 *   {{ 100 | BeautifyProgessBar }}
 *   formats to: "META COMPLETADA"
*/
@Pipe({name: 'BeautifyProgessBar'})
export class BeautifyProgessBarPipe implements PipeTransform {
    transform(value:number) : string {
      if (value > 20){
        if (value == 100){
          return "META COMPLETADA";
        }
        return value + "% COMPLETADO";
      }
      return null;
    }
}

/*
 * Transform number in gender
 *
 * Usage:
 *   value | Gender
 * Example:
 *   {{ 0 |  Gender }}
 *   formats to: "Varón"
 *   {{ 1 |  Gender }}
 *   formats to: "Mujer"
*/
@Pipe({name: 'Gender'})
export class GenderPipe implements PipeTransform {
    transform(value:number) : string {
      if (value === 0){
          return "Varón";
      }
      return "Mujer";
    }
}

/*
 * Format goal message
 *
 * Usage:
 *   goal | GoalName
 * Example:
 *   {{ { id: 2, student_id: 2, type: 1, progress: 50, campo_metaX: 10, campo_metaY: 0} |  GoalName }}
 *   formats to: "Adelgazar 10 Kg"
 *   {{ null |  GoalName }}
 *   formats to: "Sin meta asignada"
*/

@Pipe({name: 'GoalName'})
export class GoalNamePipe implements PipeTransform {

    transform(goal:Goal) : string {
      if (goal === null){
        return "Sin meta asignada";
      }
      return this.getGoalDef(goal);
    }

    /*
     *  Metodo que dada una meta, la devuelves decodificada en un String
     *  Ver tipos en goal.ts
    */

    private getGoalDef(goal: Goal){
        //["perder peso","ganar musculo", "ganar resistencia" , "trabajar especificamente", "mejorar en", "otra"];
      switch (goal.type) {
        case 0:
          return "Perder " + goal.campo_metaX + " de peso";
        case 1:
          return "Ganar masa muscular aumentado " + goal.campo_metaX;
        case 2:
          return "Ganar resistencia corriendo aproximadamente " + goal.campo_metaX ;
        case 3:
          return "Trabajar específicamente la " + goal.campo_metaX + " del cuerpo";
        case 4:
          return "Mejorar en "+goal.campo_metaX;
        case 5:
          return goal.campo_metaX;
        default:
          console.log("Meta corrupta");
          return "Meta no válida"
      }
    }

}
