System.register([], function(exports_1) {
    var Comment;
    return {
        setters:[],
        execute: function() {
            Comment = (function () {
                function Comment() {
                    this.comment = "";
                    this.rol = localStorage.getItem('rol');
                    this.date = new Date().getTime();
                    this.read = false;
                }
                return Comment;
            })();
            exports_1("Comment", Comment);
        }
    }
});
//# sourceMappingURL=../../../../app/models/comment.model.js.map