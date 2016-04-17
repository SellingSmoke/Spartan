System.register(['angular2/core', '../dashboard-entrenador/dashboard-entrenador', '../dashboard-alumno/dashboard-alumno', '../dashboard-admin/dashboard-admin', '../autenticacion/autenticacion', '../students/student-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dashboard_entrenador_1, dashboard_alumno_1, dashboard_admin_1, autenticacion_1, student_service_1;
    var Inicio;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dashboard_entrenador_1_1) {
                dashboard_entrenador_1 = dashboard_entrenador_1_1;
            },
            function (dashboard_alumno_1_1) {
                dashboard_alumno_1 = dashboard_alumno_1_1;
            },
            function (dashboard_admin_1_1) {
                dashboard_admin_1 = dashboard_admin_1_1;
            },
            function (autenticacion_1_1) {
                autenticacion_1 = autenticacion_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            Inicio = (function () {
                function Inicio(aut, _studentService) {
                    var _this = this;
                    this.aut = aut;
                    this._studentService = _studentService;
                    this.seeStudentTasks = false;
                    if (aut.esAlumno()) {
                        this._studentService.getStudent(1)
                            .then(function (student) { return _this.student = student; });
                    }
                    else {
                        this.student = undefined;
                    }
                }
                Inicio.prototype.getStudentDashBoard = function (student) {
                    this.student = student;
                    this.seeStudentTasks = true;
                };
                Inicio.prototype.getTrainerDashBoard = function () {
                    this.seeStudentTasks = false;
                };
                Inicio = __decorate([
                    core_1.Component({
                        selector: 'inicio',
                        styleUrls: ['app/inicio/inicio.css'],
                        templateUrl: 'app/inicio/inicio.html',
                        directives: [dashboard_entrenador_1.DashboardEntrenador, dashboard_alumno_1.DashboardAlumno, dashboard_admin_1.DashboardAdmin],
                        providers: [autenticacion_1.Autenticacion, student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [autenticacion_1.Autenticacion, student_service_1.StudentService])
                ], Inicio);
                return Inicio;
            })();
            exports_1("Inicio", Inicio);
        }
    }
});
//# sourceMappingURL=../../../../app/inicio/inicio.js.map