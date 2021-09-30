import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content-child-decorator',
    templateUrl: './content-child-decorator.component.html',
    styleUrls: ['./content-child-decorator.component.scss'],
})
export class ContentChildDecoratorComponent {
    message = 'Hello from content Child Decorator Component';

    constructor() {}
}
