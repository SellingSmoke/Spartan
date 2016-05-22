System.register([], function(exports_1) {
    var Diet;
    return {
        setters:[],
        execute: function() {
            Diet = (function () {
                function Diet(id_trainer, name, description) {
                    this.id = -1;
                    this.id_trainer = id_trainer;
                    this.name = name;
                    this.description = description;
                    this.notes = "Sin anotaciones";
                    this.matrix = [
                        /** Lunes     */ ["", "", "", ""],
                        /** Martes    */ ["", "", "", ""],
                        /** Miercoles */ ["", "", "", ""],
                        /** Jueves    */ ["", "", "", ""],
                        /** Viernes   */ ["", "", "", ""],
                        /** Sabado    */ ["", "", "", ""],
                        /** Domingo   */ ["", "", "", ""]
                    ];
                    // this.matrix = [
                    //   ["","","","","","",""],
                    //   ["","","","","","",""],
                    //   ["","","","","","",""],
                    //   ["","","","","","",""]
                    // ];
                }
                return Diet;
            })();
            exports_1("Diet", Diet);
        }
    }
});
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
//   /**      */ [" ",
//                         " ",
//                         " ",
//                         " ",
//                         " ",
//                         " ",
//                         " "],
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
//# sourceMappingURL=../../../../app/models/diet.model.js.map