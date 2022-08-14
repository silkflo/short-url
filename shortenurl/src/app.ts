import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import { shortenUrlRouter } from './routes/shorten-url';
import { indexUrlRouter } from './routes';
import { showUrlRouter } from './routes/show-url';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(shortenUrlRouter);
app.use(indexUrlRouter);
app.use(showUrlRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
