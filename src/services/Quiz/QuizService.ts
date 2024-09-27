import axios, { AxiosResponse } from 'axios';
import QuizQuestionsDTO from './QuizQuestionsDTO';
import Endpoints from '../../utils/Endpoints';
import Types from '../../utils/types';

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: string;
}

export default class QuizService {
  async execute(type: Types): Promise<void> {
    const response: AxiosResponse<QuizQuestionsDTO> = await axios.get(
      `${Endpoints.getQuiz}/${type}`
    );
    console.log(response)
  }
}
export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris"
  },
  {
    question: "What is the currency of the USA?",
    options: ["Euro", "Dollar", "Pound", "Yen"],
    correct: "Dollar"
  }
]