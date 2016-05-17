import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {BrowserXhr} from 'angular2/http'
import {AppComponent} from './app.component';
import {provide} from 'angular2/core';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
  /*provide(BrowserXhr, { useClass: CustomBrowserXhr })*/
]);
