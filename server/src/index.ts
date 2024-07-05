import express, { Request, Response } from 'express';
import db from './services/db';
import userRoutes from './components/users/routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
});
