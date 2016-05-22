System.register(['angular2/core', '../../models/comment.model'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comment_model_1;
    var CommentDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_model_1_1) {
                comment_model_1 = comment_model_1_1;
            }],
        execute: function() {
            CommentDirective = (function () {
                function CommentDirective() {
                    this.comment = new comment_model_1.Comment();
                }
                CommentDirective.prototype.saveComment = function (text) {
                    //this.student.goal.comments.push(this.comment);
                    this.comments.push(this.comment);
                    this.comment = new comment_model_1.Comment();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], CommentDirective.prototype, "comments", void 0);
                CommentDirective = __decorate([
                    core_1.Component({
                        selector: 'comment',
                        templateUrl: 'app/directives/comments/comment.directive.html',
                        inputs: ['comments']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommentDirective);
                return CommentDirective;
            })();
            exports_1("CommentDirective", CommentDirective);
            ;
        }
    }
});
//# sourceMappingURL=../../../../../app/directives/comments/comment.directive.js.map