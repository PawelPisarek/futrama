import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveQuotesCharacterComponent } from './five-quotes-character.component';

describe('FiveQuotesCharacterComponent', () => {
  let component: FiveQuotesCharacterComponent;
  let fixture: ComponentFixture<FiveQuotesCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveQuotesCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveQuotesCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
