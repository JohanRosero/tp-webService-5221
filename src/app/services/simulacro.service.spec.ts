import { TestBed } from '@angular/core/testing';

import { SimulacroService } from './simulacro.service';

describe('SimulacroService', () => {
  let service: SimulacroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulacroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
