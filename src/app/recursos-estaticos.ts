import { Goal } from './models/goal';
import { Task, ITask } from './models/task';
import { Trainer } from './models/trainer';
import { Student } from './models/student';
import { Diet } from './models/diet';

// Base de datos simulada

export var STUDENTS: Student[] = [
  { id: 1, name: "Michel", lastname:"Maes Bermejo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 1, student_id: 1, type: 3, progress: 70, campo_metaX: "parte superior", diet_id: 1, acepted: true,
    comments: [{id: 1, rol: 2, date: 1461111590589, comment: "Oye, y esto ... como se hace", read: true}, {id: 2, rol: 1, date: 1461111590589, comment: "Mira que eres malo, esto se hace asi asi y asi", read: false}]}},
  { id: 2, name: "Pablo", lastname:"Fuente Pérez",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 2, student_id: 2, type: 1, progress: 50, campo_metaX: "10kg", acepted: false, comments: []}},
  { id: 3, name: "Enrique", lastname:"García Galán",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: {id: 3, student_id: 3, type: 2, progress: 100, campo_metaX: "10km", acepted: true, comments: []}},
  { id: 4, name: "Sergio", lastname:"Pérez Peló",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 4, student_id: 4, type: 4, progress: 30, campo_metaX:"fútbol", acepted: true, comments: []}},
  { id: 5, name: "Paco", lastname:"Bar Born",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 5, student_id: 5, type: 5, progress: 10, campo_metaX: "Tener el culo de Kimmy", acepted: true, comments: []}},
  { id: 6, name: "Alguien", lastname:"Muy malo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: null},
  { id: 7, name: "Efigencia", lastname:"Bonifacia",email: "michel.maes95@gmail.com", gender:1, age: 20, registration_date: "17/1/2016", goal: { id: 7, student_id: 7, type: 4, progress: 90, campo_metaX: "golf", acepted: true, comments: []}}
];

export var TASKS: ITask[] = [
  { id: 1, name: "Repeticiones", goal_id: 4, completed: false, description: "Esta tarea hay que hacerla asi", type: 1, objective1:15, format1:"repeticiones", result1: 10, objective2:40, format2:"Kg", result2: 35 },
  { id: 2, name: "Recorrido", goal_id: 4, completed: false, description: "Esta tarea hay que hacerla pues de esta manera", type: 0, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 },
  { id: 3, name: "Recorrido 1", goal_id: 1, completed: false, description: "Esta tarea hay que hacerla de esta otra", type: 0, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 },
  { id: 4, name: "Repeticiones 1", goal_id: 1, completed: false, description: "Y esta como te dé la real gana", type: 1, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 },
  { id: 5, name: "Recorrido 2", goal_id: 1, completed: true, description: "Te queda esta también", type: 0, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 },
  { id: 6, name: "Repeticiones 2", goal_id: 1, completed: false, description: "Esta tarea hay que hacerla de este modo FIN", type: 1, objective1:5, format1:"Km", result1: 5, objective2:20, format2:"minutos", result2:18 }
];

export var TRAINERS: Trainer[] = [
  {id: 1, name: "Mica", lastname:"Gallego",email: "michel.maes95@gmail.com", gender:0, age: 35, registration_date: "17/1/2016",
    students: [
      { id: 1, name: "Michel", lastname:"Maes Bermejo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 1, student_id: 1, type: 3, progress: 70, campo_metaX: "parte superior", diet_id: 1, acepted: true, comments: []}},
      { id: 2, name: "Pablo", lastname:"Fuente Pérez",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 2, student_id: 2, type: 1, progress: 50, campo_metaX: "10kg", acepted: true, comments: []}},
      { id: 3, name: "Enrique", lastname:"García Galán",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: {id: 3, student_id: 3, type: 2, progress: 100, campo_metaX: "10km", acepted: true, comments: []}},
      { id: 4, name: "Sergio", lastname:"Pérez Peló",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 4, student_id: 4, type: 4, progress: 30, campo_metaX:"fútbol", acepted: true, comments: []}},
    ]
  },
  {id: 2, name: "Carlos", lastname:"Cuesta",email: "michel.maes95@gmail.com", gender:0, age: 35, registration_date: "17/1/2016",
    students: [
      { id: 5, name: "Paco", lastname:"Bar Born",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: { id: 5, student_id: 5, type: 5, progress: 10, campo_metaX: "Tener el culo de Kimmy", acepted: true, comments: []}},
      { id: 6, name: "Alguien", lastname:"Muy malo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: "17/1/2016", goal: null},
      { id: 7, name: "Efigencia", lastname:"Bonifacia",email: "michel.maes95@gmail.com", gender:1, age: 20, registration_date: "17/1/2016", goal: { id: 7, student_id: 7, type: 4, progress: 90, campo_metaX: "golf", acepted: true, comments: []}}
    ]
  }
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
