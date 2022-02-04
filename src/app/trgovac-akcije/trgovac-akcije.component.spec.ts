import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrgovacAkcijeComponent } from './trgovac-akcije.component';

describe('TrgovacAkcijeComponent', () => {
  let component: TrgovacAkcijeComponent;
  let fixture: ComponentFixture<TrgovacAkcijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrgovacAkcijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrgovacAkcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
