import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    public login() {
        return of({
            id: 1,
            name: 'Logan',
            email: 'logan@ga.co',
        });
    }
}
