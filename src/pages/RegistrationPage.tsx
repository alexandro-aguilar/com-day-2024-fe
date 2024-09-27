import React, { useContext } from 'react';
import RegistrationForm from '../containers/RegistrationForm';
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const { user } = useContext(UserContext);

  if(user) {
    return <Navigate to='/quiz' replace />
  }

  return <RegistrationForm />;
};

export default RegistrationPage;