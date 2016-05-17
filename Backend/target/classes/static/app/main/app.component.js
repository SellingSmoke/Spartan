System.register(['angular2/core', 'angular2/router', '../components/dashboard/inicio', '../components/profile/profile.component', '../components/session/login/login.component', '../components/session/trainer-signUp/trainer-signUp.component', '../components/session/student-signUp/student-signUp.component', '../components/mainpage/mainpage', '../services/autenticacion.service', '../services/router.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, inicio_1, profile_component_1, login_component_1, trainer_signUp_component_1, student_signUp_component_1, mainpage_1, autenticacion_service_1, router_service_1;
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
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (trainer_signUp_component_1_1) {
                trainer_signUp_component_1 = trainer_signUp_component_1_1;
            },
            function (student_signUp_component_1_1) {
                student_signUp_component_1 = student_signUp_component_1_1;
            },
            function (mainpage_1_1) {
                mainpage_1 = mainpage_1_1;
            },
            function (autenticacion_service_1_1) {
                autenticacion_service_1 = autenticacion_service_1_1;
            },
            function (router_service_1_1) {
                router_service_1 = router_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, aut) {
                    this.router = router;
                    this.aut = aut;
                    this.aut.reqIsLogged(); // COPIAR A PERFIL
                }
                AppComponent.prototype.logOut = function () {
                    // Eliminar localstorage
                    this.aut.logOut();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'spartan',
                        templateUrl: 'app/main/app.main.html',
                        styleUrls: ['app/main/app.main.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, router_service_1.LoggedInRouterOutlet],
                        providers: [autenticacion_service_1.AutenticacionService]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/dashboard', component: inicio_1.Inicio, name: 'Dashboard', useAsDefault: true }),
                        new router_1.Route({ path: '/perfil', component: profile_component_1.Profile, name: 'Perfil' }),
                        new router_1.Route({ path: '/login', component: login_component_1.Login, name: 'Login' }),
                        new router_1.Route({ path: '/registroEntrenador', component: trainer_signUp_component_1.TrainerSignUp, name: 'TrainerSignUp' }),
                        new router_1.Route({ path: '/registroAlumno', component: student_signUp_component_1.StudentSignUp, name: 'StudentSignUp' }),
                        new router_1.Route({ path: '/', component: mainpage_1.MainPage, name: 'MainPage' }),
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, autenticacion_service_1.AutenticacionService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=../../../../app/main/app.component.js.map