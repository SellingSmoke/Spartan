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
    var Perfil;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Perfil = (function () {
                function Perfil() {
                    this.cambiarPassword = undefined;
                    this.cambiarCorreoE = undefined;
                    this.cambiarAge = undefined;
                    this.modelo = {
                        id: 2,
                        nombre: "Sergio",
                        apellido: "Pérez Peló",
                        genero: "Masculino",
                        edad: 20,
                        email: "spartanos@spartan.com",
                        entrenador: "Arnold suaseneguer"
                    };
                }
                Perfil.prototype.esMasculino = function () {
                    return this.modelo.genero === "Masculino";
                };
                Perfil.prototype.cambiarPassClick = function () {
                    this.cambiarPassword = "cambiar";
                };
                Perfil.prototype.cambiarPass = function () {
                    return this.cambiarPassword !== undefined;
                };
                Perfil.prototype.cambiarAlgo = function () {
                    return this.cambiarPassword !== undefined || this.cambiarCorreoE !== undefined || this.cambiarAge !== undefined;
                };
                Perfil.prototype.guardarPass = function () {
                    this.cambiarPassword = undefined;
                };
                Perfil.prototype.cambiarEdadClick = function () {
                    this.cambiarAge = "cambiar";
                };
                Perfil.prototype.cambiarEdad = function () {
                    return this.cambiarAge !== undefined;
                };
                Perfil.prototype.guardarEdad = function () {
                    this.cambiarAge = undefined;
                };
                Perfil.prototype.cambiarCorreoClick = function () {
                    this.cambiarCorreoE = "cambiar";
                };
                Perfil.prototype.cambiarCorreo = function () {
                    return this.cambiarCorreoE !== undefined;
                };
                Perfil.prototype.guardarCorreo = function () {
                    this.cambiarCorreoE = undefined;
                };
                Perfil = __decorate([
                    core_1.Component({
                        selector: 'perfil',
                        templateUrl: 'app/perfil/perfil.html',
                        styleUrls: ['app/perfil/perfil.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Perfil);
                return Perfil;
            })();
            exports_1("Perfil", Perfil);
            ;
        }
    }
});
//# sourceMappingURL=../../../../app/perfil/perfil.js.map