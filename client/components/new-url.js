import { useState } from 'react';
import useRequest from '../hooks/use-request';
import Router from 'next/router';
import axios from 'axios';

const NewUrl = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/shorten',
    method: 'post',
    body: { title, description, longUrl },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
    setTitle('');
    setDescription('');
    setLongUrl('');
  };

  return (
    <div
      className="ui card"
      style={{ width: '100%', backgroundColor: '#DCE8EF' }}
    >
      <div className="content">
        <div className="header">Get your shorten URL</div>
      </div>
      <div className="content">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Title</label>
            <div className="ui corner labeled input">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value.toLowerCase())}
                name="title"
                placeholder="google"
                required
              />
              <div className="ui corner label">
                <i className="asterisk red icon"></i>
              </div>
            </div>
            <label>Long URL</label>
            <div className="ui corner labeled input">
              <input
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                name="long Url"
                placeholder="https://www.google.com/search?q=fullstack&oq=fullstack&aqs=chrome..69i57j35i39j69i59j0i512l2j0i10i512l2j0i512j46i175i199i512j0i512.2408j0j15&sourceid=chrome&ie=UTF-8"
                required
              />
              <div className="ui corner label">
                <i className="asterisk red icon"></i>
              </div>
            </div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="title"
              placeholder="Search fullstack on Google"
            />
          </div>
          <div>{errors}</div>
          <br />
          <button className="ui primary right floated button">Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewUrl;
