System.register(['angular2/core', '../../models/diet.model', '../../pipes/diet-pipes.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, diet_model_1, diet_pipes_pipe_1;
    var Diets;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (diet_model_1_1) {
                diet_model_1 = diet_model_1_1;
            },
            function (diet_pipes_pipe_1_1) {
                diet_pipes_pipe_1 = diet_pipes_pipe_1_1;
            }],
        execute: function() {
            Diets = (function () {
                /**
                    Prioridad 1
                */
                function Diets() {
                    this.setDay(new Date().getDay() + 1);
                    this.edit_mode = false;
                    this.rol = localStorage.getItem("rol") === "1";
                }
                /**
                    Al iniciarse el componente
                    Prioridad 2
                */
                Diets.prototype.ngOnInit = function () {
                    if (!this.diet) {
                        this.diet = new diet_model_1.Diet(1, "", "");
                    }
                };
                /**
                    Al iniciarse el componente
                    Prioridad 3
                */
                Diets.prototype.ngAfterViewInit = function () {
                    this.hideColumns(this.day);
                };
                /**
                    Oculta todas las columnas menos la del dia que le pasas
                */
                Diets.prototype.hideColumns = function (day) {
                    this.setDay(day);
                    for (var n = 1; n <= 8; n++) {
                        if (n != this.day) {
                            //jQuery('table#tabla-dieta thead th:eq('+n+')').hide();						// Ocultamos la cabecera de las columas
                            jQuery('table#tabla-dieta tbody td:nth-child(' + (n + 1) + ')').hide(); // Ocultamos todo los detalles de esa columna
                        }
                        else {
                            //jQuery('table#tabla-dieta thead th:eq('+n+')').show();						// Mostramos la cabecera
                            jQuery('table#tabla-dieta tbody td:nth-child(' + (n + 1) + ')').show(); // Mostramos el contenido
                        }
                    }
                };
                /**
                     Cambiar el dia de la semana
                */
                Diets.prototype.setDay = function (day) {
                    if (day < 1) {
                        day = 6;
                    }
                    else if (day > 7) {
                        day = 1;
                    }
                    this.day = day;
                    this.day_s = Diets.days[day - 1];
                };
                /**
                     Cambiar el modo de edición
                */
                Diets.prototype.editMode = function (save) {
                    if (save) {
                    }
                    this.edit_mode = !this.edit_mode;
                };
                Diets.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', diet_model_1.Diet)
                ], Diets.prototype, "diet", void 0);
                Diets = __decorate([
                    core_1.Component({
                        selector: 'diets',
                        templateUrl: 'app/directives/diets/diets.html',
                        styleUrls: ['app/directives/diets/diets.css'],
                        pipes: [diet_pipes_pipe_1.ShowFoodPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Diets);
                return Diets;
            })();
            exports_1("Diets", Diets);
            ;
        }
    }
});
//# sourceMappingURL=../../../../../app/directives/diets/diets.js.map