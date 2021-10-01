/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-all-hooks-child',
    templateUrl: './all-hooks-child.component.html',
    styleUrls: ['./all-hooks-child.component.scss'],
})
export class AllHooksChildComponent
    implements
        OnChanges,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    @Input() hooksLog: Array<string> = [];

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.hooksLog.push('5. Child ~~ #OnChanges');
        console.log('Child ~~ #OnChanges');
    }

    ngOnInit(): void {
        this.hooksLog.push('6. Child ~~ #OnInit');
        console.log('Child ~~ #OnInit');
    }

    ngDoCheck(): void {
        this.hooksLog.push('7. Child ~~ #DoCheck');
        console.log('Child ~~ #DoCheck');
    }

    ngAfterContentInit(): void {
        this.hooksLog.push('8. Child ~~ #AfterContentInit');
        console.log('Child ~~ #AfterContentInit');
    }

    ngAfterContentChecked(): void {
        this.hooksLog.push('9. Child ~~ #AfterContentChecked');
        console.log('Child ~~ #AfterContentChecked');
    }

    ngAfterViewInit(): void {
        this.hooksLog.push('10. Child ~~ #AfterViewInit');
        console.log('Child ~~ #AfterViewInit');
    }

    ngAfterViewChecked(): void {
        this.hooksLog.push('11. Child ~~ #AfterViewChecked');
        console.log('Child ~~ #AfterViewChecked');
    }

    ngOnDestroy(): void {
        this.hooksLog.push('14. Child ~~ #OnDestroy');
        console.log('Child ~~ #OnDestroy');
    }
}
