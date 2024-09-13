interface ResultCardProps {
  score: number;
  total: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ score, total }) => (
  <div>
    <h2>Your Score: { score }/{ total }</h2>
  </div>
);

export default ResultCard;