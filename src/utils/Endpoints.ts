export default class Endpoints {
  public static readonly baseURL = 'http://localhost:3000';
  public static readonly createUser = `${this.baseURL}/users`;
  public static readonly getQuiz = `${this.baseURL}/quiz`;
  public static readonly saveScore = `${this.baseURL}/score`;
}