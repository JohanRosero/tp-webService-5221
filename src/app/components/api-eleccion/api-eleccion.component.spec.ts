import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEleccionComponent } from './api-eleccion.component';

describe('ApiEleccionComponent', () => {
  let component: ApiEleccionComponent;
  let fixture: ComponentFixture<ApiEleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiEleccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiEleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
