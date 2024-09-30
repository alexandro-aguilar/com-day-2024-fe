import axios from 'axios';
import Endpoints from '../../utils/Endpoints';
import Score from './Score';

export default class ScoreService {
  async execute(score: Score): Promise<void> {
    await axios.post(
      Endpoints.saveScore,
      score.toJson()
    )
  }
}