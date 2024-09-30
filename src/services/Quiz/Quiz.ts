import Answer from './Option';
import Question from './Question';
import QuizQuestionsDTO from './QuizQuestionsDTO';

export default class Quiz {
  private _questions: Array<Question>;

  constructor(questions: Array<Question>) {
    this._questions = questions;
  }

  get questions(): Array<Question> {
    return this._questions;
  }

  toJson() {
    return {
      questions: this.questions.map(question => question.toJson())
    }
  }

  toString() {
    return JSON.stringify(this.toJson())
  }

  static fromObject(rawQuestions: Array<QuizQuestionsDTO>): Quiz {
    const questions: Array<Question> = rawQuestions.map(
      question => {
        const answers = question.answers.map(answer => new Answer(answer.id, answer.text));
        return new Question(question.id, question.type, question.text, answers, question.rightAnswer)
      }
    );
    return new Quiz(questions);
  }
}