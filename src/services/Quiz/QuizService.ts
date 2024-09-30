import axios, { AxiosResponse } from 'axios';
import QuizQuestionsDTO from './QuizQuestionsDTO';
import Endpoints from '../../utils/Endpoints';
import Types from '../../utils/types';
import Quiz from './Quiz';

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: string;
}

export default class QuizService {
  async execute(type: Types): Promise<Quiz> {
    const response: AxiosResponse<Array<QuizQuestionsDTO>> = await axios.get(
      `${Endpoints.getQuiz}/${type}`
    );
    const quiz: Quiz = Quiz.fromObject(response.data);
    return  quiz;
  }
}