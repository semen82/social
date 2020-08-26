import React from 'react';
import './Preloader.css';
import preloader from '../../../assets/images/loading-spinner.gif';

const Preloader = () => {
  return <img className="preloader" src={preloader} alt="" />;
};

export default Preloader;
