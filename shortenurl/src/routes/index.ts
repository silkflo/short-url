import express, { Request, Response } from 'express';
import { UrlData } from '../models/urldata';

const router = express.Router();

router.get('/shorten', async (req: Request, res: Response) => {
  const urls = await UrlData.find();
  res.status(200).send(urls);
});

export { router as indexUrlRouter };
