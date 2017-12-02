/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClaritydesignService } from './claritydesign.service';

describe('ClaritydesignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClaritydesignService]
    });
  });

  it('should ...', inject([ClaritydesignService], (service: ClaritydesignService) => {
    expect(service).toBeTruthy();
  }));
});
