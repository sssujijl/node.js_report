import express from 'express';
import cookieParser from 'cookie-parser';
import UsersRouter from './routes/users.router.js';
import ResumeRouter from './routes/resumes.router.js';

const app = express();
const PORT = 3018;

app.use(express.json());
app.use(cookieParser());
app.use('/api', [UsersRouter, ResumeRouter]);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 포트로 서버가 열렸어요!`);
});