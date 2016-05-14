System.register(['angular2/core', './trainer-dashboard/trainer-dashboard.component', './student-dashboard/student-dashboard.component', './admin-dashboard/admin-dashboard.component', '../../services/autenticacion.service', '../../services/student.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, trainer_dashboard_component_1, student_dashboard_component_1, admin_dashboard_component_1, autenticacion_service_1, student_service_1;
    var Inicio;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (trainer_dashboard_component_1_1) {
                trainer_dashboard_component_1 = trainer_dashboard_component_1_1;
            },
            function (student_dashboard_component_1_1) {
                student_dashboard_component_1 = student_dashboard_component_1_1;
            },
            function (admin_dashboard_component_1_1) {
                admin_dashboard_component_1 = admin_dashboard_component_1_1;
            },
            function (autenticacion_service_1_1) {
                autenticacion_service_1 = autenticacion_service_1_1;
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
                        styleUrls: ['app/components/dashboard/inicio.css'],
                        templateUrl: 'app/components/dashboard/inicio.html',
                        directives: [trainer_dashboard_component_1.DashboardEntrenador, student_dashboard_component_1.DashboardAlumno, admin_dashboard_component_1.DashboardAdmin],
                        providers: [autenticacion_service_1.AutenticacionService, student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [autenticacion_service_1.AutenticacionService, student_service_1.StudentService])
                ], Inicio);
                return Inicio;
            })();
            exports_1("Inicio", Inicio);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/dashboard/inicio.js.map