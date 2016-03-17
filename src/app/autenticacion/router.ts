import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

@Directive({
    selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
    rutasPublicas:any;
    private padre:Router;

    constructor(_elementRef:ElementRef, _loader:DynamicComponentLoader,
                _parentRouter:Router, @Attribute('name') nameAttr:string) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.padre = _parentRouter;
        this.rutasPublicas = {
            '/login': true,
            '/registroAlumno': true,
            '/registroEntrenador': true
        };
    }

    activate(instruction:ComponentInstruction) {
        var url = this.padre.lastNavigationAttempt;
        if (!this.rutasPublicas[url] && !localStorage.getItem('jwt')) {
            // todo: redir ect to Login, may be there a better way?
            this.padre.navigateByUrl('/login');
        }
        return super.activate(instruction);
    }
}