import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOperatorsComponent } from './crud-operators.component';

describe('CrudOperatorsComponent', () => {
  let component: CrudOperatorsComponent;
  let fixture: ComponentFixture<CrudOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
