import { Component, Input } from 'angular2/core';

@Component({
    selector: 'card',
    styleUrls: ['app/directives/card/card.css'],
    templateUrl: 'app/directives/card/card.html',
})

export class Card {

    @Input()
    card:ICard;

};

export interface ICard {
  id:number;
  title:string;
  text?:string;
  description:string;
  img:string;
  icon?:string;
}
