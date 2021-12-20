import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashViewComponent } from './dash-view/dash-view.component';

export const todosDashboardRoutes: Route[] = [
    { path: '', component: DashViewComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [DashViewComponent],
})
export class TodosDashboardModule {}
