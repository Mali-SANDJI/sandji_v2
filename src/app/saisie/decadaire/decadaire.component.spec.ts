import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecadaireComponent } from './decadaire.component';

describe('DecadaireComponent', () => {
  let component: DecadaireComponent;
  let fixture: ComponentFixture<DecadaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecadaireComponent]
    });
    fixture = TestBed.createComponent(DecadaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
