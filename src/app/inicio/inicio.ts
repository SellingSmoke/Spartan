import {Component, OnInit} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { DashboardEntrenador } from '../dashboard-entrenador/dashboard-entrenador';

@Component({
	selector: 'inicio',
  styleUrls: ['app/inicio/inicio.css'],
  templateUrl: 'app/inicio/inicio.html',
	directives: [DashboardEntrenador]
})

export class Inicio{}
