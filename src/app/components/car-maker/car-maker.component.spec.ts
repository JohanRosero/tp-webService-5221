import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMakerComponent } from './car-maker.component';

describe('CarMakerComponent', () => {
  let component: CarMakerComponent;
  let fixture: ComponentFixture<CarMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarMakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
