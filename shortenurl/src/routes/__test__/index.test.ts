import request from 'supertest';
import { app } from '../../app';
const assert = require('assert');

it('get the list of urls', async () => {
  //Create  URLs
  const parameters = [
    {
      title: 'Portfolio',
      description: 'Florian portfolio',
      longUrl: 'https://flo-portfolio.com',
    },
    {
      title: 'google',
      description: 'Search engine',
      longUrl: 'https://google.com',
    },
    {
      title: 'amazon',
      description: 'e-commerce website',
      longUrl: 'https://google.com',
    },
  ];
  let responses = [];

  const amountOfUrls = 20;
  // genereate requests
  for (let i = 0; i < amountOfUrls; i++) {
    const paramIndex = Math.floor(Math.random() * parameters.length);
    const response = await request(app)
      .post('/shorten')
      .send(parameters[paramIndex])
      .expect(201);

    responses.push(response);
  }

  const list = await request(app).get('/shorten').expect(200);
  const responseLength = list.body.length;
  //compare response reurn amout with request amount are the same
  assert.equal(responseLength, amountOfUrls);
});
