import {NgModule, ApplicationRef} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {MaterialModule} from '@angular/material';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {AppComponent} from "./app";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Home} from './home/home';
import {AuthenticationService} from './common/auth.service';
import {MessageService} from "./common/message.service";
import {Config} from './common/configuration'
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import 'hammerjs';


@NgModule({
    declarations: [AppComponent, Home],
    imports     : [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), MaterialModule.forRoot(), ToastModule, Ng2GoogleChartsModule],
    providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy},  {  provide: "windowObject", useValue: window }],
    bootstrap   : [AppComponent]
})
export class AppModule {
    constructor(private _appRef: ApplicationRef) {
    }

    ngDoBootstrap() {
        this._appRef.bootstrap(AppComponent);
    }

    // constructor(private _router: Router, private _location: Location, private _authService: AuthenticationService){
    //     this._router.events.subscribe(event =>{
    //         if(event.constructor.name === 'NavigationStart') {
    //
    //
    //         }
    //     });
    //}
}

