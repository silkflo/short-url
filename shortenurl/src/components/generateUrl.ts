import { UrlData } from '../models/urldata';
var randomKey = require('randomstring');

const generateUrl = async (
  title: string,
  description: string,
  longUrl: URL
) => {
  const createdDate = new Date();
  const key = randomKey.generate(7).toLowerCase();
  let shortUrl;

  shortUrl = `http://short-url.live/${key}`;

  //check if the shorten URL already exist, if yes it creates a new one nonexisting
  let existingUrl = await UrlData.findOne({ shortUrl });

  if (!existingUrl) {
    const urlData = UrlData.build({
      title,
      description,
      longUrl,
      shortUrl,
      createdDate,
      key,
    });
    urlData.save();
  } else {
    //Generate a new link
    while (existingUrl) {
      shortUrl = `http://short-url.live/${key}`;
      const urlData = UrlData.build({
        title,
        description,
        longUrl,
        shortUrl,
        createdDate,
        key,
      });
      urlData.save();
      existingUrl = await UrlData.findOne({ shortUrl });
      //   console.log('NEW SHORT URL : ', urlData);
    }
  }

  return shortUrl;
};

export default generateUrl;
