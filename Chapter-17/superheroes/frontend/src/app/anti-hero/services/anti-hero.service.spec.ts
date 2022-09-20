import { TestBed } from '@angular/core/testing';

import { AntiHeroService } from './anti-hero.service';

describe('AntiHeroService', () => {
  let service: AntiHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntiHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
