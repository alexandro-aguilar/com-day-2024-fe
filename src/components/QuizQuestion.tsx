import { FormEvent, useState } from 'react';
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
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if(!selectedOption)
      console.error('No option selected');
    onAnswer(new Answer(question.id, selectedOption as number));
    setSelectedOption(null);
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl mx-auto my-8">
      <form onSubmit={ handleSubmit }>
        <h2 className="text-lg mb-6 text-gray-800">{question.text}</h2>
        {question.options.map((option, idx) => (
          <label
          key={idx}
          className="flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50"
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
        <Button type="submit" label="Siguiente" disabled={ !selectedOption } />
      </form>
    </div>
  );
}
export default QuizQuestion;