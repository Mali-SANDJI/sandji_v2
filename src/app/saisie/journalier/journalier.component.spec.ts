import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalierComponent } from './journalier.component';

describe('JournalierComponent', () => {
  let component: JournalierComponent;
  let fixture: ComponentFixture<JournalierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JournalierComponent]
    });
    fixture = TestBed.createComponent(JournalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
