import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'bootstrap-card',
    templateUrl: './bootstrap-card.component.html',
    styleUrls: ['./bootstrap-card.component.scss'],
})
export class BootstrapCardComponent implements OnInit {
    @Input() width: string = '';
    
    constructor() {}

    ngOnInit(): void {}
}
