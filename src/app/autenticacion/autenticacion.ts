import {Injectable} from 'angular2/core';

@Injectable()
export class Autenticacion {

    private _rol; // Uno y dos por ejemplo

    constructor (){

    }

    public esAlumno():boolean {
        return this.comprobarDatos() && this._rol===1;
    }

    public esProfesor():boolean {
        return this.comprobarDatos() && this._rol===2;
    }

    private comprobarDatos():boolean{
        // mirar localstorage y comprobar que esta registrado.
        return true;
    }

    public login(){
        // llamar a la api

        //Introducir los datos en localstorage
    }

    public logout(){
        // Eliminar localstorage
    }
    public isLogIn():boolean{
        return true;
    }
};