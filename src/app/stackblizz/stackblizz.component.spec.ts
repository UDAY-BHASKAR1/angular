import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackblizzComponent } from './stackblizz.component';

describe('StackblizzComponent', () => {
  let component: StackblizzComponent;
  let fixture: ComponentFixture<StackblizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackblizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackblizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
