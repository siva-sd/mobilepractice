import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProddetailsComponent } from './proddetails.component';

describe('ProddetailsComponent', () => {
  let component: ProddetailsComponent;
  let fixture: ComponentFixture<ProddetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProddetailsComponent]
    });
    fixture = TestBed.createComponent(ProddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
