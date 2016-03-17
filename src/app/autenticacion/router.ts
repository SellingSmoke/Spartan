import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {Autenticacion} from "./autenticacion";
@Directive({
    selector: 'router-outlet',
    providers: [Autenticacion],
})
export class LoggedInRouterOutlet extends RouterOutlet {
    rutasPublicas:any;
    private padre:Router;

    constructor(_elementRef:ElementRef, _loader:DynamicComponentLoader,
                _parentRouter:Router, @Attribute('name') nameAttr:string, private autenticacion:Autenticacion) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.padre = _parentRouter;
        this.rutasPublicas = {
            'login': true,
            'registroAlumno': true,
            'registroEntrenador': true
        };
    }

    activate(instruction:ComponentInstruction) {
        var url = instruction.urlPath;
        if (!this.rutasPublicas[url] && !this.autenticacion.isLogIn()) {
            // todo: redir ect to Login, may be there a better way?
            this.padre.navigateByUrl('/login');
        }
        if (this.rutasPublicas[url] && this.autenticacion.isLogIn()){
            this.padre.navigateByUrl('/perfil');
        }
        return super.activate(instruction);
    }
}