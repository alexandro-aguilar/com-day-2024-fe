import React, { useState, useContext, useEffect } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import QuizService from '../services/Quiz/QuizService';
import { QuizContext } from '../contexts/QuizContext';
import { useNavigate } from 'react-router-dom';
import QuizEntity from '../services/Quiz/Quiz';
import Answer from '../services/Quiz/Answer';
import Question from '../services/Quiz/Question';

const Quiz: React.FC = () => {
  const [quiz, setQuiz] = useState<QuizEntity>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const { setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  const quizService = new QuizService();

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    setLoading(true);
    try {
      const quiz: QuizEntity = await quizService.execute(1);
      setQuiz(quiz);
      setLoading(false);
    } catch(error) {
      console.error('try again', error);
      setLoading(false);
    }
  }

  const handleAnswer = (answer: Answer) => {
    // Add the selected answer to the answers array
    setAnswers((prevAnswers: Answer[]) => [...prevAnswers, answer]);

    // Move to the next question or navigate to the result page
    if (currentQuestion < (quiz as QuizEntity).questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/result');  // Navigate to the result page after the quiz
    }
  };

  if(loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-2xl font-semibold mb-4">Loading Quiz...</p>
          <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <QuizQuestion
        question={ quiz?.questions[currentQuestion] as Question }
        onAnswer={ handleAnswer }
      />
    </div>
  );
};

export default Quiz;