System.register(['angular2/core', '../../../models/task.model', '../../../directives/goalForm/goal-form', '../../../directives/diets/diets', '../../../directives/comments/comment.directive', '../../../pipes/student-pipes.pipe', '../../../services/autenticacion.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_model_1, goal_form_1, diets_1, comment_directive_1, student_pipes_pipe_1, autenticacion_service_1;
    var DashboardAlumno;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_model_1_1) {
                task_model_1 = task_model_1_1;
            },
            function (goal_form_1_1) {
                goal_form_1 = goal_form_1_1;
            },
            function (diets_1_1) {
                diets_1 = diets_1_1;
            },
            function (comment_directive_1_1) {
                comment_directive_1 = comment_directive_1_1;
            },
            function (student_pipes_pipe_1_1) {
                student_pipes_pipe_1 = student_pipes_pipe_1_1;
            },
            function (autenticacion_service_1_1) {
                autenticacion_service_1 = autenticacion_service_1_1;
            }],
        execute: function() {
            DashboardAlumno = (function () {
                function DashboardAlumno(aut) {
                    this.aut = aut;
                    this.trainer_dashboard_event = new core_1.EventEmitter();
                    this.tab = 1;
                    this.posChanged = false; //Por si acaso, como no se donde se inicializa realmente
                }
                /*
                 *	Al iniciarse el componente, se cargaran las tareas que debe realizar el alumno
                 *  las cuales se obtienen a partir del id de su meta
               */
                DashboardAlumno.prototype.ngOnInit = function () {
                    if (this.student.goal)
                        this.task = new task_model_1.Task(this.student.goal.id);
                    this.posChanged = false;
                };
                /*
                 *	Método que permite volver al DashboardEntrenador
               */
                DashboardAlumno.prototype.goBack = function () {
                    this.trainer_dashboard_event.emit(null);
                };
                DashboardAlumno.prototype.getGoal = function (goal) {
                    this.student.goal = goal;
                    this.task = new task_model_1.Task(this.student.goal.id);
                };
                DashboardAlumno.prototype.goalResponse = function (acepted) {
                    this.student.goal.acepted = acepted;
                    this.student.goal.canceled = !acepted;
                    // LLAMAR A GUARDAR
                    if (this.aut.esProfesor() && !acepted) {
                        this.student.goal = null;
                        this.goBack();
                    }
                };
                DashboardAlumno.prototype.saveTask = function (mode) {
                    // AQUI SE LLAMARÁ A GUARDAR EN LA BDD
                    if (mode) {
                        this.student.goal.tasks.push(this.task);
                    }
                    this.task = new task_model_1.Task(this.student.goal.id);
                    // Para cerrar el dialog
                    this.showDialog();
                };
                DashboardAlumno.prototype.setType = function (type) {
                    this.task.setType(type);
                    jQuery(".breadcrumb").hide();
                    if (type) {
                        jQuery("#form-aerobico").hide();
                        jQuery("#form-anaerobico").show();
                    }
                    else {
                        jQuery("#form-anaerobico").hide();
                        jQuery("#form-aerobico").show();
                    }
                };
                DashboardAlumno.prototype.setTab = function (n) {
                    switch (n) {
                        case 1:
                            this.tab = 1;
                            break;
                        case 2:
                            this.tab = 2;
                            // Pone los comentarios de tu contraparte a leidos
                            for (var _i = 0, _a = this.student.goal.comments; _i < _a.length; _i++) {
                                var comment = _a[_i];
                                if (comment.rol != localStorage.getItem("rol") && !comment.read)
                                    comment.read = true;
                            }
                            //Llamar a guardar en la BDD
                            break;
                        case 3:
                            this.tab = 3;
                            break;
                    }
                };
                DashboardAlumno.prototype.getNoReadComments = function () {
                    var n = 0;
                    for (var _i = 0, _a = this.student.goal.comments; _i < _a.length; _i++) {
                        var comment = _a[_i];
                        if (comment.rol != localStorage.getItem("rol") && !comment.read)
                            n++;
                    }
                    return n;
                };
                DashboardAlumno.prototype.showDialog = function () {
                    //jQuery('#dialog-mat').toggleClass('position-changed');
                    this.posChanged = !this.posChanged;
                    jQuery('.wrap').toggleClass('active'); //Activar y desactivar el dialog
                    jQuery('#blurizable').toggleClass('blur-backgorund change-style-blur'); //Activar y desactivar el fondo oscuro tras el dialog
                    jQuery('.boton-de-radio').prop('checked', false); //Desmarcar los radio-button de añadir tarea al pulsar Aceptar o Cancelar
                    jQuery("#form-anaerobico").hide();
                    jQuery("#form-aerobico").hide();
                    jQuery(".breadcrumb").show();
                    jQuery('html, body').animate({
                        scrollTop: jQuery("#dialog-mat").offset().top - 150
                    }, 250);
                    return false;
                };
                DashboardAlumno.prototype.taskToPending = function (t) {
                    jQuery('#s' + t.id).trigger("click");
                    t.status = 2;
                };
                DashboardAlumno.prototype.colorlabel = function (e) {
                    jQuery(e).toggleClass('add-color-label');
                };
                DashboardAlumno.prototype.editTrigger = function (t) {
                    jQuery("#edit-window-" + t.id).toggleClass("start-no-display");
                    if (!(jQuery('#s' + t.id).is(':checked'))) {
                        jQuery("#edit-window-" + t.id).removeClass("start-no-display");
                        jQuery('#s' + t.id).trigger("click");
                    }
                };
                DashboardAlumno.prototype.saveEdit = function (t) {
                    t.status = 0;
                    this.editTrigger(t);
                };
                DashboardAlumno.prototype.deleteTask = function (t) {
                    var x = this.student.goal.tasks.indexOf(t);
                    this.student.goal.tasks.splice(x, 1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DashboardAlumno.prototype, "student", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DashboardAlumno.prototype, "trainer_dashboard_event", void 0);
                DashboardAlumno = __decorate([
                    core_1.Component({
                        selector: 'dashboard-alumno',
                        templateUrl: 'app/components/dashboard/student-dashboard/student-dashboard.html',
                        styleUrls: ['app/components/dashboard/student-dashboard/student-dashboard.css'],
                        providers: [autenticacion_service_1.AutenticacionService],
                        directives: [goal_form_1.GoalForm, comment_directive_1.CommentDirective, diets_1.Diets],
                        pipes: [student_pipes_pipe_1.BeautifyProgessBarPipe, student_pipes_pipe_1.GoalNamePipe],
                        inputs: ['student']
                    }), 
                    __metadata('design:paramtypes', [autenticacion_service_1.AutenticacionService])
                ], DashboardAlumno);
                return DashboardAlumno;
            })();
            exports_1("DashboardAlumno", DashboardAlumno);
        }
    }
});
//# sourceMappingURL=../../../../../../app/components/dashboard/student-dashboard/student-dashboard.component.js.map