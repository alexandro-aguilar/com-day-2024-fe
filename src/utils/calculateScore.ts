import { quizQuestions } from '../services/QuizService';

export const calculateScore = (answers: string[]): number => {
  return answers.reduce((score, answer, idx) => {
    if (answer === quizQuestions[idx].correct) return score + 1;
    return score;
  }, 0);
};