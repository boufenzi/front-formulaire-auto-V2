import { fadeInAnimation } from './../../models/fadeAnimationIn';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-multi-choice-builder',
  templateUrl: './multi-choice-builder.component.html',
  styleUrls: ['./multi-choice-builder.component.css'],
  animations: [fadeInAnimation],
})
export class MultiChoiceBuilderComponent implements OnInit, OnDestroy {
  currentQuestion: any;
  @Input() questionToShow: string;
  previousQuestionId: string;
  subSink = new SubSink();
  currentQuestionId: string;

  constructor(
    private route: Router,
    public questionService: QuestionsService,
    private router: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.questionToShow) {
      this.currentQuestionId = this.questionToShow;
      //  this.previousQuestionId = this.currentQuestion.previousQuestionId;
    } else {
      await this.router.paramMap.subscribe((param) => {
        //@ts-ignore
        this.previousQuestionId = param.params.previousQuestionId;
        //@ts-ignore
        this.currentQuestionId = param.params.id;
      });
    }

    this.getCurrentQuestionData();
    this.getPreviousQuestionIdFromObjectIfNotInRouter();
    this.addPreviousQuestionToObject();
  }
  getCurrentQuestionData() {
    this.currentQuestion = this.questionService.findById(
      this.currentQuestionId
    );
  }

  getPreviousQuestionIdFromObjectIfNotInRouter() {
    if (!this.previousQuestionId)
      this.previousQuestionId = this.currentQuestion.previousQuestionId;
  }

  addPreviousQuestionToObject() {
    if (!!this.previousQuestionId) {
      this.questionService.addPreviousQuestion(
        this.currentQuestionId,
        this.previousQuestionId
      );
    }
  }

  nextQuestionRedirection(
    idNextQuestion: number,
    responseId: string,
    questionId: string
  ) {
    this.questionService.answerQuestion(questionId, responseId);
    //return true;
    let nextQuestion = this.questionService.findById(idNextQuestion);
    this.route.navigate([
      nextQuestion.typeComponent,
      { id: idNextQuestion, previousQuestionId: questionId },
    ]); // show selon type component de la next question
  }

  previousQuestion(previousQuestion: any) {
    this.route.navigate([
      previousQuestion.typeComponent,
      {
        id: previousQuestion.id,
        previousQuestionId: previousQuestion.previousQuestionId,
      },
    ]); // show selon type component de la next question
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
