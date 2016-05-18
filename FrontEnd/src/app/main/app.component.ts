import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Inicio} from '../components/dashboard/inicio';
import {Profile} from '../components/profile/profile.component';
import {Login} from '../components/session/login/login.component';
import { Signup } from '../components/session/signup/signup.component';
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
	new Route({path: '/signup/:role', component: Signup, name: 'Signup'}),
	new Route({ path: '/', component: MainPage, name: 'MainPage'}),
])

export class AppComponent {

    constructor(private router:Router, private aut: AutenticacionService){
			 this.aut.reqIsLogged(); // COPIAR A PERFIL
		}

    public logOut(){
        // Eliminar localstorage
        this.aut.logOut();
    }
}
