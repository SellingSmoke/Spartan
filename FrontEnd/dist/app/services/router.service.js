System.register(['angular2/core', 'angular2/router', "./autenticacion.service"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, autenticacion_service_1;
    var LoggedInRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (autenticacion_service_1_1) {
                autenticacion_service_1 = autenticacion_service_1_1;
            }],
        execute: function() {
            LoggedInRouterOutlet = (function (_super) {
                __extends(LoggedInRouterOutlet, _super);
                function LoggedInRouterOutlet(_elementRef, _loader, _parentRouter, nameAttr, autenticacion) {
                    _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
                    this.autenticacion = autenticacion;
                    this.padre = _parentRouter;
                    this.rutasPublicas = {
                        'login': true,
                        'registroAlumno': true,
                        'registroEntrenador': true,
                        '': true
                    };
                    this.rutasPrivadas = {
                        'dashboard': true,
                        'perfil': true,
                    };
                }
                LoggedInRouterOutlet.prototype.activate = function (instruction) {
                    var url = instruction.urlPath;
                    console.log("Estas en: " + url);
                    if (!this.rutasPublicas[url] && !this.autenticacion.isLogIn()) {
                        console.log(1);
                        //Ruta no publica sin token
                        this.padre.navigateByUrl('/login');
                    }
                    else if (this.rutasPublicas[url] && this.autenticacion.isLogIn()) {
                        console.log(2);
                        //Ruta publica con token
                        this.padre.navigateByUrl('/dashboard');
                    }
                    else if (!this.rutasPrivadas[url] && this.autenticacion.isLogIn()) {
                        console.log(3);
                        //Ruta no privada con token.
                        // -> Después de pruebas nunca llega aquí
                        this.padre.navigateByUrl('/dashboard');
                    }
                    return _super.prototype.activate.call(this, instruction);
                };
                LoggedInRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'router-outlet',
                        providers: [autenticacion_service_1.AutenticacionService],
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String, autenticacion_service_1.AutenticacionService])
                ], LoggedInRouterOutlet);
                return LoggedInRouterOutlet;
            })(router_1.RouterOutlet);
            exports_1("LoggedInRouterOutlet", LoggedInRouterOutlet);
        }
    }
});
//# sourceMappingURL=../../../../app/services/router.service.js.map