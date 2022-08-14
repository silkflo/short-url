import { useState, useEffect } from 'react';
import Link from 'next/link';

const UrlList = (urls) => {
  const urlsArray = urls.urls;

  //Filter the urls response according the user search term
  let urlfilter = urlsArray;
  if (urls.term == '') {
    urlfilter = urlsArray;
  } else {
    urlfilter = urlsArray.filter((url) => {
      return url.title.includes(urls.term.toLowerCase());
    });
  }

  //No Url built show warning message
  const noData = () => {
    return (
      <div className="ui warning message">
        <div className="header">No URL created yet</div>
        Please build a new URL
      </div>
    );
  };

  const urlList = urlfilter.map((url) => {
    return (
      <div
        key={url.id}
        className="ui card"
        style={{ backgroundColor: '#DCE8EF' }}
      >
        <div className="content">
          <div className="header">{url.title} </div>
          <div className="meta">
            <span className="description">{url.description}</span>
          </div>
          <Link href="/[urlId]" as={`/${url.key}`}>
            <a target="_blank"> {`short-url.live/${url.key}`}</a>
          </Link>
          <div className="description">
            <span className="right floated meta" style={{ fontsize: '2rem' }}>
              {url.createdDate.split('T')[0]}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui items">{urlsArray.length == 0 ? noData() : urlList}</div>
  );
};

export default UrlList;
