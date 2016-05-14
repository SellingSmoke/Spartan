System.register(['angular2/core', 'angular2/common', "../../models/goal.model", '../card/card'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, goal_model_1, card_1;
    var GoalForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (goal_model_1_1) {
                goal_model_1 = goal_model_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            GoalForm = (function () {
                function GoalForm() {
                    this.newGoal = new core_1.EventEmitter();
                    this.seleccionado = { id: 0, title: " ( ··· ) ", description: null, img: null };
                    this.parametrosExtra = [];
                    this.pesos_elegibles = [{ id: 0, title: "5kg", img: "url('../assets/imagenes/peso.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 1, title: "10kg", img: "url('../assets/imagenes/peso.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 2, title: "15kg", img: "url('../assets/imagenes/peso.jpg') center / cover", icon: "fitness_center", description: null }];
                    this.distancias_elegibles = [{ id: 0, title: "5km", img: "url('../assets/imagenes/distancia.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 1, title: "10km", img: "url('../assets/imagenes/distancia.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 2, title: "15km", img: "url('../assets/imagenes/distancia.jpg') center / cover", icon: "fitness_center", description: null }];
                    this.especificos_elegibles = [{ id: 0, title: "parte superior", img: "url('../assets/imagenes/superior.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 1, title: "parte inferior", img: "url('../assets/imagenes/piernas.jpg') center / cover", icon: "fitness_center", description: null }];
                    this.deportes_elegibles = [{ id: 0, title: "fútbol", img: "url('../assets/imagenes/futbol.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 1, title: "baloncesto", img: "url('../assets/imagenes/balocesto.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 2, title: "tennis", img: "url('../assets/imagenes/tenis.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 3, title: "golf", img: "url('../assets/imagenes/golf.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 4, title: "kick-boxing", img: "url('../assets/imagenes/Kickboxing.jpg') center / cover", icon: "fitness_center", description: null },
                        { id: 5, title: "balonmano", img: "url('../assets/imagenes/balonmano.jpg') center / cover", icon: "fitness_center", description: null }];
                }
                GoalForm.prototype.nuevaSeleccion = function () {
                    this.seleccion = "spartan";
                    this.selecciones = [
                        { id: 0, title: "perder peso", img: "url('../assets/imagenes/perderPeso.jpg') center / cover", icon: "fitness_center", description: "Librate de esos kilos de mas en cuestión de semanas" },
                        { id: 1, title: "ganar masa muscular", icon: "fitness_center", img: "url('../assets/imagenes/ganarMusculo.jpg') center / cover", description: "Deja de ser un tirillas sin doparte, repartiras como el de más" },
                        { id: 2, title: "ganar resistencia", icon: "fitness_center", img: "url('../assets/imagenes/resistencia.jpg') center / cover", description: "Para poder bajar las escaleras sin asfixiarte" },
                        { id: 3, title: "trabajar especificamente", icon: "fitness_center", img: "url('../assets/imagenes/trabajoEspecifico.jpg') center / cover", description: "Elije un ejecicio determinado para trabajar una zona específica" },
                        { id: 4, title: "Mejorar en mi deporte", text: "mejorar en", icon: "fitness_center", img: "url('../assets/imagenes/mejorar.jpg') center / cover", description: "Trata de mejorar en tu deporte para rendir al máximo" },
                        { id: 5, title: "Meta propia", text: "otra", icon: "fitness_center", img: "url('../assets/imagenes/otra.jpg') center / cover", description: "Proponos una meta propia, solo tú puedes marcar tus limites" }];
                };
                GoalForm.prototype.noSeleccion = function () {
                    this.seleccion = null;
                };
                GoalForm.prototype.noSeleccionArgumentos = function (seleccion) {
                    this.seleccionado = seleccion;
                    this.seleccion = null;
                    var texto = seleccion.title;
                    if (seleccion.text)
                        texto = seleccion.text;
                    console.log(texto);
                    this.calcular2selector(texto);
                };
                GoalForm.prototype.nuevaSeleccion2 = function () {
                    this.seleccion2 = "spartan";
                };
                GoalForm.prototype.nada = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                };
                GoalForm.prototype.noSeleccion2 = function () {
                    this.seleccion2 = null;
                };
                GoalForm.prototype.noSeleccionArgumentos2 = function (seleccion) {
                    this.seleccionado2 = seleccion.title;
                    this.seleccion2 = null;
                };
                GoalForm.prototype.esOtro = function () {
                    return this.seleccionado !== null && this.seleccionado.text === "otra";
                };
                GoalForm.prototype.calcular2selector = function (seleccion) {
                    switch (seleccion) {
                        case "perder peso":
                            this.frase = "aproximadamente ";
                            this.frase2 = null;
                            this.parametrosExtra = this.pesos_elegibles;
                            this.seleccionado2 = "5 Kg";
                            break;
                        case "ganar masa muscular":
                            this.frase = "aproximadamente ";
                            this.frase2 = null;
                            this.parametrosExtra = this.pesos_elegibles;
                            this.seleccionado2 = "5 Kg";
                            break;
                        case "ganar resistencia":
                            this.frase = "y correr unos";
                            this.frase2 = null;
                            this.parametrosExtra = this.distancias_elegibles;
                            this.seleccionado2 = "5 Km";
                            break;
                        case "trabajar especificamente":
                            this.frase = null;
                            this.frase2 = "del cuerpo";
                            this.parametrosExtra = this.especificos_elegibles;
                            this.seleccionado2 = "parte superior";
                            break;
                        case "mejorar en":
                            this.frase = "un deporte como";
                            this.frase2 = null;
                            this.parametrosExtra = this.deportes_elegibles;
                            this.seleccionado2 = "fútbol";
                            break;
                        case "otra":
                            this.frase = "definida como: ";
                            this.frase2 = null;
                            this.parametrosExtra = null;
                            this.seleccionado2 = "Escribir Aquí";
                            break;
                    }
                };
                GoalForm.prototype.saveGoal = function () {
                    // Declaro variables para dejar claros los cambios, refactoriza como quieras
                    var meta;
                    var indexMeta = this.selecciones.indexOf(this.seleccionado);
                    var campoX = this.seleccionado2; // Parametro X del tipo (Kg,Km)
                    var student_id = 3; // ID del alumno al que pertenece la meta
                    // meta.id = 1; (Lo pone la base de datos)
                    meta = new goal_model_1.Goal(student_id, indexMeta, campoX);
                    console.log(meta);
                    this.newGoal.emit(meta);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], GoalForm.prototype, "newGoal", void 0);
                GoalForm = __decorate([
                    core_1.Component({
                        selector: 'goal-form',
                        styleUrls: ['app/directives/goalForm/goal-form.css'],
                        templateUrl: 'app/directives/goalForm/goal-form.html',
                        directives: [common_1.FORM_DIRECTIVES, card_1.Card]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GoalForm);
                return GoalForm;
            })();
            exports_1("GoalForm", GoalForm);
            ;
        }
    }
});
//# sourceMappingURL=../../../../../app/directives/goalForm/goal-form.js.map