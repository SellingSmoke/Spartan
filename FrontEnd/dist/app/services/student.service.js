System.register(['../recursos-estaticos', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var recursos_estaticos_1, core_1;
    var StudentService;
    return {
        setters:[
            function (recursos_estaticos_1_1) {
                recursos_estaticos_1 = recursos_estaticos_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StudentService = (function () {
                function StudentService() {
                }
                /**
                   Devuelve todos los alumnos
                */
                StudentService.prototype.getStudents = function () {
                    return Promise.resolve(recursos_estaticos_1.STUDENTS);
                };
                /**
                   Devuelve el alumno con el id especificado
                */
                StudentService.prototype.getStudent = function (id) {
                    var student = Promise.resolve(recursos_estaticos_1.STUDENTS).then(function (alumnos) { return alumnos.filter(function (student) { return student.id === id; })[0]; });
                    return student;
                };
                StudentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StudentService);
                return StudentService;
            })();
            exports_1("StudentService", StudentService);
        }
    }
});
//# sourceMappingURL=../../../../app/services/student.service.js.map