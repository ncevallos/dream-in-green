import React from 'react';
import { Link } from 'react-router-dom';

const LearnInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
      <div className='image-container'>
        <div className='image transportation' />
        <div className='title'>Transportation</div>
        <div className='text'>
          Learn how your choice of travel can affect the environment.
        </div>
      </div>
      <div className='image-container'>
        <div className='image household' />
        <div className='title'>Household</div>
        <div className='text'>
          Learn how much energy is being used and lower your emissions.
        </div>
      </div>
      <div className='image-container'>
        <div className='image food' />
        <div className='title'>Food</div>
        <div className='text'>
          Learn how the foods you consume can affect the environment. 
        </div>
      </div>
      </div>
  );
};

export default LearnInformationRow;
