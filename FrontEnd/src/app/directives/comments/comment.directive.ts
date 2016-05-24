import { Component, Input } from 'angular2/core';
import { Comment, newComment } from '../../models/comment.model';
import { AutenticacionService } from '../../services/autenticacion.service';
import { CommentService } from '../../services/comment.service';

@Component({
    selector: 'comment',
    providers: [AutenticacionService, CommentService],
    templateUrl: 'app/directives/comments/comment.directive.html',
    inputs: ['comments']
})

export class CommentDirective {

    @Input()
    comments:Comment[];

    constructor(private aut: AutenticacionService, private commentService: CommentService){}

    saveComment(text: string){
      let comment = newComment(text);
      //this.comments.push(comment);
      this.commentService.newComment(comment, this.aut.User().goal.id).subscribe(
        response => this.comments.push(comment),
        error => console.log(error)
      );
      console.log(this.comments);
    }

};
