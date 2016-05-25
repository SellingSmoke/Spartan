import { Component, Input } from 'angular2/core';
import { Comment, newComment } from '../../models/comment.model';
import {  Goal } from '../../models/goal.model';
import { AutenticacionService } from '../../services/autenticacion.service';
import { GoalService } from '../../services/goal.service';

@Component({
    selector: 'comment',
    providers: [AutenticacionService, GoalService],
    templateUrl: 'app/directives/comments/comment.directive.html',
    inputs: ['comments']
})

export class CommentDirective {

    @Input()
    goal:Goal;

    constructor(private aut: AutenticacionService, private goalService: GoalService){}

    saveComment(text: string){
      let comment = newComment(text);
      this.goal.comments.push(comment);
      this.goalService.editGoal(this.goal).subscribe(
  			response => console.log("Se guardo tu comentario"),
  			error => console.log(error)
  		)
    }

};
