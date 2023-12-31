import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportationComponent } from './exportation.component';

describe('ExportationComponent', () => {
  let component: ExportationComponent;
  let fixture: ComponentFixture<ExportationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportationComponent]
    });
    fixture = TestBed.createComponent(ExportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
