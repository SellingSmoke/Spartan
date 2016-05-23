export interface Diet {
  id?: number;
  trainerId: number;
  name: string;
  description: string;
  notes:string;
  matrix:string;
}

// export class Diet implements IDiet{
//   id: number;
//   name: string;
//   description: string;
//   notes:string;
//   matrix:string;
//
//   constructor(name:string, description:string){
//     this.name = name;
//     this.description = description;
//     this.notes = "Sin anotaciones";
//     this.matrix = "";
//   }
// }
