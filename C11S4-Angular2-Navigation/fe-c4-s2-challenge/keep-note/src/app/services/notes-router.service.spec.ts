import { TestBed } from '@angular/core/testing';

import { NotesRouterService } from './notes-router.service';

describe('NotesRouterService', () => {
  let service: NotesRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
