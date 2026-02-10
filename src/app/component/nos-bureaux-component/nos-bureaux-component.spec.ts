import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosBureauxComponent } from './nos-bureaux-component';

describe('NosBureauxComponent', () => {
  let component: NosBureauxComponent;
  let fixture: ComponentFixture<NosBureauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosBureauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosBureauxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
