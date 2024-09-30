export default class Answer {
  private _question: number;
  private _answer: number;

  constructor(question: number, answer: number) {
    this._question = question;
    this._answer = answer;
  }

  get question(): number {
    return this._question;
  }

  get answer(): number {
    return this._answer;
  }
}