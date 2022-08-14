import request from 'supertest';
import { app } from '../../app';
const assert = require('assert');

it('returns a 201 on successful link genrated', async () => {
  await request(app)
    .post('/shorten')
    .send({
      title: 'Portfolio',
      description: 'Florian portfolio',
      longUrl: 'https://flo-portfolio.com',
    })
    .expect(201);
});

it('miss the title, return 400', async () => {
  await request(app)
    .post('/shorten')
    .send({
      description: 'Florian portfolio',
      longUrl: 'flo-portfolio.com',
    })
    .expect(400);

  await request(app)
    .post('/shorten')
    .send({
      title: '',
      description: 'Florian portfolio',
      longUrl: 'flo-portfolio.com',
    })
    .expect(400);
});

it('returns 400 ,wrong url syntax', async () => {
  await request(app)
    .post('/shorten')
    .send({
      title: 'Portfolio',
      description: 'Florian portfolio',
      longUrl: 'flo-portfolio.com',
    })
    .expect(400);

  await request(app)
    .post('/shorten')
    .send({
      title: 'Portfolio',
      description: 'Florian portfolio',
      longUrl: 'https://flo-portfolio',
    })
    .expect(400);

  await request(app)
    .post('/shorten')
    .send({
      title: 'Portfolio',
      description: 'Florian portfolio',
      longUrl: 'www.flo-portfolio.com',
    })
    .expect(400);
});

it('The url is invalid, returns 404', async () => {
  await request(app)
    .post('/shorten')
    .send({
      title: 'Fake link',
      description: 'The domain name doest exist',
      longUrl: 'https://thisdomaindoesntexist.com',
    })
    .expect(404);
});

it('generates a different shorten url on each new POST', async () => {
  const shortUrl = [];
  let response;
  //Test on 20 generated keys
  for (let i = 0; i < 20; i++) {
    response = await request(app)
      .post('/shorten')
      .send({
        title: 'Portfolio',
        description: 'Florian portfolio',
        longUrl: 'https://flo-portfolio.com',
      })
      .expect(201);
    shortUrl.push(response.body.shortUrl);
  }

  let ShortenUrlOriginalLength = shortUrl.length;
  //remove duplicate and get the length
  let ShortUrlLength = [...new Set(shortUrl)].length;
  assert.equal(ShortenUrlOriginalLength, ShortUrlLength);
});
