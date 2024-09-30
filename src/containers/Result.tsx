import React, { useContext } from 'react';
import ResultCard from '../components/ResultCard';
import { QuizContext } from '../contexts/QuizContext';
// import { calculateScore } from '../utils/calculateScore';

const Result: React.FC = () => {
  const { answers } = useContext(QuizContext);
  // const score = calculateScore(answers);

  return <ResultCard score={5} total={answers.length} />;
};

export default Result;