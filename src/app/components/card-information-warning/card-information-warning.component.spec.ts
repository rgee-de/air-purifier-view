import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformationWarningComponent } from './card-information-warning.component';

describe('CardInformationWarningComponent', () => {
  let component: CardInformationWarningComponent;
  let fixture: ComponentFixture<CardInformationWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInformationWarningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInformationWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
