System.register(['../recursos-estaticos', '../models/goal.model', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var recursos_estaticos_1, goal_model_1, core_1;
    var GoalService;
    function parseArray(jGoals) {
        var goals = new Array();
        for (var _i = 0; _i < jGoals.length; _i++) {
            var goal = jGoals[_i];
            goals.push(new goal_model_1.Goal(goal.id, goal.type, goal.campo_metaX));
        }
        return goals;
    }
    exports_1("parseArray", parseArray);
    return {
        setters:[
            function (recursos_estaticos_1_1) {
                recursos_estaticos_1 = recursos_estaticos_1_1;
            },
            function (goal_model_1_1) {
                goal_model_1 = goal_model_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GoalService = (function () {
                function GoalService() {
                }
                /**
                   Devuelve las tareas de una meta de un alumno
                */
                GoalService.prototype.getGoals = function (id) {
                    var goals = Promise.resolve(recursos_estaticos_1.GOALS).then(function (jGoals) {
                        jGoals = jGoals.filter(function (goal) { return goal.student_id === id; });
                        return jGoals;
                    });
                    return goals;
                };
                GoalService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GoalService);
                return GoalService;
            })();
            exports_1("GoalService", GoalService);
        }
    }
});
//# sourceMappingURL=../../../../app/services/goal.service.js.map