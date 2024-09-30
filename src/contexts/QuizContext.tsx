import React, { createContext, useState, ReactNode } from 'react';
import Answer from '../services/Quiz/Answer';

// Define the types for the context
interface QuizContextType {
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
}

// Create the QuizContext with default values
export const QuizContext = createContext<QuizContextType>({
  answers: [],
  setAnswers: () => {}, // Placeholder function
});

const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  return (
    <QuizContext.Provider value={{ answers, setAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;