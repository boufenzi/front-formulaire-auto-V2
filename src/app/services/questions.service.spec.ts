import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';
//@ts-ignore
import Questions from '../models/questions copy.json';
describe('QuestionsService', () => {
  it('json file should have data in it', () => {
    expect(Questions).not.toBeNull();
  });
});
