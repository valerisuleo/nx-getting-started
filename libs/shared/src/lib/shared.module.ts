import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapCardComponent } from './bootstrap-card/bootstrap-card.component';

@NgModule({
    imports: [CommonModule],
    declarations: [BootstrapCardComponent],
    exports: [BootstrapCardComponent],
})
export class SharedModule {}
