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
      /** Lunes     */ ["", "", "", ""],
      /** Martes    */ ["", "", "", ""],
      /** Miercoles */ ["", "", "", ""],
      /** Jueves    */ ["", "", "", ""],
      /** Viernes   */ ["", "", "", ""],
      /** Sabado    */ ["", "", "", ""],
      /** Domingo   */ ["", "", "", ""]
    ];
  }
}
//
// var MATRIX1 : [
//   /** Lunes     */ ["", "", "", ""],
//   /** Martes    */ ["", "", "", ""],
//   /** Miercoles */ ["", "", "", ""],
//   /** Jueves    */ ["", "", "", ""],
//   /** Viernes   */ ["", "", "", ""],
//   /** Sabado    */ ["", "", "", ""],
//   /** Domingo   */ ["", "", "", ""]
// ];
//
// var MATRIX2 : [
//   /**      */ ["Desayuno ",
//                         "Desayuno ",
//                         "Desayuno ",
//                         "Desayuno ",
//                         "Desayuno ",
//                         "Desayuno ",
//                         "Desayuno "],
//   /** s    */     ["",
//                          "",
//                          "",
//                          "",
//                          "",
//                          "",
//                          ""],
//   /** s */      ["",
//                          "",
//                          "",
//                          "",
//                          "",
//                          "",
//                          ""],
//   /** s    */       ["",
//                          "",
//                          "",
//                          "",
//                          "",
//                          "",
//                          ""]
// ];
