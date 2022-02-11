import { Injectable } from '@angular/core';
//@ts-ignore
import Questions from '../models/questions copy.json';
@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  questions = Questions;
  constructor() {}

  findById(id: any) {
    let question = this.questions.find((question) => question.id === id);
    return question;
  }

  getQuestion() {
    return this.questions;
  }

  answerQuestion(questionId: string, response: any) {
    // let questions = this.questions
    //   .find((question) => question.id == questionId)
    //   .map((quest) => (quest.reponseChoisie = response));
    this.questions = this.questions.map((quest) => {
      if (quest.id == questionId) {
        quest.reponseChoisie = response;
      }
      return quest;
    });
    console.log(this.questions);
  }
  addPreviousQuestion(questionId: string, previousQuestion: string) {
    this.questions = this.questions.map((quest) => {
      if (quest.id == questionId) {
        quest.previousQuestionId = previousQuestion;
      }
      return quest;
    });
  }
}
