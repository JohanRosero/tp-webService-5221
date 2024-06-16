import { TestBed } from '@angular/core/testing';

import { Parcial2024Service } from './parcial2024.service';

describe('Parcial2024Service', () => {
  let service: Parcial2024Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Parcial2024Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
