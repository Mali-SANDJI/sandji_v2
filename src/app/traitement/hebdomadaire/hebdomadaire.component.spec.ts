import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebdomadaireComponent } from './hebdomadaire.component';

describe('HebdomadaireComponent', () => {
  let component: HebdomadaireComponent;
  let fixture: ComponentFixture<HebdomadaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HebdomadaireComponent]
    });
    fixture = TestBed.createComponent(HebdomadaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
