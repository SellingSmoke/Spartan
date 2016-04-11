import { Goal } from './dataTypes/goal';
import { Task } from './dataTypes/task';
import { Student } from './students/student';
import { Diet } from './diets/diet';

import { Alumno } from './dataTypes/alumno'; // Por borrar

// Base de datos simulada

export var STUDENTS: Student[] = [
  { id: 1, name: "Michel", lastname:"Maes Bermejo",email: "michel.maes95@gmail.com", gender:"Varón", age: 20, registration_date: "17/1/2016", goal: { id: 1, student_id: 1, type: 3, campo_metaX: 30, campo_metaY: 120, diet_id: 1}},
  { id: 2, name: "Pablo", lastname:"Fuente Pérez",email: "michel.maes95@gmail.com", gender:"Varón", age: 20, registration_date: "17/1/2016", goal: { id: 2, student_id: 2, type: 1, campo_metaX: 10, campo_metaY: 0}},
  { id: 3, name: "Enrique", lastname:"García Galán",email: "michel.maes95@gmail.com", gender:"Varón", age: 20, registration_date: "17/1/2016", goal: {id: 3, student_id: 3, type: 2, campo_metaX: 10, campo_metaY: 0}},
  { id: 4, name: "Sergio", lastname:"Pérez Peló",email: "michel.maes95@gmail.com", gender:"Varón", age: 20, registration_date: "17/1/2016", goal: { id: 4, student_id: 4, type: 4, campo_metaX: 30, campo_metaY: 2}},
  { id: 5, name: "Uno muy malo", lastname:"Maes",email: "michel.maes95@gmail.com", gender:"Varón", age: 20, registration_date: "17/1/2016", goal: { id: 5, student_id: 5, type: 4, campo_metaX: 10, campo_metaY: 1}},
  { id: 6, name: "Otro mas malo aun", lastname:"Maes",email: "michel.maes95@gmail.com", gender:"Mujer", age: 20, registration_date: "17/1/2016", goal: null}
];



export var TASKS: Task[] = [
  { id: 1, name: "Repeticiones", id_meta: 4, description: "Esta tarea hay que hacerla asi", type: 2, objective1:15, format1:"repeticiones", result1: 10, objective2:40, format2:"Kg", result2: 35 },
  { id: 2, name: "Recorrido", id_meta: 1, description: "Esta tarea hay que hacerla de este modo", type: 1, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 }
];

export var DIETS: Diet[] = [
  { id: 1, id_trainer: 1, name: "Dieta para perder peso",  description: "Descripcion de la dieta",
    matrix:[           /**                            DESAYUNO                                  |                         COMIDA                        |      MERIENDA      |                                  CENA                                 |
      /** Lunes     */ [" Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "Menestra de verduras - Conejo al tomillo - 1 manzana", "1 yogur desnatado", "Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
      /** Martes    */ [" Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "Menestra de verduras - Conejo al tomillo - 1 manzana", "1 yogur desnatado", "Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
      /** Miercoles */ [" Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "Menestra de verduras - Conejo al tomillo - 1 manzana", "1 yogur desnatado", "Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
      /** Jueves    */ [" Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "Menestra de verduras - Conejo al tomillo - 1 manzana", "1 yogur desnatado", "Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
      /** Viernes   */ [" Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "Menestra de verduras - Conejo al tomillo - 1 manzana", "1 yogur desnatado", "Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
      /** Sabado    */ [" Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "Menestra de verduras - Conejo al tomillo - 1 manzana", "1 yogur desnatado", "Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
      /** Domingo   */ [" Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "Menestra de verduras - Conejo al tomillo - 1 manzana", "1 yogur desnatado", "Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
    ]
  }
];

// Será borrado en un futuro

export var ALUMNOS: Alumno[] = [
  { id: 1, name: "Michel", lastname:"Maes Bermejo", goal: "Perder 5 kg en 2 semanas", gender:"Varón", age: 20, registration_date: "17/1/2016", progreso:35 },
  { id: 2, name: "Pablo", lastname:"Fuente Pérez",goal: "Hacer una dominada completa", gender:"Varón", age: 20, registration_date: "17/1/2016", progreso:15  },
  { id: 3, name: "Enrique", lastname:"García Galán",goal: "Levantar 100 kg en pecho", gender:"Varón", age: 20, registration_date: "17/1/2016", progreso:60  },
  { id: 4, name: "Sergio", lastname:"Pérez Peló",goal: "Ganar 10 kg en 5 semanas", gender:"Varón", age: 20, registration_date: "17/1/2016", progreso:90  },
  { id: 5, name: "Uno muy malo", lastname:"Maes",goal: "No morir de asfixia auto-erótica", gender:"Varón", age: 20, registration_date: "17/1/2016", progreso:100  },
  { id: 6, name: "Otro mas malo aun", lastname:"Maes",goal: "Poder bajar a comprar el pan por las escaleras", gender:"Mujer", age: 20, registration_date: "17/1/2016", progreso:0  }
];

/**export var GOALS: Goal[] = [
  { id: 1, student_id: 1, type: 3, campo_metaX: 30, campo_metaY: 120, diet_id: 1},
  { id: 2, student_id: 2, type: 1, campo_metaX: 10, campo_metaY: 0},
  { id: 3, student_id: 3, type: 2, campo_metaX: 10, campo_metaY: 0},
  { id: 4, student_id: 4, type: 4, campo_metaX: 30, campo_metaY: 2},
  { id: 5, student_id: 5, type: 4, campo_metaX: 10, campo_metaY: 1},
  { id: 6, student_id: 7, type: 3, campo_metaX: 10, campo_metaY: 60}
];*/
