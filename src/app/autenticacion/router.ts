import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {Autenticacion} from "./autenticacion";

@Directive({
    selector: 'router-outlet',
    providers: [Autenticacion],
})
export class LoggedInRouterOutlet extends RouterOutlet {
    rutasPublicas:any;
    rutasPrivadas:any;
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
        this.rutasPrivadas = {
            'inicio': true,
            'perfil': true,
            'dietas': true,
            'meta': true
        };
    }

    activate(instruction:ComponentInstruction){
        var url = instruction.urlPath;
        if (!this.rutasPublicas[url] && !localStorage.getItem('spartan')) {
            //Ruta no publica sin token
            this.padre.navigateByUrl('/login');
        }else if (this.rutasPublicas[url] && localStorage.getItem('spartan')){
            //Ruta publica con token
            this.padre.navigateByUrl('/inicio');
        }else if (localStorage.getItem('spartan') && !this.rutasPrivadas[url]){
            //Ruta no privada con token.
            // -> Después de pruebas nunca llega aquí
            this.padre.navigateByUrl('/inicio');
        }
        return super.activate(instruction);
    }
}
