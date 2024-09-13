import React from 'react';
import AppRoutes from './routes';
import UserProvider from './contexts/UserContext';
import QuizProvider from './contexts/QuizContext';
import './index.css'

const App: React.FC = () => (
  <UserProvider>
    <QuizProvider>
      <AppRoutes />
    </QuizProvider>
  </UserProvider>
);

export default App;