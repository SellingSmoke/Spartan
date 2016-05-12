System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AutenticacionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutenticacionService = (function () {
                function AutenticacionService() {
                    this._rol = "1";
                    this._logIn = false;
                }
                AutenticacionService.prototype.esAlumno = function () {
                    return this.comprobarDatos() && this._rol === "2";
                };
                AutenticacionService.prototype.esProfesor = function () {
                    return this.comprobarDatos() && this._rol === "1";
                };
                AutenticacionService.prototype.isAdmin = function () {
                    return this.comprobarDatos() && this._rol === "0";
                };
                AutenticacionService.prototype.comprobarDatos = function () {
                    // mirar localstorage y comprobar que esta registrado.
                    this._rol = localStorage.getItem('rol');
                    return localStorage.getItem('spartan');
                };
                AutenticacionService.prototype.logOut = function () {
                    // Eliminar localstorage
                    localStorage.removeItem('spartan');
                    localStorage.removeItem('rol');
                };
                AutenticacionService.prototype.isLogIn = function () {
                    return localStorage.getItem('spartan');
                };
                AutenticacionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AutenticacionService);
                return AutenticacionService;
            })();
            exports_1("AutenticacionService", AutenticacionService);
            ;
        }
    }
});
//# sourceMappingURL=../../../../app/services/autenticacion.service.js.map