import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/models/fadeAnimationIn';
import { CarsService } from 'src/app/services/cars.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-http-choices-simple-buttons-builder',
  templateUrl: './http-choices-simple-buttons-builder.component.html',
  styleUrls: ['./http-choices-simple-buttons-builder.component.css'],
  animations: [fadeInAnimation]
})
export class HttpChoicesSimpleButtonsBuilderComponent implements OnInit {
  questionToShow: any;
  currentQuestionId: any;
  currentQuestion: any;
  previousQuestionId: any;
  subSink = new SubSink();
  dataResponseFromBackend: any;

  constructor(private router: ActivatedRoute, private questionService: QuestionsService,
    private http: HttpClient, private carsService: CarsService, private route: Router) {
    this.router.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }


  async ngOnInit() {
    this.dataResponseFromBackend = []; // on initilise le tableau pour vider view lors du demarrage
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
    this.addPreviousQuestionToObject();
    this.getDataFromBackend();
  }

  getDataFromBackend() {
    if (!!this.currentQuestion) {
      this.subSink.add(this.http.post(environment.urlBackend + '/' +
        this.currentQuestion.urlHttpRequest, this.carsService.getParamsCar())
        .subscribe((data: []) => {

          this.dataResponseFromBackend = data;
          // if (this.dataResponseFromBackend.length == 1) {
          //   console.log(this.dataResponseFromBackend);
          //   this.nextQuestionRedirection(
          //     this.currentQuestion.nextQuestionId,
          //     this.dataResponseFromBackend[0],
          //     this.currentQuestion.id
          //   );
          // }

        }));
    }
  }


  addPreviousQuestionToObject() {
    if (!!this.previousQuestionId) {
      this.questionService.addPreviousQuestion(
        this.currentQuestionId,
        this.previousQuestionId
      );
    }
  }

  getCurrentQuestionData() {
    this.currentQuestion = this.questionService.findById(
      this.currentQuestionId
    );
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

}
