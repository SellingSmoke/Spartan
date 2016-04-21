import { Component, Input } from 'angular2/core';

@Component({
    selector: 'card',
    styleUrls: ['app/components/dashboard/dashboard-alumno/meta.css'],
    templateUrl: 'app/components/dashboard/dashboard-alumno/card.html',
})

export class Card {

    @Input()
    card:ICard;

    img = "url('../assets/imagenes/perderPeso.jpg') center / cover"
    //img = "../assets/imagenes/perderPeso.jpg"
};

export interface ICard {
  id:number;
  title:string;
  description:string;
  img:string;
  icon?:string;
}
