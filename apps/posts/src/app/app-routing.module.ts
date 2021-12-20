import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsIndexComponent } from './posts-index/posts-index.component';

const routes: Routes = [
    {
        path: 'posts-auth',
        loadChildren: () =>
            import('@nx-getting-started/posts/auth').then(
                (module) => module.PostsAuthModule
            ),
    },
    { path: 'posts', component: PostsIndexComponent },
    // { path: '', pathMatch: 'full', redirectTo: 'posts' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
