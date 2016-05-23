// /// <reference path="../../scripts/jquery.d.ts" />
System.register(['angular2/core', 'angular2/router', '../../../services/trainer.service', '../../../services/autenticacion.service', '../../../pipes/student-pipes.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, trainer_service_1, autenticacion_service_1, student_pipes_pipe_1;
    var DashboardAdmin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trainer_service_1_1) {
                trainer_service_1 = trainer_service_1_1;
            },
            function (autenticacion_service_1_1) {
                autenticacion_service_1 = autenticacion_service_1_1;
            },
            function (student_pipes_pipe_1_1) {
                student_pipes_pipe_1 = student_pipes_pipe_1_1;
            }],
        execute: function() {
            DashboardAdmin = (function () {
                function DashboardAdmin(_trainerService, aut, router) {
                    this._trainerService = _trainerService;
                    this.aut = aut;
                    this.router = router;
                    this.studentNum = 0;
                }
                /* Actualizado: 6 mayo no se usa, esta vacio
                 *	Al cargar la vista
                 *
                ngAfterViewInit() {
            
                    }
            
                */
                DashboardAdmin.prototype.ngOnInit = function () {
                    var _this = this;
                    this._trainerService.getTrainers().then(function (trainers) {
                        _this.trainers = trainers;
                        _this.trainersNum = trainers.length;
                        for (var _i = 0; _i < trainers.length; _i++) {
                            var trainer = trainers[_i];
                            _this.studentNum += trainer.students.length;
                        }
                    });
                };
                DashboardAdmin.prototype.logOut = function () {
                    this.aut.logOut();
                    this.router.navigateByUrl("/login");
                };
                DashboardAdmin.prototype.goToDetails = function (student) {
                    this.studentSelected = student;
                };
                DashboardAdmin.prototype.nombreCompleto = function (trainer) {
                    return trainer.name + " " + trainer.lastname;
                };
                ;
                DashboardAdmin = __decorate([
                    core_1.Component({
                        selector: 'dashboard-admin',
                        styleUrls: ['app/components/dashboard/admin-dashboard/table.css'],
                        templateUrl: 'app/components/dashboard/admin-dashboard/admin-dashboard.component.html',
                        pipes: [student_pipes_pipe_1.GoalNamePipe],
                        providers: [trainer_service_1.TrainerService, autenticacion_service_1.AutenticacionService]
                    }), 
                    __metadata('design:paramtypes', [trainer_service_1.TrainerService, autenticacion_service_1.AutenticacionService, router_1.Router])
                ], DashboardAdmin);
                return DashboardAdmin;
            })();
            exports_1("DashboardAdmin", DashboardAdmin);
        }
    }
});
//# sourceMappingURL=../../../../../../app/components/dashboard/admin-dashboard/admin-dashboard.component.js.map