import {
    AfterContentChecked,
    AfterContentInit,
    Component,
    ContentChild,
} from '@angular/core';
import { ContentChildDecoratorComponent } from '../../content-child-decorator/content-child-decorator.component';

@Component({
    selector: 'app-after-content-child',
    templateUrl: './after-content-child.component.html',
    styleUrls: ['./after-content-child.component.scss'],
})
export class AfterContentChildComponent
    implements AfterContentInit, AfterContentChecked
{
    @ContentChild(ContentChildDecoratorComponent)
    contentChild!: ContentChildDecoratorComponent;
    message = '';

    constructor() {}

    ngAfterContentInit(): void {
        this.message = this.contentChild.message;

        console.log('Child AfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('Child AfterContentChecked');

        if (this.message !== this.contentChild.message) {
            this.contentChild.message = this.message;
        }
    }

    onClick(message: string): void {
        if (!message) {
            return;
        }

        this.message = message;
    }
}
