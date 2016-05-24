import { Component, Input } from 'angular2/core';
import { Comment, newComment } from '../../models/comment.model';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
    selector: 'comment',
    providers: [AutenticacionService],
    templateUrl: 'app/directives/comments/comment.directive.html',
    inputs: ['comments']
})

export class CommentDirective {

    @Input()
    comments:Comment[];

    constructor(private aut: AutenticacionService){}

    saveComment(text: string){
      let comment = newComment(text);
      this.comments.push(comment);
      console.log(this.comments);
    }

};
