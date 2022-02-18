import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/models/fadeAnimationIn';
import { QuestionsService } from 'src/app/services/questions.service';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-http-select-balise-builder',
  templateUrl: './http-select-balise-builder.component.html',
  styleUrls: ['./http-select-balise-builder.component.css'], 
  animations: [fadeInAnimation]
})
export class HttpSelectBaliseBuilderComponent implements OnInit {
  questionToShow: any;
  dataResponseFromBackend: any[];
  currentQuestionId: any;
  currentQuestion: any;
  subSink = new SubSink();
  previousQuestionId: string;
  selectBaliseId: any;
 

  constructor(private router: ActivatedRoute, private questionService: QuestionsService,
    private http: HttpClient, private route: Router) { }

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
    this.selectBaliseId = this.currentQuestion.selectedDefaultValue;
  }

  getDataFromBackend() {
    if(!!this.currentQuestion) {
      this.subSink.add(this.http.get(environment.urlBackend + '/' +
       this.currentQuestion.urlHttpRequest)
      .subscribe((data:[]) =>  {this.dataResponseFromBackend = data;}));
      }
  }
  nextQuestionRedirection(idNextQuestion: number, currentQuestionId: number) {
    this.questionService.answerQuestion(
      this.currentQuestionId,
      this.selectBaliseId
    );
    let nextQuestion = this.questionService.findById(idNextQuestion);
    this.route.navigate([
      nextQuestion.typeComponent,
      { id: idNextQuestion, previousQuestionId: currentQuestionId },
    ]); // show selon type component de la next question
  }
}
