import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodosDashboardModule } from '@nx-getting-started/todos/dashboard';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, TodosDashboardModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
