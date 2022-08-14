import axios from 'axios';
import { useState, useEffect } from 'react';
import Router from 'next/router';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);
  const [displayError, setDisplayError] = useState(null);

  const onErrorClick = () => {
    setDisplayError('none');
    console.log('DISPLAY ERROR: ', displayError);
  };

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      setErrors(
        <div className=" ui red message">
          <div className="header">URL must be valid</div>
          <div className="list">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </div>
        </div>
      );
    }
  };
  //the key is from the response error message , the <li>value</li> come from withMessage() request using express-validator
  // Note : The response  error message return only 1 message(key), there is a single <li> possible

  return { doRequest, errors };
};
