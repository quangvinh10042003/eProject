import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandWarrantyComponent } from './brand-warranty.component';

describe('BrandWarrantyComponent', () => {
  let component: BrandWarrantyComponent;
  let fixture: ComponentFixture<BrandWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandWarrantyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
