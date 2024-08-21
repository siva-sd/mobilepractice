import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeLoginComponent } from './homelogin.component';

describe('UserHomeLoginComponent', () => {
  let component: UserHomeLoginComponent;
  let fixture: ComponentFixture<UserHomeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHomeLoginComponent]
    });
    fixture = TestBed.createComponent(UserHomeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
