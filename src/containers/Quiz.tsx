import React, { useState, useContext } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import { quizQuestions } from '../services/QuizService';
import { QuizContext } from '../contexts/QuizContext';
import { useNavigate } from 'react-router-dom';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const { setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    // Add the selected answer to the answers array
    setAnswers((prevAnswers: string[]) => [...prevAnswers, answer]);

    // Move to the next question or navigate to the result page
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/result');  // Navigate to the result page after the quiz
    }
  };

  return (
    <div>
      <QuizQuestion
        question={quizQuestions[currentQuestion].question}
        options={quizQuestions[currentQuestion].options}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;