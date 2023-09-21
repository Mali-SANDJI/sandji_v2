import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurPageComponent } from './erreur-page.component';

describe('ErreurPageComponent', () => {
  let component: ErreurPageComponent;
  let fixture: ComponentFixture<ErreurPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErreurPageComponent]
    });
    fixture = TestBed.createComponent(ErreurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
