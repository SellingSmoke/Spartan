System.register(['angular2/core', '../dashboard-entrenador/dashboard-entrenador'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dashboard_entrenador_1;
    var Inicio;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dashboard_entrenador_1_1) {
                dashboard_entrenador_1 = dashboard_entrenador_1_1;
            }],
        execute: function() {
            Inicio = (function () {
                function Inicio() {
                }
                Inicio = __decorate([
                    core_1.Component({
                        selector: 'inicio',
                        styleUrls: ['app/inicio/inicio.css'],
                        templateUrl: 'app/inicio/inicio.html',
                        directives: [dashboard_entrenador_1.DashboardEntrenador]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Inicio);
                return Inicio;
            })();
            exports_1("Inicio", Inicio);
        }
    }
});
//# sourceMappingURL=../../../../app/inicio/inicio.js.map