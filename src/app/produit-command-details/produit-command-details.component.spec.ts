import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCommandDetailsComponent } from './produit-command-details.component';

describe('ProduitCommandDetailsComponent', () => {
  let component: ProduitCommandDetailsComponent;
  let fixture: ComponentFixture<ProduitCommandDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitCommandDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCommandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
