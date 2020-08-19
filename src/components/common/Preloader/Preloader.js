import React from 'react';
import './Preloader.css';
import preloader from '../../../assets/images/loading-spinner.gif';

const Preloader = () => {
  return (
    <div className="preloader">
      <img className="spinner" src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
