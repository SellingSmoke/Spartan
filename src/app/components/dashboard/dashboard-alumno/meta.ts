import { Component, Output, EventEmitter } from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import { Goal } from "../../../models/goal";
import { Card, ICard } from './card'

@Component({
    selector: 'goal-form',
    styleUrls: ['app/components/dashboard/dashboard-alumno/meta.css'],
    templateUrl: 'app/components/dashboard/dashboard-alumno/meta.html',
    directives: [FORM_DIRECTIVES, Card]
})

export class Meta {

    public seleccion:string;
    public selecciones:ICard[];
    public seleccionado:ICard;

    public seleccion2:string;
    public selecciones2:String[];
    public seleccionado2:string;

    public frase:string;
    public frase2:string;

    @Output()
    new_goal = new EventEmitter<Goal>();

    constructor(){
        this.seleccionado = {id: 0, title: " ( ··· ) ", description: "", img: null};
    }

    nuevaSeleccion(){
        this.seleccion="spartan";
        this.selecciones = [
          {id: 0, title: "perder peso", img: "url('../assets/imagenes/perderPeso.jpg') center / cover", icon: "fitness_center",description: "Librate de esos kilos de mas en cuestión de semanas"},
          {id: 1,title: "ganar masa muscular", icon: "fitness_center", img: "url('../assets/imagenes/ganarMusculo.jpg') center / cover", description: "Deja de ser un tirillas sin doparte, repartiras como el de mas"},
          {id: 2,title: "ganar resistencia", icon: "fitness_center", img: "url('../assets/imagenes/resistencia.jpg') center / cover", description: "Para poder bajar las escaleras sin axfixiarte"} ,
          {id: 3,title: "trabajar especificamente", icon: "fitness_center", img: "url('../assets/imagenes/trabajoEspecifico.jpg') center / cover", description: "Elije un ejecicio determinado para trabajar una zona específica"},
          {id: 4,title: "mejorar en", icon: "fitness_center", img: "url('../assets/imagenes/mejorar.jpg') center / cover", description: "Trata de mejorar en tu deporte para rendir al máximo"},
          {id: 5,title: "otra", icon: "fitness_center", img: "url('../assets/imagenes/otra.jpg') center / cover", description: "Proponos una meta propia, solo tú puedes marcar tus limites"}];
    }

    noSeleccion(){
        this.seleccion=null;
    }

    noSeleccionArgumentos(seleccion:ICard){
        this.seleccionado=seleccion;
        this.seleccion=null;
        this.calcular2selector(seleccion.title);
    }

    nuevaSeleccion2(){
        this.seleccion2="spartan";
    }
    nada(event){
      event.preventDefault();
      event.stopPropagation();
    }
    noSeleccion2(){
        this.seleccion2=null;
    }
    noSeleccionArgumentos2(seleccion:string){
        this.seleccionado2=seleccion;
        this.seleccion2=null;
    }

    esOtro():boolean{
      return this.seleccionado!==null && this.seleccionado.title==="otra";
    }

    calcular2selector(seleccion:string) {
        switch (seleccion) {
            case "perder peso" :
                this.frase = "aproximadamente ";
                this.frase2 = null;
                this.selecciones2 = ["5 Kg", "10 Kg", "15 Kg"];
                this.seleccionado2 = "5 Kg";
                break;

            case "ganar masa muscular":
                this.frase = "aproximadamente ";
                this.frase2 = null;
                this.selecciones2 = ["5 Kg", "10 Kg", "15 Kg"];
                this.seleccionado2 = "5 Kg";
                break;

            case "ganar resistencia"  :
                this.frase = "y correr unos";
                this.frase2 = null;
                this.selecciones2 = ["5 Km", "10 Km", "15 Km"];
                this.seleccionado2 = "5 Km";
                break;

            case "trabajar especificamente"  :
                this.frase = null;
                this.frase2 = "del cuerpo";
                this.selecciones2 = ["parte superior", "parte inferior"];
                this.seleccionado2 = "parte superior";
                break;

            case "mejorar en"  :
                this.frase = "un deporte como";
                this.frase2 = null;
                this.selecciones2 = ["fútbol", "baloncesto", "tenis", "golf"];
                this.seleccionado2 = "fútbol";
                break;

            case "otra":
                this.frase = "definida como: ";
                this.frase2 = null;
                this.selecciones2 = null;
                this.seleccionado2 = "Escribir Aquí";
                break;
        }
    }

    guardar(){
        // Declaro variables para dejar claros los cambios, refactoriza como quieras
        var meta:Goal;
        var indexMeta = this.selecciones.indexOf(this.seleccionado);
        var campoX = this.seleccionado2;    // Parametro X del tipo (Kg,Km)
        var student_id = 3;     // ID del alumno al que pertenece la meta
        // meta.id = 1; (Lo pone la base de datos)
        meta = new Goal(student_id, indexMeta, campoX);
        console.log(meta);
        this.new_goal.emit(meta);
    }
};
