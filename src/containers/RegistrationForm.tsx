import Types from '../utils/types';
import User from '../services/User/User';
import Button from '../components/Button';
import ComboBox from '../components/ComboBox';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import { UserContext } from '../contexts/UserContext';
import UserService from '../services/User/UserService';
import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<Types>(1);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const userService = new UserService();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const user = new User(email, name, role);
    try {
      await userService.execute(user);
      setUser(user);
      navigate('/quiz');
    } catch(error) {
      console.error('try again', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign-up</h2>
          <InputField
            label="Email"
            type="text"
            value={email}
            required={true}
            autoComplete="off"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <InputField
            label="Name"
            type="text"
            value={name}
            required={true}
            autoComplete="off"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <ComboBox
            role={role}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setRole(Number.parseInt(e.target.value))}
          />
          <Button type="submit" label="Join the Rocketship" />
          <div>
            <center className="info">
              <a href="https://caylent.com/">¿What's Caylent?</a>
            </center>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
