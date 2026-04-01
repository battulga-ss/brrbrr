import express from 'express';
import cors from 'cors';

import userRoutes from './routes/user.route';
import questRoutes from './routes/quest.route';
import authRoutes from './routes/auth.route';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/quests', questRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
