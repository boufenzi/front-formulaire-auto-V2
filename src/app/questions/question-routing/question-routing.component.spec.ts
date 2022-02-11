import { QuestionsService } from 'src/app/services/questions.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRoutingComponent } from './question-routing.component';

describe('QuestionRoutingComponent', () => {
  let component: QuestionRoutingComponent;
  let fixture: ComponentFixture<QuestionRoutingComponent>;
  let questionService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionRoutingComponent],
      providers: [QuestionsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    questionService = TestBed.get(QuestionsService);
  });

  it('should json length be greater than 0', () => {
    expect(Object.keys(questionService.findById('1')).length).toBeGreaterThan(
      0
    );
  });
});
