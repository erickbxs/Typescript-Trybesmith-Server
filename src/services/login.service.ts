import bcrypt from 'bcryptjs';
import jwt from '../helpers/jwt';
import UserModel from '../database/models/user.model';
import { Response, SuccessResponse, ErrorResponse } from '../types/Response';

const login = async (username: string, password: string): Promise<Response<string>> => {
  try {
    const user = await UserModel.findOne({ where: { username } });
    if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Username or password invalid' },
      } as ErrorResponse;
    }
    const token = jwt.sign({ id: user.dataValues.id, username });
    return { status: 'SUCCESS',
      data: token,
    } as SuccessResponse<string>;
  } catch (error) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'An error occurred during login' },
    } as ErrorResponse;
  }
};

export default { login };
