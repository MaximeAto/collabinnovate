import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitsolutionComponent } from './submitsolution.component';

describe('SubmitsolutionComponent', () => {
  let component: SubmitsolutionComponent;
  let fixture: ComponentFixture<SubmitsolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitsolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
