import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import userRouter from './app/modules/user/user.router';

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
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

export default app;