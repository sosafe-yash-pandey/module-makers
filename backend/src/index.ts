import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log('\x1b[35m%s\x1b[0m', `\n🚀 Backend is being served at this endpoint: http://localhost:${PORT}\n`);
});