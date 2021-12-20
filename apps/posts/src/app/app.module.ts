import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsIndexComponent } from './posts-index/posts-index.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'libs/shared/src';

@NgModule({
    declarations: [AppComponent, PostsIndexComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
