import { TestBed } from '@angular/core/testing';

import { FileSenderService } from './file-sender.service';

describe('FileSenderService', () => {
  let service: FileSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
