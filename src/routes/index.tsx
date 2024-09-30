import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from '../pages/RegistrationPage';
import QuizPage from '../pages/QuizPage';
import ResultPage from '../pages/ResultPage';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      {/* <Route path="/result" element={<ResultPage />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;