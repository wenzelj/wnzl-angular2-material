
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import { contentHeaders } from '../common/headers';

// export class User {
//     constructor(
//         public email: string,
//         public password: string) { }
// }

// var users = [
//     new User('admin@admin.com','adm9'),
//     new User('user1@gmail.com','a23')
// ];

@Injectable()
export class AuthenticationService {


    constructor(private _router: Router, private http: Http){
        // this._router.events.subscribe(event =>{
        //     if(event.constructor.name === 'NavigationStart') {
        //         alert('route change')
        //         if (!this.checkCredentials() && this._router.url !== '/login'  )
        //             this._router.navigate(['/login']);
        //     }
        // });
    }


    logout():void {
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    }

    login(event, username, password) : void {
        contentHeaders.append("Authorization", "Basic " + btoa(username + ":" + password));
        event.preventDefault();
        //let body = JSON.stringify({ username, password });
        this.http.get('user', {
            headers : contentHeaders
        }).subscribe(
            response => {
                if(response.json().name && response.json().authenticated ){
                    localStorage.setItem("user", response.json().authenticated );
                    this._router.navigate(['home']);
                }
                else{
                    this._router.navigate(['login']);
                }
            },
            error => {
                alert(error.text());
                console.log(error.text());
                this._router.navigate(['login']);
            }
        );
    }

    checkCredentials(){
        if (localStorage.getItem("user") === null){
            // handle if you are in this already

            this._router.navigate(['Login']);
        }
    }
}