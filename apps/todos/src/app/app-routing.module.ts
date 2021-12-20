import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { todosDashboardRoutes } from '@nx-getting-started/todos/dashboard';
import { TodosIndexComponent } from './todos-index/todos-index.component';
const routes: Routes = [
    { path: 'todos-dashboard', children: todosDashboardRoutes },
    { path: 'todos', component: TodosIndexComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
