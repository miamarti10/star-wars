import { TestBed } from '@angular/core/testing';

import { FilmResolver } from './film.resolver';

describe('FilmResolver', () => {
  let service: FilmResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
