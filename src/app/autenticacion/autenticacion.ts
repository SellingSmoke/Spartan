import {Injectable} from 'angular2/core';

@Injectable()
export class Autenticacion {

    private _rol; // Uno y dos por ejemplo
    private _logIn;
    constructor (){
        this._rol=1;
        this._logIn=false;
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

    public logout(){
        // Eliminar localstorage
        localStorage.removeItem('spartan');
    }
    public isLogIn():boolean{
        return localStorage.getItem('spartan');
    }
};