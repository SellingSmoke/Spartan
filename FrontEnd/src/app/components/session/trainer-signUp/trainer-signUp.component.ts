import {Component} from 'angular2/core';

@Component({
	selector: 'registroEntrenador',
    templateUrl: 'app/components/session/trainer-signUp/trainer-signUp.html'
})

export class TrainerSignUp {

    private model = {
        user : "",
        pass1 : "",
        pass2 : ""
    }

    registrar() {
        if (this.model.pass1 === this.model.pass2){
            var aux= JSON.parse(localStorage.getItem('usuarios'));
            aux.push({user:this.model.user,pass:this.model.pass1,rol:"1"});
            localStorage.removeItem('usuarios');
            localStorage.setItem('usuarios', JSON.stringify(aux));

        }
    }



};
