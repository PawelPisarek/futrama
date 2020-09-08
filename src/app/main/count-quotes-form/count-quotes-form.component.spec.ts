import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountQuotesFormComponent } from './count-quotes-form.component';

describe('CountQuotesFormComponent', () => {
  let component: CountQuotesFormComponent;
  let fixture: ComponentFixture<CountQuotesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountQuotesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountQuotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
