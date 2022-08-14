import useRequest from '../hooks/use-request';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'semantic-ui-react';

const UrlRedirect = ({ url }) => {
  console.log('GET URL: ', url);
  const { query } = useRouter();
  console.log('query: ', query.urlId);

  const { doRequest, errors } = useRequest({
    url: `/shorten/${query.urlId}`,
    method: 'get',
    onSuccess: (url) => (location.href = url.longUrl),
  });
  useEffect(() => {
    doRequest();
  }, []);

  return (
    <div>
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    </div>
  );
};

export default UrlRedirect;
