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
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-date-builder',
  templateUrl: './date-builder.component.html',
  styleUrls: ['./date-builder.component.css'],
  animations: [fadeInAnimation],
})
export class DateBuilderComponent implements OnInit, OnDestroy {
  questions = this.questionService.getQuestion();

  @Input() questionToShow: string;
  incrementValue: number = 1;
  currentQuestion: any;
  currentQuestionId: string;
  previousQuestionId: string;
  dateLimit = new Date().getFullYear() + 1;
  dateForm = new FormGroup({
    jour: new FormControl('', [Validators.required, Validators.min(1),
    Validators.max(31)]),
    mois: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(12),
    ]),
    annee: new FormControl('', [
      Validators.required,
      Validators.min(1945),
      Validators.max(this.dateLimit)
    ]),
  });

  subSink = new SubSink();

  constructor(
    private route: Router,
    public questionService: QuestionsService,
    private router: ActivatedRoute,
    private carsService: CarsService,
  ) {
    this.router.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  async ngOnInit() {
    if (this.questionToShow) {
      this.currentQuestionId = this.questionToShow;
    } else {
      await this.router.paramMap.subscribe((param) => {
        //@ts-ignore
        this.currentQuestionId = param.params.id;
        //@ts-ignore
        this.previousQuestionId = param.params.previousQuestionId;
      });
    }
    this.getCurrentQuestionData();
    this.getPreviousQuestionIdFromObjectIfNotInRouter();
    this.setDefaultValueForForm(this.currentQuestion);
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

  putDataforUrlParams() {
    this.carsService.putDataFromJsonObject(this.currentQuestion,
      this.dateForm.get('annee').value);

  }

  nextQuestionRedirection(idNextQuestion: number, currentQuestionId: string) {
    this.putDataforUrlParams();
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

  previousQuestion(previousQuestion: any) {
    this.route.navigate([
      previousQuestion.typeComponent,
      {
        id: previousQuestion.id,
        previousQuestionId: previousQuestion.previousQuestionId,
      },
    ]); // show selon type component de la next question
  }

  setDefaultValueForForm(currentQuestion) {
    this.dateForm.get('jour').setValue(currentQuestion.defaultJour);
    this.dateForm.get('mois').setValue(currentQuestion.defaultMois);
    this.dateForm.get('annee').setValue(currentQuestion.defaultAnnee);
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
