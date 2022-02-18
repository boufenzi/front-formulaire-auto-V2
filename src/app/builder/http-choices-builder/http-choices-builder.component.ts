import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/models/fadeAnimationIn';
import { QuestionsService } from 'src/app/services/questions.service';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';
declare var require: any;
import { CarsService } from 'src/app/services/cars.service';
import { Cars } from 'src/app/models/Cars';
@Component({
  selector: 'app-http-choices-builder',
  templateUrl: './http-choices-builder.component.html',
  styleUrls: ['./http-choices-builder.component.css'],
  animations: [fadeInAnimation],
})
export class HttpChoicesBuilderComponent implements OnInit, OnDestroy {

  currentQuestion: any;
  @Input() questionToShow: string;
  previousQuestionId: string;
  subSink = new SubSink();
  currentQuestionId: string;
  dataResponseFromBackend: any;

  constructor(private router: ActivatedRoute, private http: HttpClient,
    private questionService: QuestionsService, private route: Router,
    private carsService: CarsService) {
    // permet de reload component if request is from the same url
    this.router.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

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
    this.addPreviousQuestionToObject();
    this.getDataFromBackend();
    // if(this.carsService.getCars() && this.carsService.getCars().length > 0) {
    //   this.dataResponseFromBackend = this.carsService.getCars();
    // }else 

  }

  getDataFromBackend() {
    if (!!this.currentQuestion) {
      this.subSink.add(this.http.post(environment.urlBackend + '/' +
        this.currentQuestion.urlHttpRequest, this.carsService.getParamsCar())
        .subscribe((data: []) => {
          this.dataResponseFromBackend = data;
          this.carsService.Cars(data)
        }));
    }
  }
  getCurrentQuestionData() {
    this.currentQuestion = this.questionService.findById(
      this.currentQuestionId
    );
  }
  addPreviousQuestionToObject() {
    if (!!this.previousQuestionId) {
      this.questionService.addPreviousQuestion(
        this.currentQuestionId,
        this.previousQuestionId
      );
    }
  }
  putDataforUrlParams(response) {
    this.carsService.putDataFromJsonObject(this.currentQuestion, response);
  }

  nextQuestionRedirection(
    idNextQuestion: string,
    responseId: string,
    questionId: string
  ) {
    this.putDataforUrlParams(responseId);
    this.questionService.answerQuestion(questionId, responseId);
    //return true;
    let nextQuestion = this.questionService.findById(idNextQuestion);
    this.route.navigate([
      nextQuestion.typeComponent,
      { id: idNextQuestion, previousQuestionId: questionId },
    ]); // show selon type component de la next question
  }

  previousQuestion(previousQuestion: any) {
    console.log(previousQuestion);
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


