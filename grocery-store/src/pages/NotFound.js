import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>404 Oops! Page not found
      <Link to='/'>
        Back to Home
      </Link>
      </h1>
    </>
  );
};

export default NotFound;