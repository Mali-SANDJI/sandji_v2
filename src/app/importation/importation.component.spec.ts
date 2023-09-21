import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportationComponent } from './importation.component';

describe('ImportationComponent', () => {
  let component: ImportationComponent;
  let fixture: ComponentFixture<ImportationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportationComponent]
    });
    fixture = TestBed.createComponent(ImportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
