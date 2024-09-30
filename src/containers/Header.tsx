import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { QuizContext } from '../contexts/QuizContext';

const Header: React.FC = () => {
  const { user, clearUser } = useContext(UserContext);
  const { clearAnswers, clearQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearQuiz();
    clearAnswers();
    clearUser();
    navigate('/');
  };

  return (
    <header 
      className="text-white py-4 px-6 flex justify-between items-center header"
    >
      <h1 className="text-xl font-bold">Caylent</h1>
      {user && (
        <div className="flex items-center space-x-4">
          <span className="text-lg" style={{textOverflow: "ellipsis"}}>{(user.name).split(" ")[0]}</span>
          <Button label='Salir' onClick={handleLogout}/>
        </div>
      )}
    </header>
  );
};

export default Header;