import React, { useState, useEffect } from 'react';

const Search = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
    console.log('SEARCH TERM: ', term);
  };

  return (
    <div className="ui grid">
      <div className="sixteen wide column">
        <form onSubmit={onSubmit} className="ui form">
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <div className=" item">
              <div className="ui category search">
                <div className="ui icon input" style={{ width: '100%' }}>
                  <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    style={{ width: '100%' }}
                    className="prompt"
                    type="text"
                    placeholder="Press enter to search links by title"
                  />
                  <i className="search icon"></i>
                </div>

                <div className="results"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
