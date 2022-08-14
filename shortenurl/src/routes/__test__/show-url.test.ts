import request from 'supertest';
import { app } from '../../app';

it('get a choosen url and response 201', async () => {
  //Create a url
  const response = await request(app)
    .post('/shorten')
    .send({
      title: 'Portfolio',
      description: 'Florian portfolio',
      longUrl: 'https://flo-portfolio.com',
    })
    .expect(201);

  //Get the URl
  await request(app).get(`/shorten/${response.body.key}`).expect(200);
});
