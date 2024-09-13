import React, { createContext, useState, ReactNode } from 'react';

// Define the types for the context
interface QuizContextType {
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

// Create the QuizContext with default values
export const QuizContext = createContext<QuizContextType>({
  answers: [],
  setAnswers: () => {}, // Placeholder function
});

const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <QuizContext.Provider value={{ answers, setAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;