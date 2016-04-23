import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Inicio} from '../components/dashboard/inicio';
import {Perfil} from '../components/perfil/perfil';
import {Login} from '../components/session/login/login';
import {RegistroEntrenador} from '../components/session/registroEntrenador/registroEntrenador';
import {RegistroAlumno} from '../components/session/registroAlumno/registroAlumno';
import {Dietas} from '../components/diets/diets';
import {MainPage} from '../components/mainpage/mainpage'
import { AutenticacionService } from '../services/autenticacion.service';
import {LoggedInRouterOutlet} from '../services/router.service';

@Component({
	  selector: 'spartan',
    templateUrl: 'app/main/app.main.html',
    styleUrls: ['app/main/app.main.css'],
    directives: [ROUTER_DIRECTIVES,LoggedInRouterOutlet],
		providers: [AutenticacionService]
})

@RouteConfig([
  new Route({ path: '/inicio', component: Inicio, name: 'Inicio', useAsDefault: true}),
  new Route({ path: '/perfil', component: Perfil, name: 'Perfil'}),
  new Route({ path: '/login', component: Login, name: 'Login'}),
  new Route({ path: '/registroEntrenador', component: RegistroEntrenador, name: 'RegistroEntrenador'}),
  new Route({ path: '/registroAlumno', component: RegistroAlumno, name: 'RegistroAlumno'}),
  new Route({ path: '/dietas', component: Dietas, name: 'Dietas'}),
	new Route({ path: '/mainpage', component: MainPage, name: 'MainPage'}),
])

export class AppComponent {

    constructor(private router:Router, private aut: AutenticacionService){}

    public logOut(){
        // Eliminar localstorage
        this.aut.logOut();
        this.router.navigateByUrl("/login");
    }
}
