export interface Diet {
  id?: number;
  trainerId: number;
  name: string;
  description: string;
  notes:string;
  matrix:string;
}

export function newDiet(id_trainer:number):Diet{
  var diet = {
      trainerId: id_trainer,
      name: "",
      description: "",
      notes: "",
      matrix:""
  }
  return diet;
}
