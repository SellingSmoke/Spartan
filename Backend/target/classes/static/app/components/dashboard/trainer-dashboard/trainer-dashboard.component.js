System.register(['angular2/core', 'angular2/router', '../../../directives/studentDetail/student-detail', '../../../services/student.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, student_detail_1, student_service_1;
    var DashboardEntrenador, IMAGES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_detail_1_1) {
                student_detail_1 = student_detail_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            DashboardEntrenador = (function () {
                function DashboardEntrenador(_studentService, _router) {
                    this._studentService = _studentService;
                    this._router = _router;
                    this.student_dashboard_event = new core_1.EventEmitter();
                }
                /**
                    Método marca como seleccionado a un alumno, mostrando sus detalles
                */
                DashboardEntrenador.prototype.onSelect = function (student) {
                    this.selectedStudent = student;
                };
                /**
                    Método que permite cargar el dashboard del alumno seleccionado
                */
                DashboardEntrenador.prototype.goToStudentTask = function (student) {
                    this.student_dashboard_event.emit(student);
                };
                /**
                    Método que permite dar la vuelta a la tarjeta
                */
                DashboardEntrenador.prototype.getBack = function (back) {
                    this.selectedStudent = undefined;
                };
                /**
                    Método que se llama inmediatamente después del OnInit
                */
                DashboardEntrenador.prototype.ngOnInit = function () {
                    var _this = this;
                    this.images = IMAGES;
                    this._studentService.getStudents().then(function (students) {
                        _this.students = students;
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DashboardEntrenador.prototype, "student_dashboard_event", void 0);
                DashboardEntrenador = __decorate([
                    core_1.Component({
                        selector: 'dashboard-entrenador',
                        styleUrls: ['app/components/dashboard/trainer-dashboard/trainer-dashboard.css'],
                        templateUrl: 'app/components/dashboard/trainer-dashboard/trainer-dashboard.html',
                        directives: [student_detail_1.StudentDetailComponent],
                        providers: [student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService, router_1.Router])
                ], DashboardEntrenador);
                return DashboardEntrenador;
            })();
            exports_1("DashboardEntrenador", DashboardEntrenador);
            IMAGES = ["http://semantic-ui.com/images/avatar/large/steve.jpg",
                "http://semantic-ui.com/images/avatar2/large/matthew.png",
                "http://semantic-ui.com/images/avatar/large/daniel.jpg",
                "http://semantic-ui.com/images/avatar/large/elliot.jpg",
                "http://semantic-ui.com/images/avatar/large/jenny.jpg",
                "http://semantic-ui.com/images/avatar/large/stevie.jpg",
                "http://semantic-ui.com/images/avatar/large/helen.jpg"];
        }
    }
});
//# sourceMappingURL=../../../../../../app/components/dashboard/trainer-dashboard/trainer-dashboard.component.js.map