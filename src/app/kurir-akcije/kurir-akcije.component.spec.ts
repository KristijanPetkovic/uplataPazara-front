import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurirAkcijeComponent } from './kurir-akcije.component';

describe('KurirAkcijeComponent', () => {
  let component: KurirAkcijeComponent;
  let fixture: ComponentFixture<KurirAkcijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurirAkcijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurirAkcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
