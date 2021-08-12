
import express from 'express';
import Configure from './config';

const app = express();
const port = process.env.PORT || 5000;

Configure.middlewares(app);
Configure.routes(app);

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});
