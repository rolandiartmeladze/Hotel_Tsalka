import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')));

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello from Express');
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
