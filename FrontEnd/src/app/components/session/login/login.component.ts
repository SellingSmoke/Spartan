import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {RouterLink} from "angular2/router";

@Component({
	selector: 'login',
    templateUrl: 'app/components/session/login/login.html',
		styleUrls: ['app/components/session/login/login.css'],
    directives: [RouterLink]

})


export class Login {

    private model = {
        user : "",
        pass : ""
    }

    private usuarios:Usuario[];

    constructor(public router: Router) {}


    logIn(){

        if (!localStorage.getItem('usuarios')){
            var aux=[];
            aux.push({user:"admin",pass:"admin",rol:"0"});
            aux.push({user:"spartan",pass:"spartan",rol:"1"});
            aux.push({user:"alumno",pass:"alumno",rol:"2"});
            localStorage.setItem('usuarios', JSON.stringify(aux));
        }

        this.usuarios = JSON.parse(localStorage.getItem('usuarios'));

        for (var i = 0 ; i<this.usuarios.length ; i++){
            if (this.usuarios[i].user===this.model.user && this.usuarios[i].user != ""){
                if (this.usuarios[i].pass===this.model.pass){
                    localStorage.setItem('spartan', "Somos Espartanos");
                    localStorage.setItem('rol', this.usuarios[i].rol);
                    this.router.parent.navigateByUrl('/dashboard');
                }
            }
        }

        /*if (this.model.user==="spartan" && this.model.pass==="spartan"){
            localStorage.setItem('spartan', "Somos Espartanos");
            localStorage.setItem('rol', "1");
            this.router.parent.navigateByUrl('/dashboard');
        }else if(this.model.user==="alumno" && this.model.pass==="alumno"){
            localStorage.setItem('spartan', "Somos Espartanos");
            localStorage.setItem('rol', "2");
            this.router.parent.navigateByUrl('/dashboard');
        }else if(this.model.user==="admin" && this.model.pass==="admin"){
            localStorage.setItem('spartan', "Somos Espartanos");
            localStorage.setItem('rol', "0");
            this.router.parent.navigateByUrl('/dashboard');
        }*/

    }

};

interface Usuario{
    user:string;
    pass:string;
    rol:string;
}
