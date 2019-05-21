import { TestBed } from '@angular/core/testing';

import { UiTestService } from './ui-test.service';

describe('UiTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiTestService = TestBed.get(UiTestService);
    expect(service).toBeTruthy();
  });
});
