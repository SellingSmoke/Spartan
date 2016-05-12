System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShowFoodPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
             * Show the course
             *
             * Usage:
             *   value | ShowFood:course
             * Example:
             *   {{ ["Pizza", "Hamburguer", "IceCream"] |  ShowFood:1 }}
             *   formats to: "Hamburguer"
            */
            ShowFoodPipe = (function () {
                function ShowFoodPipe() {
                }
                ShowFoodPipe.prototype.transform = function (value, _a) {
                    var course = _a[0];
                    var values = value.split("-");
                    switch (course) {
                        case 0:
                            if (values.length == 1) {
                                return value;
                            }
                            return values[1];
                        case 1:
                            return values[2];
                        case 2:
                            return values[3];
                        default:
                            return "Invalid food";
                    }
                };
                ShowFoodPipe = __decorate([
                    core_1.Pipe({ name: 'ShowFood' }), 
                    __metadata('design:paramtypes', [])
                ], ShowFoodPipe);
                return ShowFoodPipe;
            })();
            exports_1("ShowFoodPipe", ShowFoodPipe);
        }
    }
});
//# sourceMappingURL=../../../../app/pipes/diet-pipes.pipe.js.map