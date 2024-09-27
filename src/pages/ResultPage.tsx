import React from 'react';
import Result from '../containers/Result';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const ResultPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate back to the registration page
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Result />
      {/* Add the button to go back to the registration page */}
      <Button label="Go Back to Registration" onClick={handleGoBack} />
    </div>
  );
};

export default ResultPage;