import React from 'react';
import './notFound.css';
import notFound from '../img/notFound.png';

const NotFound = () => (
  <div className="not-found-div">
    <img src={ notFound } alt="not-found-image" />
    Onde você está indo? Essa página não existe.
  </div>
)

export default NotFound;
