import axios from 'axios';

export default ({ req }) => {
  //select the API base url depending of the platform
  if (typeof window === 'undefined') {
    //we are on the server
    return axios.create({
      baseURL: 'http://short-url.live',
      headers: req.headers,
    });
  } else {
    // we are on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
