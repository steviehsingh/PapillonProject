import { TestBed } from '@angular/core/testing';

import { QuestionTemplateService } from './question-template.service';

describe('QuestionTemplateService', () => {
  let service: QuestionTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
