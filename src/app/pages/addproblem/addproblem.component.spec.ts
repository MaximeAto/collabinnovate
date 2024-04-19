import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproblemComponent } from './addproblem.component';

describe('AddproblemComponent', () => {
  let component: AddproblemComponent;
  let fixture: ComponentFixture<AddproblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
