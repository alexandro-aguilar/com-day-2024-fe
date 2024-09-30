import React, { Fragment, useContext } from 'react';
import Result from '../containers/Result';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { UserContext } from '../contexts/UserContext';
import Header from '../containers/Header';

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleGoBack = () => {
    // Navigate back to the registration page
    navigate('/');
  };

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Fragment>
      <Header/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Result />
        {/* Add the button to go back to the registration page */}
        <Button label="Go Back to Registration" onClick={handleGoBack} />
      </div>
    </Fragment>
  );
};

export default ResultPage;