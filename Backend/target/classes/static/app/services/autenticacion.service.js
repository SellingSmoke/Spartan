System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1;
    var AutenticacionService;
    function utf8_to_b64(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            ;
            AutenticacionService = (function () {
                function AutenticacionService(http, router) {
                    this.http = http;
                    this.router = router;
                }
                AutenticacionService.prototype.logIn = function (user, pass) {
                    var _this = this;
                    var userPass = user + ":" + pass;
                    var headers = new http_1.Headers({
                        'Authorization': 'Basic ' + utf8_to_b64(userPass),
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.get('logIn', options).map(function (response) {
                        return _this.processLogInResponse(response);
                    });
                };
                AutenticacionService.prototype.processLogInResponse = function (response) {
                    // Si ha llegado aqui, es que te has logeado correctamente
                    console.log("AQUI ESTA");
                    console.log(response.json());
                    this.currentUser = response.json();
                    this.setUser();
                    console.log("CUMPLE: " + this.currentUser.birthday);
                    localStorage.setItem("login", "SPARTAN");
                    if (this.currentUser.roles.indexOf("ROLE_ADMIN") !== -1) {
                        localStorage.setItem("rol", "ROLE_ADMIN");
                    }
                    if (this.currentUser.roles.indexOf("ROLE_TRAINER") !== -1) {
                        localStorage.setItem("rol", "ROLE_TRAINER");
                    }
                    if (this.currentUser.roles.indexOf("ROLE_STUDENT") !== -1) {
                        localStorage.setItem("rol", "ROLE_STUDENT");
                    }
                    return response;
                };
                AutenticacionService.prototype.reqIsLogged = function () {
                    var _this = this;
                    var headers = new http_1.Headers({
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get('logIn', options).subscribe(function (response) { return _this.processLogInResponse(response); }, function (error) {
                        if (error.status != 401) {
                            console.error("Error when asking if logged: " +
                                JSON.stringify(error));
                        }
                        else {
                            console.error("No tienes sesion activa");
                        }
                        _this.exit();
                    });
                };
                AutenticacionService.prototype.setUser = function () {
                    if (!AutenticacionService.staticUser) {
                        AutenticacionService.staticUser = this.currentUser;
                    }
                    else {
                        console.log("Ya hay usuario");
                    }
                };
                AutenticacionService.prototype.User = function () {
                    return AutenticacionService.staticUser;
                };
                AutenticacionService.prototype.esAlumno = function () {
                    return this.checkLS("ROLE_STUDENT");
                };
                AutenticacionService.prototype.esProfesor = function () {
                    return this.checkLS("ROLE_TRAINER");
                };
                AutenticacionService.prototype.isAdmin = function () {
                    return this.checkLS("ROLE_ADMIN");
                };
                AutenticacionService.prototype.isLogIn = function () {
                    return localStorage.getItem('login') == "SPARTAN";
                };
                AutenticacionService.prototype.checkLS = function (rol) {
                    return localStorage.getItem('rol') == rol && this.isLogIn();
                };
                /*
                 *	Destruye la sesión en Spring
                 */
                AutenticacionService.prototype.logOut = function () {
                    var _this = this;
                    console.log("LOGOUT LLAMADO");
                    this.http.get('logOut').map(function (response) {
                        return response;
                    }).subscribe(function (response) {
                        console.log("LOGOUT LLEGO");
                        console.log(response);
                        _this.exit();
                    });
                };
                /*
                 *	Destruye la sesión en Angular
                 */
                AutenticacionService.prototype.exit = function () {
                    localStorage.clear();
                    this.router.navigateByUrl("/");
                };
                AutenticacionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], AutenticacionService);
                return AutenticacionService;
            })();
            exports_1("AutenticacionService", AutenticacionService);
            ;
        }
    }
});
//# sourceMappingURL=../../../../app/services/autenticacion.service.js.map