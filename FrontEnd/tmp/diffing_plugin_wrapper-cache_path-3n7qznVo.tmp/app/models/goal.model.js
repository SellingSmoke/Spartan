System.register([], function(exports_1) {
    var Goal;
    return {
        setters:[],
        execute: function() {
            Goal = (function () {
                function Goal(s_id, type, c_x) {
                    this.student_id = s_id;
                    this.progress = 0;
                    this.type = type;
                    this.campo_metaX = c_x;
                    this.acepted = false;
                    this.canceled = false;
                    this.diet = null;
                    this.comments = [];
                    this.tasks = [];
                }
                return Goal;
            })();
            exports_1("Goal", Goal);
        }
    }
});
//# sourceMappingURL=../../../../app/models/goal.model.js.map