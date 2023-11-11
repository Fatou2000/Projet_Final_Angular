import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeValidationComponent } from './commande-validation.component';

describe('CommandeValidationComponent', () => {
  let component: CommandeValidationComponent;
  let fixture: ComponentFixture<CommandeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
