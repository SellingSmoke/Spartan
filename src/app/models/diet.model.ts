export interface IDiet {
  id: number;
  id_trainer: number;
  name: string;
  description: string;
  notes:string;
  matrix: string[][];
}

export class Diet implements IDiet{
  id: number;
  id_trainer: number;
  name: string;
  description: string;
  notes:string;
  matrix: string[][];

  constructor(id_trainer:number, name:string, description:string){
    this.id = -1;
    this.id_trainer = id_trainer;
    this.name = name;
    this.description = description;
    this.notes = "Sin anotaciones"
    this.matrix = [
      /** Lunes     */ [" Desayunos", "Comida", "Merienda", "Cena"],
      /** Martes    */ [" Desayunos", "Comida", "Merienda", "Cena"],
      /** Miercoles */ [" Desayunos", "Comida", "Merienda", "Cena"],
      /** Jueves    */ [" Desayunos", "Comida", "Merienda", "Cena"],
      /** Viernes   */ [" Desayunos", "Comida", "Merienda", "Cena"],
      /** Sabado    */ [" Desayunos", "Comida", "Merienda", "Cena"],
      /** Domingo   */ [" Desayunos", "Comida", "Merienda", "Cena"]
    ];
  }
}
//
// var MATRIX1 : [
//   /** Lunes     */ [" Desayunos", "Comida", "Merienda", "Cena"],
//   /** Martes    */ [" Desayunos", "Comida", "Merienda", "Cena"],
//   /** Miercoles */ [" Desayunos", "Comida", "Merienda", "Cena"],
//   /** Jueves    */ [" Desayunos", "Comida", "Merienda", "Cena"],
//   /** Viernes   */ [" Desayunos", "Comida", "Merienda", "Cena"],
//   /** Sabado    */ [" Desayunos", "Comida", "Merienda", "Cena"],
//   /** Domingo   */ [" Desayunos", "Comida", "Merienda", "Cena"]
// ];
//
// var MATRIX2 : [
//   /** Desayunos     */ ["Desayuno ",
//                         "Desayuno ",
//                         "Desayuno ",
//                         "Desayuno ",
//                         "Desayuno ",
//                         "Desayuno ",
//                         "Desayuno "],
//   /** Comidas    */     ["Comida",
//                          "Comida",
//                          "Comida",
//                          "Comida",
//                          "Comida",
//                          "Comida",
//                          "Comida"],
//   /** Comidas */      ["Merienda",
//                          "Merienda",
//                          "Merienda",
//                          "Merienda",
//                          "Merienda",
//                          "Merienda",
//                          "Merienda"],
//   /** Cenas    */       ["Cena",
//                          "Cena",
//                          "Cena",
//                          "Cena",
//                          "Cena",
//                          "Cena",
//                          "Cena"]
// ];
