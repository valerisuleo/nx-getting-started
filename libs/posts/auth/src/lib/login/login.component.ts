import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'posts-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService) {}

    public ngOnInit(): void {}

    public signIn(): void {
        this.authService.login().subscribe({
            next: (data) => {
                console.log('auth', data);
            },
        });
    }
}
