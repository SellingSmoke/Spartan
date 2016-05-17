System.register(['angular2/core', '../../services/student.service', '../../services/goal.service', '../../pipes/student-pipes.pipe', '../../services/autenticacion.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, student_service_1, goal_service_1, student_pipes_pipe_1, autenticacion_service_1;
    var Profile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (goal_service_1_1) {
                goal_service_1 = goal_service_1_1;
            },
            function (student_pipes_pipe_1_1) {
                student_pipes_pipe_1 = student_pipes_pipe_1_1;
            },
            function (autenticacion_service_1_1) {
                autenticacion_service_1 = autenticacion_service_1_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile(_studentService, _goalService, aut) {
                    this._studentService = _studentService;
                    this._goalService = _goalService;
                    this.aut = aut;
                    this.progress = 0;
                    this.num = 0;
                    this.numComplete = 0;
                    this.numCancelled = 0;
                    this.numDiets = 0;
                    this.numComments = 0;
                    this.editMode = 0;
                    this.numTasks = 0;
                    this.completeGoals = [];
                    this.canceledGoals = [];
                }
                Profile.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log(this.aut.User().gender);
                    //this.numComments += student.goal.comments.length;
                    // if(student.goal){
                    // 	 this.progress+= student.goal.progress;
                    // 	 if(student.goal.diet) this.numDiets += 1;
                    // }
                    this._goalService.getGoals(1)
                        .then(function (goals) {
                        _this.filterGoals(goals);
                    });
                };
                Profile.prototype.editPass = function () {
                    this.editMode = 2;
                };
                Profile.prototype.editMail = function () {
                    this.editMode = 1;
                };
                Profile.prototype.showGoals = function () {
                    this.editMode = 3;
                };
                Profile.prototype.anyos = function () {
                    return Math.floor(parseInt(((Date.now() - this.aut.User().birthday) / (1000 * 60 * 60 * 24 * 365)).toFixed(1)));
                };
                Profile.prototype.saveChanges = function (save) {
                    if (save) {
                    }
                    this.editMode = 0;
                };
                Profile.prototype.filterGoals = function (goals) {
                    for (var _i = 0; _i < goals.length; _i++) {
                        var g = goals[_i];
                        if (g.progress === 100) {
                            this.completeGoals.push(g);
                            this.numComplete++;
                        }
                        if (g.canceled) {
                            this.canceledGoals.push(g);
                            this.numCancelled++;
                        }
                        this.numTasks += g.tasks.length;
                        this.num += 1;
                        if (g.diet)
                            this.numDiets += 1;
                        this.numComments += g.comments.length;
                        this.progress += g.progress;
                    }
                };
                Profile = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: 'app/components/profile/profile.html',
                        styleUrls: ['app/components/profile/profile.css'],
                        pipes: [student_pipes_pipe_1.GoalNamePipe],
                        providers: [student_service_1.StudentService, goal_service_1.GoalService]
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService, goal_service_1.GoalService, autenticacion_service_1.AutenticacionService])
                ], Profile);
                return Profile;
            })();
            exports_1("Profile", Profile);
            ;
        }
    }
});
//# sourceMappingURL=../../../../../app/components/profile/profile.component.js.map