import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Search from '../components/search';
import { Container } from 'semantic-ui-react';
import UrlInput from '../components/new-url';
import UrlList from '../components/url-list';

const LandingPage = ({ urls }) => {
  const [term, setTerm] = useState('');

  //use of this function to recieve the term from the search bar
  const onTermSubmit = async (term) => {
    setTerm(term);
    //term will be send as a props to UrlList to filter the list
  };

  return (
    <Container>
      <Search onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="six wide column">
          <UrlList urls={urls} term={term} />
        </div>
        <div className="ten wide column">
          <UrlInput />
        </div>
      </div>
    </Container>
  );
};

LandingPage.getInitialProps = async (context, client, shorten) => {
  const { data } = await client.get('/shorten');
  return { urls: data };
};

export default LandingPage;
