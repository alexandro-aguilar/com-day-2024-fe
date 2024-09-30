import Option from './Option';

export default class Question {
  private _id: number;
  private _type: number;
  private _text: string;
  private _options: Array<Option>;
  private _rightAnswer: number;

  constructor(id: number, type: number, text: string, options: Array<Option>, rightAnswer: number) {
    this._id = id;
    this._text = text;
    this._type = type;
    this._options = options;
    this._rightAnswer = rightAnswer;
  }

  get id(): number {
    return this._id;
  }
  
  get type(): number {
    return this._type;
  }
  
  get text(): string {
    return this._text;
  }

  get options(): Array<Option> {
    return this._options;
  }

  get rightAnswer(): number {
    return this._rightAnswer;
  }

  toJson() {
    return {
      id: this._id,
      type: this._type,
      text: this._text,
      options: this._options.map(option => option.toJson()),
      rightAnswer: this._rightAnswer
    }
  }
}