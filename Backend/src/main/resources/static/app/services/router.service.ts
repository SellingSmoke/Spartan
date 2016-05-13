import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {AutenticacionService} from "./autenticacion.service";

@Directive({
    selector: 'router-outlet',
    providers: [AutenticacionService],
})
export class LoggedInRouterOutlet extends RouterOutlet {
    rutasPublicas:any;
    rutasPrivadas:any;
    private padre:Router;

    constructor(_elementRef:ElementRef, _loader:DynamicComponentLoader,
                _parentRouter:Router, @Attribute('name') nameAttr:string, private autenticacion:AutenticacionService) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.padre = _parentRouter;
        this.rutasPublicas = {
            'login': true,
            'registroAlumno': true,
            'registroEntrenador': true,
            '':true
        };
        this.rutasPrivadas = {
            'dashboard': true,
            'perfil': true,
        };
    }

    activate(instruction:ComponentInstruction){
        var url = instruction.urlPath;
        console.log("Estas en: "+url);
        if (!this.rutasPublicas[url] && !this.autenticacion.isLogIn()) {
            console.log(1);
            //Ruta no publica sin token
            this.padre.navigateByUrl('/login');
        }else if (this.rutasPublicas[url] && this.autenticacion.isLogIn()){
          console.log(2);
            //Ruta publica con token
            this.padre.navigateByUrl('/dashboard');
        }else if (!this.rutasPrivadas[url] && this.autenticacion.isLogIn() ){
          console.log(3);
            //Ruta no privada con token.
            // -> Después de pruebas nunca llega aquí
            this.padre.navigateByUrl('/dashboard');
        }
        return super.activate(instruction);
    }
}
