System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BeautifyProgessBarPipe, GenderPipe, GoalNamePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
             * Beautify the progess bar if value is under 20
             *
             * Usage:
             *   value | BeautifyProgessBar
             * Example:
             *   {{ 15 |  BeautifyProgessBar }}
             *   formats to: ""
             *   {{ 65 |  BeautifyProgessBar }}
             *   formats to: "65% COMPLETADO"
             *   {{ 100 | BeautifyProgessBar }}
             *   formats to: "META COMPLETADA"
            */
            BeautifyProgessBarPipe = (function () {
                function BeautifyProgessBarPipe() {
                }
                BeautifyProgessBarPipe.prototype.transform = function (value) {
                    if (value > 20) {
                        if (value == 100) {
                            return "META COMPLETADA";
                        }
                        return value + "% COMPLETADO";
                    }
                    return null;
                };
                BeautifyProgessBarPipe = __decorate([
                    core_1.Pipe({ name: 'BeautifyProgessBar' }), 
                    __metadata('design:paramtypes', [])
                ], BeautifyProgessBarPipe);
                return BeautifyProgessBarPipe;
            })();
            exports_1("BeautifyProgessBarPipe", BeautifyProgessBarPipe);
            /*
             * Transform number in gender
             *
             * Usage:
             *   value | Gender
             * Example:
             *   {{ 0 |  Gender }}
             *   formats to: "Varón"
             *   {{ 1 |  Gender }}
             *   formats to: "Mujer"
            */
            GenderPipe = (function () {
                function GenderPipe() {
                }
                GenderPipe.prototype.transform = function (value) {
                    if (value === 0) {
                        return "Varón";
                    }
                    return "Mujer";
                };
                GenderPipe = __decorate([
                    core_1.Pipe({ name: 'Gender' }), 
                    __metadata('design:paramtypes', [])
                ], GenderPipe);
                return GenderPipe;
            })();
            exports_1("GenderPipe", GenderPipe);
            /*
             * Format goal message
             *
             * Usage:
             *   goal | GoalName
             * Example:
             *   {{ { id: 2, student_id: 2, type: 1, progress: 50, campo_metaX: 10, campo_metaY: 0} |  GoalName }}
             *   formats to: "Adelgazar 10 Kg"
             *   {{ null |  GoalName }}
             *   formats to: "Sin meta asignada"
            */
            GoalNamePipe = (function () {
                function GoalNamePipe() {
                }
                GoalNamePipe.prototype.transform = function (goal) {
                    if (goal === null) {
                        return "Sin meta asignada";
                    }
                    return this.getGoalDef(goal);
                };
                /*
                 *  Metodo que dada una meta, la devuelves decodificada en un String
                 *  Ver tipos en goal.ts
                */
                GoalNamePipe.prototype.getGoalDef = function (goal) {
                    //["perder peso","ganar musculo", "ganar resistencia" , "trabajar especificamente", "mejorar en", "otra"];
                    switch (goal.type) {
                        case 0:
                            return "Perder " + goal.campo_metaX + " de peso";
                        case 1:
                            return "Ganar masa muscular aumentado " + goal.campo_metaX;
                        case 2:
                            return "Ganar resistencia corriendo aproximadamente " + goal.campo_metaX;
                        case 3:
                            return "Trabajar específicamente la " + goal.campo_metaX + " del cuerpo";
                        case 4:
                            return "Mejorar en " + goal.campo_metaX;
                        case 5:
                            return goal.campo_metaX;
                        default:
                            console.log("Meta corrupta");
                            return "Meta no válida";
                    }
                };
                GoalNamePipe = __decorate([
                    core_1.Pipe({ name: 'GoalName' }), 
                    __metadata('design:paramtypes', [])
                ], GoalNamePipe);
                return GoalNamePipe;
            })();
            exports_1("GoalNamePipe", GoalNamePipe);
        }
    }
});
//# sourceMappingURL=../../../../app/pipes/student-pipes.pipe.js.map