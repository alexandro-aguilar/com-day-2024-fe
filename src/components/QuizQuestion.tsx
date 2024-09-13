interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, options, onAnswer }) => (
  <div>
    <h3>{question}</h3>
    {options.map((option, idx) => (
      <div key={ idx }>
        <input type="radio" name={ question } value={ option } onClick={() => onAnswer(option)} />
        { option }
      </div>
    ))}
  </div>
);

export default QuizQuestion;