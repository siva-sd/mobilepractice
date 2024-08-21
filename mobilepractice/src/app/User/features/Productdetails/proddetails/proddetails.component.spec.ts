import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartdetailsComponent } from './proddetails.component';


describe('ProddetailsComponent', () => {
  let component: CartdetailsComponent;
  let fixture: ComponentFixture<CartdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartdetailsComponent]
    });
    fixture = TestBed.createComponent(CartdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
