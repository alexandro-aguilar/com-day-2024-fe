import React, { useState, useContext, ChangeEvent } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setUser({ username });
    navigate('/quiz');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Register</h2>
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
        <Button label="Register" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default RegistrationForm;