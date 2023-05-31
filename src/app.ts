import express, { Request, Response } from 'express';

import productRouter from './routes/productRouter';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use(errorMiddleware);

app.get('/', async (_req: Request, res: Response) => res.status(200).json);

export default app;
