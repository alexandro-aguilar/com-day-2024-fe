import { useState } from 'react';
import Answer from '../services/Quiz/Answer';
import Option from '../services/Quiz/Option';
import Question from '../services/Quiz/Question';
import Button from './Button';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleChange = (option: Option) => {
    setSelectedOption(option.id);
    onAnswer(new Answer(question.id, option.id)); // Trigger the onAnswer callback when an option is selected
  };

  const handleSubmit = () => {
    if(selectedOption) onAnswer(new Answer(question.id, selectedOption))
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl mx-auto my-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">{question.text}</h3>
      {question.options.map((option, idx) => (
        <label
        key={idx}
        className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:bg-blue-50"
      >
        <input
          type="radio"
          name="quiz-option"
          value={option.id}
          checked={selectedOption === option.id}
          onChange={() => handleChange(option)}
          className="form-radio text-blue-500 h-5 w-5 mr-4 focus:ring-blue-300"
        />
        <span className="text-gray-700">{option.text}</span>
      </label>
      ))}
      <br />
      <Button type="submit" label="Siguiente" disabled={ !selectedOption } onClick={handleSubmit} />
    </div>
  );
}
export default QuizQuestion;