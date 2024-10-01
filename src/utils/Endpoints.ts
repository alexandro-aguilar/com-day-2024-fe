export default class Endpoints {
  public static readonly baseURL = import.meta.env.VITE_BASE_URL;
  public static readonly createUser = `${this.baseURL}/users`;
  public static readonly getQuiz = `${this.baseURL}/quiz`;
  public static readonly saveScore = `${this.baseURL}/score`;
}