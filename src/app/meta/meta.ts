import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'inicio',
    styleUrls: ['app/meta/meta.css'],
    templateUrl: 'app/meta/meta.html',
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
        console.log("Ha clickeado");
        this.seleccion="spartan";
        this.selecciones = ["perder peso","ganar musculo", "ganar resistencia" , "trabajar especificamente", "mejorar en", "otra"];
    }

    noSeleccion(){
        console.log("Sin seleccion");
        this.seleccion=null;
    }

    noSeleccionArgumentos(seleccion:string){
        console.log("Ha seleccionado "+seleccion);
        this.seleccionado=seleccion;
        this.seleccion=null;
        this.calcular2selector(seleccion);
    }

    nuevaSeleccion2(){
        console.log("Ha clickeado");
        this.seleccion2="spartan";
    }
    nada(event){
      event.preventDefault();
      event.stopPropagation();
    }
    noSeleccion2(){
        console.log("Sin seleccion");
        this.seleccion2=null;
    }
    noSeleccionArgumentos2(seleccion:string){
        console.log("Ha seleccionado "+seleccion);
        this.seleccionado2=seleccion;
        this.seleccion2=null;
    }

    esOtro():boolean{
      return this.seleccionado!==null && this.seleccionado==="otra";
    }

    calcular2selector(seleccion:string){
        switch (seleccion)
        {
            case "perder peso" :
                this.frase = "aproximadamente ";
                this.frase2 = null;
                this.selecciones2 = ["5 Kg","10 Kg","15 Kg"];
                this.seleccionado2= "5 Kg";
                break;

            case "ganar musculo":
                this.frase = "aproximadamente ";
                this.frase2 = null;
                this.selecciones2 = ["5 Kg","10 Kg","15 Kg"];
                this.seleccionado2= "5 Kg";
                break;

            case "ganar resistencia"  :
                this.frase = "y correr unos";
                this.frase2 = null;
                this.selecciones2 = ["5 Km","10 Km","15 Km"];
                this.seleccionado2= "5 Km";
                break;

            case "trabajar especificamente"  :
                this.frase = null;
                this.frase2 = "del cuerpo";
                this.selecciones2 = ["parte superior","parte inferior"];
                this.seleccionado2= "parte superior";
                break;

            case "mejorar en"  :
                this.frase = "un deporte como";
                this.frase2 = null;
                this.selecciones2 = ["fútbol","baloncesto","tenis","golf"];
                this.seleccionado2= "fútbol";
                break;

            case "otra":
              this.frase="definida como: ";
              this.frase2=null;
              this.selecciones2=null;
              this.seleccionado2= "Escribir Aquí";
              break;
        }
    }
};
