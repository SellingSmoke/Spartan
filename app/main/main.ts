import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';

// Aquí empieza todo

//bootstrap por si no lo sabeis es rutina de inicio, y dice que se inicia con la clase AppComponent, arriba se ve de donde la importamos.
bootstrap(AppComponent , [HTTP_PROVIDERS, ROUTER_PROVIDERS]);