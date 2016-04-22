import { Component, Output, Input, EventEmitter } from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import { Goal } from "../../models/goal";
import { Card, ICard } from '../card/card'

@Component({
    selector: 'goal-form',
    styleUrls: ['app/directives/goalForm/goal-form.css'],
    templateUrl: 'app/directives/goalForm/goal-form.html',
    directives: [FORM_DIRECTIVES, Card]
})

export class GoalForm {

    public seleccion:string;
    public selecciones:ICard[];
    public seleccionado:ICard;

    public seleccion2:string;
    public parametrosExtra:ICard[];
    public seleccionado2:string;

    public frase:string;
    public frase2:string;

    public pesos_elegibles:ICard[];
    public distancias_elegibles:ICard[];
    public deportes_elegibles:ICard[];
    public especificos_elegibles:ICard[];

    @Output()
    newGoal = new EventEmitter<Goal>();

    constructor(){
        this.seleccionado = {id: 0, title: " ( ··· ) ", description: null, img: null};
        this.parametrosExtra = [];

        this.pesos_elegibles = [{ id: 0, title: "5kg", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                { id: 1, title: "10kg", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                { id: 2, title: "15kg", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null }]
        this.distancias_elegibles = [{ id: 0, title: "5km", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                     { id: 1, title: "10km", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                     { id: 2, title: "15km", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null }]
        this.especificos_elegibles = [{ id: 0, title: "parte superior", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                      { id: 1, title: "parte inferior", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null }]
        this.deportes_elegibles = [{ id: 0, title: "fútbol", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                   { id: 1, title: "baloncesto", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                   { id: 2, title: "tennis", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                   { id: 3, title: "golf", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                   { id: 4, title: "kick-boxing", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null },
                                   { id: 5, title: "balonmano", img: "url('../assets/imagenes/rojo.jpg') center / cover", icon: "fitness_center", description: null }]
    }

    nuevaSeleccion(){
        this.seleccion="spartan";
        this.selecciones = [
          {id: 0,title: "perder peso", img: "url('../assets/imagenes/perderPeso.jpg') center / cover", icon: "fitness_center",description: "Librate de esos kilos de mas en cuestión de semanas"},
          {id: 1,title: "ganar masa muscular", icon: "fitness_center", img: "url('../assets/imagenes/ganarMusculo.jpg') center / cover", description: "Deja de ser un tirillas sin doparte, repartiras como el de más"},
          {id: 2,title: "ganar resistencia", icon: "fitness_center", img: "url('../assets/imagenes/resistencia.jpg') center / cover", description: "Para poder bajar las escaleras sin asfixiarte"} ,
          {id: 3,title: "trabajar especificamente", icon: "fitness_center", img: "url('../assets/imagenes/trabajoEspecifico.jpg') center / cover", description: "Elije un ejecicio determinado para trabajar una zona específica"},
          {id: 4,title: "Mejorar en mi deporte", text: "mejorar en", icon: "fitness_center", img: "url('../assets/imagenes/mejorar.jpg') center / cover", description: "Trata de mejorar en tu deporte para rendir al máximo"},
          {id: 5,title: "Meta propia", text: "otra", icon: "fitness_center", img: "url('../assets/imagenes/otra.jpg') center / cover", description: "Proponos una meta propia, solo tú puedes marcar tus limites"}];
    }

    noSeleccion(){
        this.seleccion=null;
    }

    noSeleccionArgumentos(seleccion:ICard){
        this.seleccionado=seleccion;
        this.seleccion=null;
        var texto = seleccion.title;
        if (seleccion.text)
            texto = seleccion.text;
        console.log(texto);
        this.calcular2selector(texto);
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
    noSeleccionArgumentos2(seleccion:ICard){
        this.seleccionado2=seleccion.title;
        this.seleccion2=null;
    }

    esOtro():boolean{
      return this.seleccionado!==null && this.seleccionado.text==="otra";
    }

    calcular2selector(seleccion:string) {
        switch (seleccion) {
            case "perder peso" :
                this.frase = "aproximadamente ";
                this.frase2 = null;
                this.parametrosExtra = this.pesos_elegibles;
                this.seleccionado2 = "5 Kg";
                break;

            case "ganar masa muscular":
                this.frase = "aproximadamente ";
                this.frase2 = null;
                this.parametrosExtra = this.pesos_elegibles;
                this.seleccionado2 = "5 Kg";
                break;

            case "ganar resistencia"  :
                this.frase = "y correr unos";
                this.frase2 = null;
                this.parametrosExtra = this.distancias_elegibles;
                this.seleccionado2 = "5 Km";
                break;

            case "trabajar especificamente"  :
                this.frase = null;
                this.frase2 = "del cuerpo";
                this.parametrosExtra = this.especificos_elegibles;
                this.seleccionado2 = "parte superior";
                break;

            case "mejorar en"  :
                this.frase = "un deporte como";
                this.frase2 = null;
                this.parametrosExtra = this.deportes_elegibles;
                this.seleccionado2 = "fútbol";
                break;

            case "otra":
                this.frase = "definida como: ";
                this.frase2 = null;
                this.parametrosExtra = null;
                this.seleccionado2 = "Escribir Aquí";
                break;
        }
    }

    saveGoal(){
        // Declaro variables para dejar claros los cambios, refactoriza como quieras
        var meta:Goal;
        var indexMeta = this.selecciones.indexOf(this.seleccionado);
        var campoX = this.seleccionado2;    // Parametro X del tipo (Kg,Km)
        var student_id = 3;     // ID del alumno al que pertenece la meta
        // meta.id = 1; (Lo pone la base de datos)
        meta = new Goal(student_id, indexMeta, campoX);
        console.log(meta);
        this.newGoal.emit(meta);
    }
};
