import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question-routing',
  templateUrl: './question-routing.component.html',
  styleUrls: ['./question-routing.component.css'],
  animations: [],
})
export class QuestionRoutingComponent implements OnInit {
  currentQuestion: any;
  firstQuestion: string = 'mise_ciculationQuestion';

  constructor(public questionService: QuestionsService) {}

  ngOnInit(): void {
    // we get the first question and get the right component to show first
    this.currentQuestion = this.questionService.findById(this.firstQuestion);
  }
  /*
  nextQuestionRedirection(idNextQuestion: number, responseId: number) {
    console.log(idNextQuestion); // a inserer dans un tableau pour indiquer le reponse
    let nextQuestion = this.questionService.findById(idNextQuestion);
    this.route.navigate([nextQuestion.typeComponent, idNextQuestion]); // show selon type component de la next question
  }
  */
}
