import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Inicio} from '../components/dashboard/inicio';
import {Profile} from '../components/profile/profile.component';
import {Login} from '../components/session/login/login.component';
import { TrainerSignUp } from '../components/session/trainer-signUp/trainer-signUp.component';
import { StudentSignUp } from '../components/session/student-signUp/student-signUp.component';
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
  new Route({ path: '/dashboard', component: Inicio, name: 'Dashboard', useAsDefault: true}),
  new Route({ path: '/perfil', component: Profile, name: 'Perfil'}),
  new Route({ path: '/login', component: Login, name: 'Login'}),
  new Route({ path: '/registroEntrenador', component: TrainerSignUp, name: 'TrainerSignUp'}),
  new Route({ path: '/registroAlumno', component: StudentSignUp, name: 'StudentSignUp'}),
	new Route({ path: '/', component: MainPage, name: 'MainPage'}),
])

export class AppComponent {

    constructor(private router:Router, private aut: AutenticacionService){}

    public logOut(){
        // Eliminar localstorage
        this.aut.logOut();
    }
}
