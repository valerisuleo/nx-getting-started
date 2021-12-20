import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { todosDashboardRoutes } from '@nx-getting-started/todos/dashboard';
const routes: Routes = [
    { path: 'todos-dashboard', children: todosDashboardRoutes },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
