import Endpoints from '../../utils/Endpoints';
import User from './User';
import axios from 'axios';

export default class UserService {
  async execute(user: User): Promise<void> {
    await axios.post(
      Endpoints.createUser,
      user.toObject(),
    );
  }
}