import React from 'react';
import { Link } from 'react-router-dom';

const LearnInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
      <div className='image-container'>
        <div className='image transportaion' />
        <div className='title'>Transportation</div>
        <div className='text'>
          Learn about how you chose to travel.
        </div>
      </div>
      <div className='image-container'>
        <div className='image household' />
        <div className='title'>Household</div>
        <div className='text'>
          Learn how to better yourself and lower your emissions.
        </div>
      </div>
      <div className='image-container'>
        <div className='image food' />
        <div className='title'>Food</div>
        <div className='text'>
          Learn about the potential foods you consume that can affect the environment.
        </div>
      </div>
      </div>
  );
};

export default LearnInformationRow;
