System.register(['angular2/platform/browser', 'angular2/http', 'angular2/router', './app.component'], function(exports_1) {
    var browser_1, http_1, router_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            // Aquí empieza todo
            //bootstrap por si no lo sabeis es rutina de inicio, y dice que se inicia con la clase AppComponent, arriba se ve de donde la importamos.
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=../../../../app/main/main.js.map