import React, { useContext, useEffect, useState } from 'react';
import ResultCard from '../components/ResultCard';
import { QuizContext } from '../contexts/QuizContext';
import ScoreService from '../services/Score/ScoreService';
import Score from '../services/Score/Score';
import { UserContext } from '../contexts/UserContext';

const Result: React.FC = () => {
  const { answers, quiz } = useContext(QuizContext);
  const scoreService = new ScoreService();
  const [scoreValue, setScore] = useState<number>(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    saveScore();
  }, []);

  const saveScore = async () => {
    const score: number = calculateScore();
    setScore(score);
    try {
      await scoreService.execute(new Score(user?.email as string, score))
    } catch(error) {
      console.error(error);
    }
  }

  const calculateScore = (): number => {
    const score: number = answers.reduce((prev, curr) => {
      const question = quiz?.questions.find(question => question.id === curr.question);
      return question?.rightAnswer === curr.answer ? prev + 1 : prev;
    }, 0);
    return score;
  }

  return <ResultCard score={ scoreValue } total={answers.length} />;
};

export default Result;