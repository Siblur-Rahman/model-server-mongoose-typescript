import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import userRouter from './app/modules/user/user.router';
import { StatusCodes } from 'http-status-codes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/user', userRouter)
const getAController = (req: Request, res: Response) => {
    res.send('Hello World!')

};

app.get('/', getAController)
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    console.log('error from app.ts', err)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: err.message, error: err })
  })
export default app;