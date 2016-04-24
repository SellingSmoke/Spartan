import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {RouterLink} from "angular2/router";

@Component({
	  selector: 'mainpage',
    templateUrl: 'app/components/mainpage/mainpage2.html',
		styleUrls: ['app/components/mainpage/mainpage2.css'],
    directives: [RouterLink]

})

export class MainPage{
  constructor (){

  }


};
