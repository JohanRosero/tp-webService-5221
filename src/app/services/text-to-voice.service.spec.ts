import { TestBed } from '@angular/core/testing';

import { TextToVoiceService } from './text-to-voice.service';

describe('TextToVoiceService', () => {
  let service: TextToVoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextToVoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
