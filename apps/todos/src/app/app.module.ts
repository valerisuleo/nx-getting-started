import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodosDashboardModule } from '@nx-getting-started/todos/dashboard';
import { TodosIndexComponent } from './todos-index/todos-index.component';
import { SharedModule } from 'libs/shared/src';

@NgModule({
    declarations: [AppComponent, TodosIndexComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TodosDashboardModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
