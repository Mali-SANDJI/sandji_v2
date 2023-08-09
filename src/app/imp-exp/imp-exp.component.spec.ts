import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpExpComponent } from './imp-exp.component';

describe('ImpExpComponent', () => {
  let component: ImpExpComponent;
  let fixture: ComponentFixture<ImpExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpExpComponent]
    });
    fixture = TestBed.createComponent(ImpExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
