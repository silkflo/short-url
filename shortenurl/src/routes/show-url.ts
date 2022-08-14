import express, { Request, Response } from 'express';
import { UrlData } from '../models/urldata';
import { NotFoundError } from '../errors/not-found-error';

const router = express.Router();

router.get('/shorten/:urlId', async (req: Request, res: Response) => {
  const key = req.params.urlId;

  const urlData = await UrlData.findOne({ key });
  //const urlData = await UrlData.findOne({ shortenUrl })

  if (!urlData) {
    throw new NotFoundError();
  }

  res.status(200).send(urlData);
});

export { router as showUrlRouter };
