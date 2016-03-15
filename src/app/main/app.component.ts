import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Inicio} from '../inicio/inicio';
import {Perfil} from '../perfil/perfil';
import {Mensajes} from '../mensajes/mensajes';
import {Ejercicios} from '../ejercicios/ejercicios';
import {Calentadas} from '../calentadas/calentadas';
import {LoggedInRouterOutlet} from "../autenticacion/router";

@Component({
	selector: 'spartan',
    templateUrl: 'app/main/app.main.html',
    styleUrls: ['app/main/app.main.css'],
    directives: [ROUTER_DIRECTIVES,LoggedInRouterOutlet],
})

@RouteConfig([
  new Route({ path: '/inicio', component: Inicio, name: 'Inicio', useAsDefault: true}),
  new Route({ path: '/perfil', component: Perfil, name: 'Perfil'}),
  new Route({ path: '/ejercicios', component: Ejercicios, name: 'Ejercicios'}),
  new Route({ path: '/mensajes', component: Mensajes, name: 'Mensajes'}),
  new Route({ path: '/calentadas', component: Calentadas, name: 'Calentadas'}),
])

export class AppComponent { }
