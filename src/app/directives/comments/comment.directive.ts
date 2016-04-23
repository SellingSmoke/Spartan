import { Component, Input } from 'angular2/core';
import { Comment } from '../../models/comment';

@Component({
    selector: 'comment',
    templateUrl: 'app/directives/comments/comment.directive.html',
    inputs: ['comments']
})

export class CommentDirective {

    @Input()
    comments:Comment[];

    comment: Comment;   // Modelo de un nuevo comentario

    constructor(){
      this.comment = new Comment();
    }

    saveComment(text: string){
      //this.student.goal.comments.push(this.comment);
      this.comments.push(this.comment);
      this.comment = new Comment();
    }

};
