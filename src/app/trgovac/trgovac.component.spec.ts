import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrgovacComponent } from './trgovac.component';

describe('TrgovacComponent', () => {
  let component: TrgovacComponent;
  let fixture: ComponentFixture<TrgovacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrgovacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrgovacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
