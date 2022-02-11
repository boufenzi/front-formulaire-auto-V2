import { fadeInAnimation } from './../../models/fadeAnimationIn';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-date-builder',
  templateUrl: './date-builder.component.html',
  styleUrls: ['./date-builder.component.css'],
  animations: [fadeInAnimation],
})
export class DateBuilderComponent implements OnInit, OnDestroy {
  questions = this.questionService.getQuestion();

  @Input() questionToShow: string;
  currentQuestion: any;
  currentQuestionId: string;
  previousQuestionId: string;
  dateForm = new FormGroup({
    jour: new FormControl('', Validators.required),
    mois: new FormControl('', Validators.required),
    annee: new FormControl('', Validators.required),
  });

  subSink = new SubSink();

  constructor(
    private route: Router,
    public questionService: QuestionsService,
    private router: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.questionToShow) {
      this.currentQuestion = this.questionService.findById(this.questionToShow);
      this.previousQuestionId = this.currentQuestion.previousQuestionId;
    } else {
      await this.router.paramMap.subscribe((param) => {
        //@ts-ignore
        this.previousQuestionId = param.params.previousQuestionId;

        //@ts-ignore
        this.currentQuestionId = param.params.id;

        if (!!this.previousQuestionId) {
          this.questionService.addPreviousQuestion(
            this.currentQuestionId,
            this.previousQuestionId
          );
        }

        this.currentQuestion = this.questionService.findById(
          this.currentQuestionId
        );
      });
    }
  }

  nextQuestionRedirection(idNextQuestion: number, currentQuestionId: string) {
    let response =
      this.dateForm.get('annee').value +
      '-' +
      this.dateForm.get('mois').value +
      '-' +
      this.dateForm.get('jour').value; // a inserer dans un tableau pour indiquer le reponse

    this.questionService.answerQuestion(this.currentQuestionId, response);
    let nextQuestion = this.questionService.findById(idNextQuestion);
    this.route.navigate([
      nextQuestion.typeComponent,
      { id: idNextQuestion, previousQuestionId: currentQuestionId },
    ]); // show selon type component de la next question
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

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
