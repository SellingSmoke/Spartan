System.register(['angular2/core', 'angular2/router', '../inicio/inicio', '../perfil/perfil', '../mensajes/mensajes', '../autenticacion/router', '../login/login', '../registroEntrenador/registroEntrenador', '../registroAlumno/registroAlumno', '../meta/meta', '../diets/diets', '../autenticacion/autenticacion'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, inicio_1, perfil_1, mensajes_1, router_2, login_1, registroEntrenador_1, registroAlumno_1, meta_1, diets_1, autenticacion_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (inicio_1_1) {
                inicio_1 = inicio_1_1;
            },
            function (perfil_1_1) {
                perfil_1 = perfil_1_1;
            },
            function (mensajes_1_1) {
                mensajes_1 = mensajes_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (registroEntrenador_1_1) {
                registroEntrenador_1 = registroEntrenador_1_1;
            },
            function (registroAlumno_1_1) {
                registroAlumno_1 = registroAlumno_1_1;
            },
            function (meta_1_1) {
                meta_1 = meta_1_1;
            },
            function (diets_1_1) {
                diets_1 = diets_1_1;
            },
            function (autenticacion_1_1) {
                autenticacion_1 = autenticacion_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, aut) {
                    this.router = router;
                    this.aut = aut;
                }
                AppComponent.prototype.logOut = function () {
                    // Eliminar localstorage
                    this.aut.logOut();
                    this.router.navigateByUrl("/login");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'spartan',
                        templateUrl: 'app/main/app.main.html',
                        styleUrls: ['app/main/app.main.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, router_2.LoggedInRouterOutlet],
                        providers: [autenticacion_1.Autenticacion]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/inicio', component: inicio_1.Inicio, name: 'Inicio', useAsDefault: true }),
                        // new Route({ path: '/alumno/:id', component: DashboardAlumno, name: 'DashboardAlumno'}),
                        new router_1.Route({ path: '/perfil', component: perfil_1.Perfil, name: 'Perfil' }),
                        new router_1.Route({ path: '/mensajes', component: mensajes_1.Mensajes, name: 'Mensajes' }),
                        new router_1.Route({ path: '/login', component: login_1.Login, name: 'Login' }),
                        new router_1.Route({ path: '/registroEntrenador', component: registroEntrenador_1.RegistroEntrenador, name: 'RegistroEntrenador' }),
                        new router_1.Route({ path: '/registroAlumno', component: registroAlumno_1.RegistroAlumno, name: 'RegistroAlumno' }),
                        new router_1.Route({ path: '/meta', component: meta_1.Meta, name: 'Meta' }),
                        new router_1.Route({ path: '/dietas', component: diets_1.Dietas, name: 'Dietas' }),
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, autenticacion_1.Autenticacion])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/main/app.component.js.map