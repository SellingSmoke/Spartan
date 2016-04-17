import { Goal } from './dataTypes/goal';
import { Task } from './dataTypes/task';
import { Trainer } from './dataTypes/trainer';
import { Student } from './students/student';
import { Diet } from './diets/diet';

// Base de datos simulada

export var STUDENTS: Student[] = [
  { id: 1, name: "Michel", lastname:"Maes Bermejo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 1, student_id: 1, type: 3, progress: 70, campo_metaX: 30, campo_metaY: 120, diet_id: 1}},
  { id: 2, name: "Pablo", lastname:"Fuente Pérez",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 2, student_id: 2, type: 1, progress: 50, campo_metaX: 10, campo_metaY: 0}},
  { id: 3, name: "Enrique", lastname:"García Galán",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: {id: 3, student_id: 3, type: 2, progress: 100, campo_metaX: 10, campo_metaY: 0}},
  { id: 4, name: "Sergio", lastname:"Pérez Peló",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 4, student_id: 4, type: 4, progress: 30, campo_metaX: 30, campo_metaY: 2}},
  { id: 5, name: "Paco", lastname:"Bar Born",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 5, student_id: 5, type: 4, progress: 10, campo_metaX: 10, campo_metaY: 1}},
  { id: 6, name: "Alguien", lastname:"Muy malo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: null},
  { id: 7, name: "Efigencia", lastname:"Bonifacia",email: "michel.maes95@gmail.com", gender:1, age: 20, registration_date: "17/1/2016", goal: { id: 5, student_id: 5, type: 4, progress: 90, campo_metaX: 10, campo_metaY: 1}}
];

export var TASKS: Task[] = [
  { id: 1, name: "Repeticiones", goal_id: 4, completed: false, description: "Esta tarea hay que hacerla asi", type: 2, objective1:15, format1:"repeticiones", result1: 10, objective2:40, format2:"Kg", result2: 35 },
  { id: 2, name: "Recorrido", goal_id: 4, completed: false, description: "Esta tarea hay que hacerla pues de esta manera", type: 1, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 },
  { id: 3, name: "Recorrido 1", goal_id: 1, completed: true, description: "Esta tarea hay que hacerla de esta otra", type: 1, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 },
  { id: 4, name: "Repeticiones 1", goal_id: 1, completed: false, description: "Y esta como te dé la real gana", type: 1, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 },
  { id: 5, name: "Recorrido 2", goal_id: 1, completed: true, description: "Te queda esta también", type: 1, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 },
  { id: 6, name: "Repeticiones 2", goal_id: 1, completed: false, description: "Esta tarea hay que hacerla de este modo FIN", type: 1, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 }
];

export var TRAINERS: Trainer[] = [
  {id: 1, name: "Mica", lastname:"Gallego",email: "michel.maes95@gmail.com", gender:0, age: 35, registration_date: "17/1/2016",
    students: [{ id: 1, name: "Michel", lastname:"Maes Bermejo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 1, student_id: 1, type: 3, progress: 70, campo_metaX: 30, campo_metaY: 120, diet_id: 1}},{ id: 2, name: "Pablo", lastname:"Fuente Pérez",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 2, student_id: 2, type: 1, progress: 50, campo_metaX: 10, campo_metaY: 0}}, { id: 3, name: "Enrique", lastname:"García Galán",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: {id: 3, student_id: 3, type: 2, progress: 100, campo_metaX: 10, campo_metaY: 0}}, { id: 4, name: "Sergio", lastname:"Pérez Peló",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 4, student_id: 4, type: 4, progress: 30, campo_metaX: 30, campo_metaY: 2}},]},
  {id: 1, name: "Carlos", lastname:"Cuesta",email: "michel.maes95@gmail.com", gender:0, age: 35, registration_date: "17/1/2016",
    students: [{ id: 5, name: "Paco", lastname:"Bar Born",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 5, student_id: 5, type: 4, progress: 10, campo_metaX: 10, campo_metaY: 1}}, { id: 6, name: "Alguien", lastname:"Muy malo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: null}, { id: 5, name: "Efigencia", lastname:"Bonifacia",email: "michel.maes95@gmail.com", gender:1, age: 20, registration_date: "17/1/2016", goal: { id: 5, student_id: 5, type: 4, progress: 90, campo_metaX: 10, campo_metaY: 1}}]}
]

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
