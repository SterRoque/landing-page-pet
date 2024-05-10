import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformationComponent } from './card-information.component';

describe('CardInformationComponent', () => {
  let component: CardInformationComponent;
  let fixture: ComponentFixture<CardInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
