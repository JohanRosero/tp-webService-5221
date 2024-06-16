import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parcial2024Component } from './parcial2024.component';

describe('Parcial2024Component', () => {
  let component: Parcial2024Component;
  let fixture: ComponentFixture<Parcial2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parcial2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Parcial2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
