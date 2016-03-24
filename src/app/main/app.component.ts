import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DashboardAlumno} from '../dashboard-alumno/dashboard-alumno';
import {Inicio} from '../inicio/inicio';
import {Perfil} from '../perfil/perfil';
import {Mensajes} from '../mensajes/mensajes';
import {Ejercicios} from '../ejercicios/ejercicios';
import {Calentadas} from '../calentadas/calentadas';
import {LoggedInRouterOutlet} from '../autenticacion/router';
import {Login} from '../login/login';
import {RegistroEntrenador} from '../registroEntrenador/registroEntrenador';
import {RegistroAlumno} from '../resgistroAlumno/registroAlumno';

@Component({
	selector: 'spartan',
    templateUrl: 'app/main/app.main.html',
    styleUrls: ['app/main/app.main.css'],
    directives: [ROUTER_DIRECTIVES,LoggedInRouterOutlet],
})

@RouteConfig([
  new Route({ path: '/inicio', component: Inicio, name: 'Inicio', useAsDefault: true}),
	new Route({ path: '/alumno/:id', component: DashboardAlumno, name: 'DashboardAlumno'}),
  new Route({ path: '/perfil', component: Perfil, name: 'Perfil'}),
  new Route({ path: '/ejercicios', component: Ejercicios, name: 'Ejercicios'}),
  new Route({ path: '/mensajes', component: Mensajes, name: 'Mensajes'}),
  new Route({ path: '/calentadas', component: Calentadas, name: 'Calentadas'}),
  new Route({ path: '/login', component: Login, name: 'Login'}),
  new Route({ path: '/registroEntrenador', component: RegistroEntrenador, name: 'RegistroEntrenador'}),
  new Route({ path: '/registroAlumno', component: RegistroAlumno, name: 'RegistroAlumno'}),
])

export class AppComponent {

    constructor(private router:Router){}

    public logOut(){
        // Eliminar localstorage
        localStorage.removeItem('spartan');
        this.router.navigateByUrl("/login");
    }
}
