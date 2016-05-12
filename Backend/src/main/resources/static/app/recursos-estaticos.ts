import { IGoal } from './models/goal.model';
import { Task, ITask } from './models/task.model';
import { Trainer } from './models/trainer.model';
import { Student } from './models/student.model';
import { Diet } from './models/diet.model';

// Base de datos simulada

export var STUDENTS: Student[] = [
  { id: 1, name: "Michel", lastname:"Maes Bermejo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
      goal: { id: 1, student_id: 1, type: 3, progress: 70, campo_metaX: "parte superior",
        diet: { id: 1, id_trainer: 1, name: "Dieta para perder peso",  description: "Esta dieta controlad las calorias sin descuidar vitaminas y proteinas", notes: "No apta para celiacos",
          matrix:[           /**                            DESAYUNO                                    |                         COMIDA                             |      MERIENDA        |                                  CENA                                   |
            /** Domingo   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 clementina", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Lunes     */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Martes    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 pera", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Miercoles */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 platano", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Jueves    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 kiwi", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Viernes   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 2 mandarina", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Sabado    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 naranja", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"]

          ]
        }, acepted: true, canceled:false,
        comments: [{id: 1, rol: 2, date: 1461111590589, comment: "Oye, y esto ... como se hace", read: true},
                   {id: 2, rol: 1, date: 1461111590589, comment: "Mira que eres malo, esto se hace asi asi y asi", read: false},
                   {id: 3, rol: 2, date: 1461111590589, comment: "Sorry trainer", read: false},
                   {id: 4, rol: 2, date: 1461111590589, comment: "La proxima lo haré mejor", read: false}],
        tasks: [{ id: 1, name: "Repeticiones", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla asi", type: 1, objective1:15, format1:"repeticiones", result1: 10, objective2:40, format2:"Kg", result2: 35 },
                { id: 2, name: "Recorrido", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla pues de esta manera", type: 0, objective1:5, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
                { id: 3, name: "Recorrido 1", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla de esta otra", type: 0, objective1:10, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:0 },
                { id: 4, name: "Repeticiones 1", goal_id: 1, status: 0, description: "Y esta como te dé la real gana", type: 1, objective1:20, format1:"repeticiones", result1: 0, objective2:20, format2:"Kg", result2:18 },
                ]}},
  { id: 2, name: "Pablo", lastname:"Fuente Pérez",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
      goal: { id: 2, student_id: 2, type: 1, progress: 50, campo_metaX: "10kg", acepted: true, canceled:false,
        diet: null,
        comments: [],
        tasks: [{ id: 5, name: "Recorrido 2", goal_id: 2, status: 1, description: "Te queda esta también", type: 0, objective1:100, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
          { id: 6, name: "Repeticiones 2", goal_id: 2, status: 2, description: "Esta tarea hay que hacerla de este modo FIN", type: 1, objective1:12, format1:"Kg", result1: 0, objective2:20, format2:"Repeticiones", result2:18 }
        ]}},
  { id: 3, name: "Enrique", lastname:"García Galán",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
      goal: {id: 3, student_id: 3, type: 2, progress: 100, campo_metaX: "10km", acepted: true, canceled:false,
        diet: null,
        comments: [],
        tasks: []}},
  { id: 4, name: "Sergio", lastname:"Pérez Peló",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
      goal: { id: 4, student_id: 4, type: 4, progress: 30, campo_metaX:"fútbol", acepted: true, canceled:false,
        diet: null,
        comments: [],
        tasks: []}},
  { id: 5, name: "Paco", lastname:"De Lucía",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
      goal: { id: 5, student_id: 5, type: 5, progress: 10, campo_metaX: "Adelgazar 10 kg", acepted: true, canceled:false,
        diet: null,
        comments: [],
        tasks: []}},
  { id: 6, name: "Laura", lastname:"Pérez",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
      goal: null},
  { id: 7, name: "Maria", lastname:"García",email: "michel.maes95@gmail.com", gender:1, age: 20, registration_date: 1461111590589,
      goal: { id: 7, student_id: 7, type: 4, progress: 0, campo_metaX: "golf", acepted: false, canceled:false,
        diet: null,
        comments: [],
        tasks: []}}
];


export var TRAINERS: Trainer[] = [
  {id: 1, name: "Mica", lastname:"Gallego",email: "michel.maes95@gmail.com", gender:0, age: 35, registration_date: 1461111590589,
    students: [
      { id: 1, name: "Michel", lastname:"Maes Bermejo",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
          goal: { id: 1, student_id: 1, type: 3, progress: 70, campo_metaX: "parte superior",
            diet: { id: 1, id_trainer: 1, name: "Dieta para perder peso",  description: "Esta dieta controlad las calorias sin descuidar vitaminas y proteinas", notes: "No apta para celiacos",
              matrix:[           /**                            DESAYUNO                                    |                         COMIDA                             |      MERIENDA        |                                  CENA                                   |
                /** Domingo   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 clementina", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
                /** Lunes     */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
                /** Martes    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 pera", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
                /** Miercoles */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 platano", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
                /** Jueves    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 kiwi", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
                /** Viernes   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 2 mandarina", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
                /** Sabado    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 naranja", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"]

              ]
            }, acepted: true, canceled:false,
            comments: [{id: 1, rol: 2, date: 1461111590589, comment: "Oye, y esto ... como se hace", read: true},
                       {id: 2, rol: 1, date: 1461111590589, comment: "Mira que eres malo, esto se hace asi asi y asi", read: false}],
            tasks: [{ id: 1, name: "Repeticiones", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla asi", type: 1, objective1:15, format1:"repeticiones", result1: 10, objective2:40, format2:"Kg", result2: 35 },
                    { id: 2, name: "Recorrido", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla pues de esta manera", type: 0, objective1:5, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
                    { id: 3, name: "Recorrido 1", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla de esta otra", type: 0, objective1:10, format1:"Km", result1: 0, objective2:20, format2:"Minutos", result2:0 },
                    { id: 4, name: "Repeticiones 1", goal_id: 1, status: 0, description: "Y esta como te dé la real gana", type: 1, objective1:20, format1:"Kg", result1: 0, objective2:20, format2:"Repeticiones", result2:18 },
                    ]}},
      { id: 2, name: "Pablo", lastname:"Fuente Pérez",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
          goal: { id: 2, student_id: 2, type: 1, progress: 50, campo_metaX: "10kg", acepted: true, canceled:false,
            diet: null,
            comments: [],
            tasks: [{ id: 5, name: "Recorrido 2", goal_id: 2, status: 1, description: "Te queda esta también", type: 0, objective1:100, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
              { id: 6, name: "Repeticiones 2", goal_id: 2, status: 2, description: "Esta tarea hay que hacerla de este modo FIN", type: 1, objective1:12, format1:"Kg", result1: 0, objective2:20, format2:"Repeticiones", result2:18 }
            ]}},
      { id: 3, name: "Enrique", lastname:"García Galán",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
          goal: {id: 3, student_id: 3, type: 2, progress: 100, campo_metaX: "10km", acepted: true, canceled:false,
            diet: null,
            comments: [],
            tasks: []}},
      { id: 4, name: "Sergio", lastname:"Pérez Peló",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
          goal: { id: 4, student_id: 4, type: 4, progress: 30, campo_metaX:"fútbol", acepted: true, canceled:false,
            diet: null,
            comments: [],
            tasks: []}}]
  },
  {id: 2, name: "Carlos", lastname:"Cuesta",email: "michel.maes95@gmail.com", gender:0, age: 35, registration_date: 1461111590589,
    students: [
      { id: 5, name: "Paco", lastname:"De Lucía",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
          goal: { id: 5, student_id: 5, type: 5, progress: 10, campo_metaX: "Adelgazar 10 kg", acepted: true, canceled:false,
            diet: null,
            comments: [],
            tasks: []}},
      { id: 6, name: "Laura", lastname:"Pérez",email: "michel.maes95@gmail.com", gender:0, age: 20, registration_date: 1461111590589,
          goal: null},
      { id: 7, name: "Maria", lastname:"García",email: "michel.maes95@gmail.com", gender:1, age: 20, registration_date: 1461111590589,
          goal: { id: 7, student_id: 7, type: 4, progress: 0, campo_metaX: "golf", acepted: false, canceled:false,
            diet: null,
            comments: [],
            tasks: []}}]
  }
]

export var GOALS: IGoal[] = [
  { id: 1, student_id: 1, type: 4, progress: 0, campo_metaX: "golf", acepted: false, canceled:false,
    diet: null,
    comments: [],
    tasks: []},
  { id: 2, student_id: 1, type: 1, progress: 100, campo_metaX: "10kg", acepted: true, canceled:false,
    diet: null,
    comments: [],
    tasks: [{ id: 5, name: "Recorrido 2", goal_id: 2, status: 1, description: "Te queda esta también", type: 0, objective1:100, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
      { id: 6, name: "Repeticiones 2", goal_id: 2, status: 2, description: "Esta tarea hay que hacerla de este modo FIN", type: 1, objective1:12, format1:"Kg", result1: 0, objective2:20, format2:"Repeticiones", result2:18 }
    ]},
  {id: 3, student_id: 2, type: 2, progress: 100, campo_metaX: "10km", acepted: true, canceled:false,
    diet: null,
    comments: [],
    tasks: []},
  { id: 4, student_id: 2, type: 5, progress: 10, campo_metaX: "Adelgazar 10 kg", acepted: true, canceled:false,
    diet: null,
    comments: [],
    tasks: []},
  { id: 5, student_id: 1, type: 3, progress: 100, campo_metaX: "parte superior",
        diet: { id: 1, id_trainer: 1, name: "Dieta para perder peso",  description: "Esta dieta controlad las calorias sin descuidar vitaminas y proteinas", notes: "No apta para celiacos",
          matrix:[           /**                            DESAYUNO                                    |                         COMIDA                             |      MERIENDA        |                                  CENA                                   |
            /** Domingo   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 clementina", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Lunes     */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Martes    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 pera", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Miercoles */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 platano", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Jueves    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 kiwi", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Viernes   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 2 mandarina", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
            /** Sabado    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 naranja", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"]

          ]
        }, acepted: true, canceled:false,
        comments: [{id: 1, rol: 2, date: 1461111590589, comment: "Oye, y esto ... como se hace", read: true},
                   {id: 2, rol: 1, date: 1461111590589, comment: "Mira que eres malo, esto se hace asi asi y asi", read: false}],
        tasks: [{ id: 1, name: "Repeticiones", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla asi", type: 1, objective1:15, format1:"repeticiones", result1: 10, objective2:40, format2:"Kg", result2: 35 },
                { id: 2, name: "Recorrido", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla pues de esta manera", type: 0, objective1:5, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
                { id: 3, name: "Recorrido 1", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla de esta otra", type: 0, objective1:10, format1:"Km", result1: 0, objective2:20, format2:"Minutos", result2:0 },
                { id: 4, name: "Repeticiones 1", goal_id: 1, status: 0, description: "Y esta como te dé la real gana", type: 1, objective1:20, format1:"Kg", result1: 0, objective2:20, format2:"Repeticiones", result2:18 },
      ]},
      { id: 6, student_id: 1, type: 2, progress: 80, campo_metaX: "10kg", acepted: true, canceled:true,
        diet: null,
        comments: [],
        tasks: [{ id: 5, name: "Recorrido 2", goal_id: 2, status: 1, description: "Te queda esta también", type: 0, objective1:100, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
          { id: 6, name: "Repeticiones 2", goal_id: 2, status: 2, description: "Esta tarea hay que hacerla de este modo FIN", type: 1, objective1:12, format1:"Kg", result1: 0, objective2:20, format2:"Repeticiones", result2:18 }
        ]},
]


// export var TASKS: ITask[] = [
//   { id: 1, name: "Repeticiones", goal_id: 4, status: 0, description: "Esta tarea hay que hacerla asi", type: 1, objective1:15, format1:"repeticiones", result1: 10, objective2:40, format2:"Kg", result2: 35 },
//   { id: 2, name: "Recorrido", goal_id: 4, status: 0, description: "Esta tarea hay que hacerla pues de esta manera", type: 0, objective1:5, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
//   { id: 3, name: "Recorrido 1", goal_id: 1, status: 0, description: "Esta tarea hay que hacerla de esta otra", type: 0, objective1:10, format1:"Km", result1: 0, objective2:20, format2:"Minutos", result2:0 },
//   { id: 4, name: "Repeticiones 1", goal_id: 1, status: 0, description: "Y esta como te dé la real gana", type: 1, objective1:20, format1:"Kg", result1: 0, objective2:20, format2:"Repeticiones", result2:18 },
//   { id: 5, name: "Recorrido 2", goal_id: 1, status: 1, description: "Te queda esta también", type: 0, objective1:100, format1:"Km", result1: 0, objective2:20, format2:"minutos", result2:18 },
//   { id: 6, name: "Repeticiones 2", goal_id: 1, status: 2, description: "Esta tarea hay que hacerla de este modo FIN", type: 1, objective1:12, format1:"Kg", result1: 0, objective2:20, format2:"Repeticiones", result2:18 }
// ];

// export var DIETS: Diet[] = [
//   { id: 1, id_trainer: 1, name: "Dieta para perder peso",  description: "Esta dieta controlad las calorias sin descuidar vitaminas y proteinas", notes: "No apta para celiacos",
//     matrix:[           /**                            DESAYUNO                                  |                         COMIDA                        |      MERIENDA      |                                  CENA                                 |
//       /** Domingo   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 clementina", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Lunes     */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Martes    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 pera", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Miercoles */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 platano", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Jueves    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 kiwi", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Viernes   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 2 mandarina", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Sabado    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 naranja", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"]
//
//     ]
//   },
//   { id: 2, id_trainer: 1, name: "Dieta para perder peso",  description: "Esta dieta controlad las calorias sin descuidar vitaminas y proteinas", notes: "No apta para celiacos",
//     matrix:[           /**                            DESAYUNO                                  |                         COMIDA                        |      MERIENDA      |                                  CENA                                 |
//       /** Domingo   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Lunes     */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Martes    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Miercoles */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Jueves    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Viernes   */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//       /** Sabado    */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja", "- Menestra de verduras - Conejo al tomillo - 1 manzana", "- 1 yogur desnatado", "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"]
//     ]
//   }
// ];

// { id: 1, id_trainer: 1, name: "Dieta para perder peso",  description: "Descripcion de la dieta",
//   matrix:[
//     /** Desayunos     */ [" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranjaS",
//                           " - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranjaS",
//                           " - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranjaS",
//                           " - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranjaS",
//                           " - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranjaS",
//                           " - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranjaS",
//                           " - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranjaS"],
//     /** Comidas    */     ["- Menestra de verduras - Conejo al tomillo - 1 manzana",
//                            "- Menestra de verduras - Conejo al tomillo - 1 manzana",
//                            "- Menestra de verduras - Conejo al tomillo - 1 manzana",
//                            "- Menestra de verduras - Conejo al tomillo - 1 manzana",
//                            "- Menestra de verduras - Conejo al tomillo - 1 manzana",
//                            "- Menestra de verduras - Conejo al tomillo - 1 manzana",
//                            "- Menestra de verduras - Conejo al tomillo - 1 manzana",],
//     /** Meriendas */      ["- 1 yogur desnatado",
//                            "- 1 yogur desnatado",
//                            "- 1 yogur desnatado",
//                            "- 1 yogur desnatado",
//                            "- 1 yogur desnatado",
//                            "- 1 yogur desnatado",
//                            "- 1 yogur desnatado"],
//     /** Cenas    */       ["- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor",
//                            "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor",
//                            "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor",
//                            "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor",
//                            "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor",
//                            "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor",
//                            "- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor"],
//   ]
// },
