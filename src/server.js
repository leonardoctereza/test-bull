import express from 'express';
import { connectToMongo } from './mongoose';
import hitApi from './jobs/hitApi.redisJob';
import { apiCounts } from './services';

const PORT = process.env.PORT || 3000;
const app = express();

connectToMongo();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use(hitApi);

app.get('/api-1', async (req, res) => {
  const count = await apiCounts(req.originalUrl);
  res.send(`you hit api-1 ${count} times`);
});
app.get('/api-2', async (req, res) => {
  const count = await apiCounts(req.originalUrl);
  res.send(`you hit api-2 ${count} times`);
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}!`));
