System.register(['angular2/core', "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(router) {
                    this.router = router;
                    this.model = {
                        user: "",
                        pass: ""
                    };
                }
                Login.prototype.logIn = function () {
                    if (!localStorage.getItem('usuarios')) {
                        var aux = [];
                        aux.push({ user: "admin", pass: "admin", rol: "0" });
                        aux.push({ user: "spartan", pass: "spartan", rol: "1" });
                        aux.push({ user: "alumno", pass: "alumno", rol: "2" });
                        localStorage.setItem('usuarios', JSON.stringify(aux));
                    }
                    this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
                    for (var i = 0; i < this.usuarios.length; i++) {
                        if (this.usuarios[i].user === this.model.user && this.usuarios[i].user != "") {
                            if (this.usuarios[i].pass === this.model.pass) {
                                localStorage.setItem('spartan', "Somos Espartanos");
                                localStorage.setItem('rol', this.usuarios[i].rol);
                                this.router.parent.navigateByUrl('/dashboard');
                            }
                        }
                    }
                    /*if (this.model.user==="spartan" && this.model.pass==="spartan"){
                        localStorage.setItem('spartan', "Somos Espartanos");
                        localStorage.setItem('rol', "1");
                        this.router.parent.navigateByUrl('/dashboard');
                    }else if(this.model.user==="alumno" && this.model.pass==="alumno"){
                        localStorage.setItem('spartan', "Somos Espartanos");
                        localStorage.setItem('rol', "2");
                        this.router.parent.navigateByUrl('/dashboard');
                    }else if(this.model.user==="admin" && this.model.pass==="admin"){
                        localStorage.setItem('spartan', "Somos Espartanos");
                        localStorage.setItem('rol', "0");
                        this.router.parent.navigateByUrl('/dashboard');
                    }*/
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/components/session/login/login.html',
                        styleUrls: ['app/components/session/login/login.css'],
                        directives: [router_2.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
            ;
        }
    }
});
//# sourceMappingURL=../../../../../../app/components/session/login/login.component.js.map