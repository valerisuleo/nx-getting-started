import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
    TodosDashboardModule,
    todosDashboardRoutes,
} from '@nx-getting-started/todos/dashboard';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, TodosDashboardModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
