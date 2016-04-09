export interface Goal {

  id: number;             // ID de la Meta
  id_alumno: number;      // ID del alumno al que pertenece la meta
  type: number;
  // Tipo de meta:
  // -> 1 Adelgazar X Kg
  // -> 2 Ganar X Kg
  // -> 3 Recorrer X Km en Y minutos
  // -> 4 Levantar X Kg en Y modalidad

  campo_metaX: number;    // Parametro X del tipo (Kg,Km)
  campo_metaY: number;    // Parametro Y del tipo (Minutos, Modalidad)

  // Modalidades:
  // -> 1 Pecho
  // -> 2 Pierna
  // -> 3 ... (Por completar)

}
