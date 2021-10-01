import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHooksChildComponent } from './all-hooks-child.component';

describe('AllHooksChildComponent', () => {
  let component: AllHooksChildComponent;
  let fixture: ComponentFixture<AllHooksChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHooksChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHooksChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
