export interface QuizQuestion {
  question: string;
  options: string[];
  correct: string;
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
];