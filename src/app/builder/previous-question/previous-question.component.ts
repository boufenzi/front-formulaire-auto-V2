import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-previous-question',
  templateUrl: './previous-question.component.html',
  styleUrls: ['./previous-question.component.css'],
})
export class PreviousQuestionComponent implements OnInit {
  @Input() currentQuestion: any;
  @Output() previousQuestionEvent: EventEmitter<any> = new EventEmitter();
  constructor(public questionService: QuestionsService) {}

  ngOnInit(): void {}
  previousQuestion(previousQuestionId: string) {
    // recuperer l'object precédent
    let previousQuestion = this.questionService.findById(previousQuestionId);

    this.previousQuestionEvent.emit(previousQuestion);
    // show selon type component de la next question
  }
}
