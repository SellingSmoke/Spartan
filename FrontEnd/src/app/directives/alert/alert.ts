import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { NgClass } from 'angular2/common';

@Component({
    selector: 'alert',
    templateUrl: 'app/directives/alert/alert.html',
})

export class Alert {

    @Input()
    mainTitle:string;
    @Input()
    message:string;
    @Input()
    color:string;
    @Input()
    closable:boolean;
    @Input()
    timeable:number; //-1 no es timeable

    @Output()
    eventShowable = new EventEmitter<boolean>();

    public closeAlert(){
      this.eventShowable.emit(false);
    }



};
