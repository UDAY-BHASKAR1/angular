import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayReactformComponent } from './array-reactform.component';

describe('ArrayReactformComponent', () => {
  let component: ArrayReactformComponent;
  let fixture: ComponentFixture<ArrayReactformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayReactformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayReactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
