import { fadeInAnimation } from './../../models/fadeAnimationIn';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-input-builder',
  templateUrl: './input-builder.component.html',
  styleUrls: ['./input-builder.component.css'],
  animations: [fadeInAnimation],
})
export class InputBuilderComponent implements OnInit, OnDestroy {
  questions = this.questionService.getQuestion();
  currentQuestion: any;
  currentQuestionId: string;
  previousQuestionId: string;

  inputForm = new FormGroup({
    inputBuilderName: new FormControl('', Validators.required),
  });

  subSink = new SubSink();

  constructor(
    private route: Router,
    public questionService: QuestionsService,
    private router: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.subSink.add(
      this.router.paramMap.subscribe((param) => {
        //@ts-ignore
        this.previousQuestionId = param.params.previousQuestionId;
        //@ts-ignore
        this.currentQuestionId = param.params.id;

        this.questionService.addPreviousQuestion(
          this.currentQuestionId,
          this.previousQuestionId
        );

        this.currentQuestion = this.questionService.findById(
          this.currentQuestionId
        );
      })
    );
  }

  previousQuestion(previousQuestionId: string) {
    let previousQuestion = this.questionService.findById(previousQuestionId);
    this.route.navigate([
      previousQuestion.typeComponent,
      {
        id: previousQuestion.id,
        previousQuestionId: previousQuestion.previousQuestionId,
      },
    ]); // show selon type component de la next question
  }

  nextQuestionRedirection(idNextQuestion: number, currentQuestionId: number) {
    this.questionService.answerQuestion(
      this.currentQuestionId,
      this.inputForm.get('inputBuilderName').value
    );
    let nextQuestion = this.questionService.findById(idNextQuestion);
    this.route.navigate([
      nextQuestion.typeComponent,
      { id: idNextQuestion, previousQuestionId: currentQuestionId },
    ]); // show selon type component de la next question
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
