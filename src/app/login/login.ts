import {Component} from 'angular2/core';
import {Autenticacion} from "../autenticacion/autenticacion";
import {Router} from "angular2/router";
import {RouterLink} from "angular2/router";

@Component({
	selector: 'login',
    templateUrl: 'app/login/login.html',
		styleUrls: ['app/login/login.css'],
    directives: [RouterLink]

})

export class Login {

    private model = {
        user : "",
        pass : ""
    }

    constructor(public router: Router) {
    }


    logIn(){
        console.log(this.model);
        if (this.model.user==="spartan" && this.model.pass==="spartan"){
            localStorage.setItem('spartan', "Somos Espartanos");
						localStorage.setItem('rol', "1");
            this.router.parent.navigateByUrl('/inicio');
        }else if(this.model.user==="alumno" && this.model.pass==="alumno"){
					  localStorage.setItem('spartan', "Somos Espartanos");
						localStorage.setItem('rol', "2");
						this.router.parent.navigateByUrl('/inicio');
				}
    }

};
