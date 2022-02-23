import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplataAkcijeComponent } from './uplata-akcije.component';

describe('UplataAkcijeComponent', () => {
  let component: UplataAkcijeComponent;
  let fixture: ComponentFixture<UplataAkcijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplataAkcijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplataAkcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
