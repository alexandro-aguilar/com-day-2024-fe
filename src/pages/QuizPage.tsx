import { UserContext } from '../contexts/UserContext';
import React, { Fragment, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../containers/Header';
import Quiz from '../containers/Quiz';

const QuizPage: React.FC = () => {
  const { user } = useContext(UserContext);

  // If no user is registered, redirect to the registration page
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Fragment>
      <Header />
      <Quiz />
    </Fragment>
  );
};

export default QuizPage;