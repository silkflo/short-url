import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { LongUrlValidationError } from '../errors/long-url-validation-error';
import { UrlData } from '../models/urldata';
import generateUrl from '../components/generateUrl';
import axios from 'axios';

require('dotenv').config();
var key = require('randomstring');

const router = express.Router();

router.post(
  '/shorten',
  [
    body('longUrl')
      .isURL({ require_protocol: true })
      .withMessage('Try with https:// or .com'),
    body('title').isString().toLowerCase().notEmpty(),
    body('description'),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new LongUrlValidationError(errors.array());
    }

    const { longUrl, title, description } = req.body;

    const Response = async () => {
      //generateUrl make sure there is no duplicate shorten url and return the shorten url
      //it also builds the urlData
      let shortUrl = await generateUrl(title, description, longUrl);
      await UrlData.find();
      //find the url posted
      const urlData = await UrlData.findOne({ shortUrl });

      res.status(201).send(urlData);
    };
    //Check is the URL is valid (detect unsafe and 404 websites)
    axios
      .get(longUrl)
      .then(function (response) {
        Response();
      })
      .catch(function (error) {
        res.status(404).send({
          errors: [
            { message: 'The url seems not valid, please provide a new URL' },
          ],
        });
      });
  }
);

export { router as shortenUrlRouter };
