export interface Goal {

  id: number;             // ID de la Meta
  student_id: number;     // ID del alumno al que pertenece la meta
  type: number;
  // Tipo de meta:
  // -> 1 Adelgazar X Kg
  // -> 2 Ganar X Kg
  // -> 3 Recorrer X Km en Y minutos
  // -> 4 Levantar X Kg en Y modalidad

  campo_metaX: number;    // Parametro X del tipo (Kg,Km)
  campo_metaY: number;    // Parametro Y del tipo (Minutos, Modalidad)

  // Modalidades:
  // -> 0 (Vacio)
  // -> 1 Pecho
  // -> 2 Pierna
  // -> 3 ... (Por completar)

  diet_id?: number;       // Una meta puede o no llevar una dieta asociada

}

/**
    Metodo que dada una meta, la devuelves decodificada en un String
*/

export function getGoalDef(goal: Goal){
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
  }
}

/**
    Metodo que dada una modalidad de meta, devuelve un String con la modalidad decodificada
*/

export function getModalidad(modalidad: number){
  switch (modalidad) {
    case 1:
      return "de pecho";
    case 2:
      return "de pierna";
    case 3:
      return "de brazo";
    default:
      console.log("Modalidad no válida");
      return "modalidad no registrada"
  }
}
