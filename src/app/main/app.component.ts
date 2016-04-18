import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// import {DashboardAlumno} from '../dashboard-alumno/dashboard-alumno';
import {Inicio} from '../inicio/inicio';
import {Perfil} from '../perfil/perfil';
import {LoggedInRouterOutlet} from '../autenticacion/router';
import {Login} from '../login/login';
import {RegistroEntrenador} from '../registroEntrenador/registroEntrenador';
import {RegistroAlumno} from '../registroAlumno/registroAlumno';
import {Meta} from '../meta/meta';
import {Dietas} from '../diets/diets';
import { Autenticacion } from '../autenticacion/autenticacion';

@Component({
	  selector: 'spartan',
    templateUrl: 'app/main/app.main.html',
    styleUrls: ['app/main/app.main.css'],
    directives: [ROUTER_DIRECTIVES,LoggedInRouterOutlet],
		providers: [Autenticacion]
})

@RouteConfig([
  new Route({ path: '/inicio', component: Inicio, name: 'Inicio', useAsDefault: true}),
  new Route({ path: '/perfil', component: Perfil, name: 'Perfil'}),
  new Route({ path: '/login', component: Login, name: 'Login'}),
  new Route({ path: '/registroEntrenador', component: RegistroEntrenador, name: 'RegistroEntrenador'}),
  new Route({ path: '/registroAlumno', component: RegistroAlumno, name: 'RegistroAlumno'}),
  new Route({ path: '/meta', component: Meta, name: 'Meta'}),
  new Route({ path: '/dietas', component: Dietas, name: 'Dietas'}),
])

export class AppComponent {

    constructor(private router:Router, private aut: Autenticacion){}

    public logOut(){
        // Eliminar localstorage
        this.aut.logOut();
        this.router.navigateByUrl("/login");
    }
}
