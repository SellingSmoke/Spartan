import {Injectable} from 'angular2/core';

@Injectable()
export class Autenticacion {

    private _rol:string; // 0 -> Admin / 1 -> Trainer / 2 -> Student
    private _logIn;

    constructor (){
        this._rol="1";
        this._logIn=false;
    }

    public esAlumno():boolean {
        return this.comprobarDatos() && this._rol==="2";
    }

    public esProfesor():boolean {
        return this.comprobarDatos() && this._rol==="1";
    }

    public isAdmin():boolean {
        return this.comprobarDatos() && this._rol==="0";
    }

    private comprobarDatos():boolean{
        // mirar localstorage y comprobar que esta registrado.
        this._rol = localStorage.getItem('rol');
        return localStorage.getItem('spartan');
    }

    public logOut(){
        // Eliminar localstorage
        localStorage.removeItem('spartan');
				localStorage.removeItem('alumno');
    }
    public isLogIn():boolean{
        return localStorage.getItem('spartan');
    }
};
