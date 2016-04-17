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
      switch (goal.type) {
        case 1:
          return "Adelgazar " + goal.campo_metaX + " Kg";
        case 2:
          return "Ganar " + goal.campo_metaX + " Kg";
        case 3:
          return "Recorrer " + goal.campo_metaX + " Km en " + goal.campo_metaY + " minutos";
        case 4:
          return "Levantar " + goal.campo_metaX + " Kg " + this.getModalidad(goal.campo_metaY);
        default:
          console.log("Meta corrupta");
          return "Meta no válida"
      }
    }

    /*
     *  Metodo que dada una modalidad de meta, devuelve un String con la modalidad decodificada
     *  Ver modalidad en goal.ts
    */

    private getModalidad(modalidad: number){
      switch (modalidad) {
        case 1:
          return "de pecho";
        case 2:
          return "de pierna";
        case 3:
          return "de brazo";
        default:
          return "modalidad no registrada";
      }
    }

}
