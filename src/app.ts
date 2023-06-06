import express, { Request, Response } from 'express';

import productRouter from './routes/productRouter';
import orderRouter from './routes/orderRouter';
import errorMiddleware from './middlewares/error.middleware';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

app.get('/', async (_req: Request, res: Response) => res.status(200).json);

export default app;
