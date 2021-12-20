import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            [
                {
                    path: 'posts-auth',
                    loadChildren: () =>
                        import('@nx-getting-started/posts/auth').then(
                            (module) => module.PostsAuthModule
                        ),
                },
            ],
            { initialNavigation: 'enabledBlocking' }
        ),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
