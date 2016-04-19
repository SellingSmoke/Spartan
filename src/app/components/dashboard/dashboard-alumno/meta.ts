import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Goal} from "../../../models/goal";

@Component({
    selector: 'inicio',
    styleUrls: ['app/components/dashboard/dashboard-alumno/meta.css'],
    templateUrl: 'app/dashboard/dashboard-alumno/meta.html',
    directives: [FORM_DIRECTIVES]
})

export class Meta {

    public seleccion:string;
    public selecciones:String[];
    public seleccionado:string;

    public seleccion2:string;
    public selecciones2:String[];
    public seleccionado2:string;

    public frase:string;
    public frase2:string;

    constructor(){
        this.seleccionado=" ( ··· ) ";
    }

    nuevaSeleccion(){
        this.seleccion="spartan";
        this.selecciones = ["perder peso","ganar masa muscular", "ganar resistencia" , "trabajar especificamente", "mejorar en", "otra"];
    }

    noSeleccion(){
        this.seleccion=null;
    }

    noSeleccionArgumentos(seleccion:string){
        this.seleccionado=seleccion;
        this.seleccion=null;
        this.calcular2selector(seleccion);
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
      return this.seleccionado!==null && this.seleccionado==="otra";
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
        var meta:Goal;
        meta = new MetaEnrique();
        meta.id = 1; // Poner numero
        meta.student_id = 3;     // ID del alumno al que pertenece la meta
        meta.progress= 0;       // Al crearse 0
        meta.type= this.selecciones.indexOf(this.seleccionado);

        meta.campo_metaX= this.seleccionado2;    // Parametro X del tipo (Kg,Km)

        console.log(meta);
    }
};

class MetaEnrique implements Goal{
    id:number;
    student_id:number;
    progress:number;
    type:number;
    campo_metaX:string;
    constructor(){

    }

}
