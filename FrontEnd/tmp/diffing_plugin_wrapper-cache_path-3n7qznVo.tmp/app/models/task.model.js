System.register([], function(exports_1) {
    var i, Task;
    function parseArray(jTasks) {
        var tasks = new Array();
        for (var _i = 0; _i < jTasks.length; _i++) {
            var task = jTasks[_i];
            tasks.push(new Task(null, task));
        }
        return tasks;
    }
    exports_1("parseArray", parseArray);
    return {
        setters:[],
        execute: function() {
            i = 5;
            Task = (function () {
                function Task(goal_id, task) {
                    if (goal_id != null) {
                        this.result1 = 0;
                        this.result2 = 0;
                        this.status = 0;
                        this.goal_id = goal_id;
                        this.id = i + 1;
                        i++;
                    }
                    if (task != null) {
                        this.fromJSON(task);
                    }
                }
                Task.prototype.setType = function (type) {
                    if (type) {
                        this.type = 1;
                        this.format1 = "repeticiones";
                        this.format2 = "Kg";
                    }
                    else {
                        this.type = 0;
                        this.format1 = "Km";
                        this.format2 = "minutos";
                    }
                };
                Task.prototype.toJSON = function () {
                    return {
                        id: -1,
                        name: this.name,
                        goal_id: this.goal_id,
                        status: this.status,
                        description: this.description,
                        type: this.type,
                        objective1: this.objective1,
                        format1: this.format1,
                        result1: this.result1,
                        objective2: this.objective2,
                        format2: this.format2,
                        result2: this.result2
                    };
                };
                Task.prototype.fromJSON = function (task) {
                    this.id = task.id;
                    this.goal_id = task.goal_id;
                    this.status = task.status;
                    this.name = task.name;
                    this.description = task.description;
                    this.type = task.type;
                    this.objective1 = task.objective1;
                    this.format1 = task.format1;
                    this.result1 = task.result1;
                    this.objective2 = task.objective2;
                    this.format2 = task.format2;
                    this.result2 = task.result2;
                };
                return Task;
            })();
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=../../../../app/models/task.model.js.map