import React, { createContext, useState, ReactNode } from 'react';
import Answer from '../services/Quiz/Answer';
import Quiz from '../services/Quiz/Quiz';

// Define the types for the context
interface QuizContextType {
  quiz: Quiz | null;
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
  clearAnswers: () => void;
  setQuiz: (quiz: Quiz) => void;
  clearQuiz: () => void;
}

// Create the QuizContext with default values
export const QuizContext = createContext<QuizContextType>({
  quiz: null,
  answers: [],
  setAnswers: () => {},
  clearAnswers: () => {},
  setQuiz: () => {},
  clearQuiz: () => {}
});

const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  const clearQuiz = () => {
    setQuiz(null);
  }

  const clearAnswers = () => {
    setAnswers([]);
  }

  return (
    <QuizContext.Provider value={{ answers, setAnswers, clearAnswers, quiz, setQuiz, clearQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;