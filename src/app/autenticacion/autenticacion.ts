import {Component, Injectable} from 'angular2/core';

@Component({
    selector: 'autenticacion',
})

export class autenticacion {

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
    }

    public login(){
        // llamar a la api

        //Introducir los datos en localstorage
    }

    public logout(){
        // Eliminar localstorage
    }
};