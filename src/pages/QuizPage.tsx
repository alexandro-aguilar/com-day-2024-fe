import { UserContext } from '../contexts/UserContext';
import React, { Fragment, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../containers/Header';
import QuizForm from '../containers/QuizForm';

const QuizPage: React.FC = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Fragment>
      <Header />
      <QuizForm />
    </Fragment>
  );
};

export default QuizPage;