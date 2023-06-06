import { Request, Response } from 'express';
import LoginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response> {
  try {
    const { username, password } = req.body;
    const response = await LoginService.login(username, password);

    if (response.status === 'UNAUTHORIZED') {
      return res.status(401).json(response.data);
    }

    return res.status(200).json({ token: response.data });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export default {
  login,
};
