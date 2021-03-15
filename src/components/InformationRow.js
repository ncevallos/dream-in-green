import React from 'react';

const InformationRow = () => {
  return (
    <div className='row-container home-row'>
      <div className='image-container'>
        <div className='image monitor' />
        <div className='title'>Monitor</div>
        <div className='text'>
          Monitor your progress over time all in the app.
        </div>
      </div>
      <div className='image-container'>
        <div className='image learn' />
        <div className='title'>Learn</div>
        <div className='text'>
          Learn how to better yourself and lower your emissions.
        </div>
      </div>
      <div className='image-container'>
        <div className='image improve' />
        <div className='title'>Improve</div>
        <div className='text'>
          Improve your emissions by constantly using the app!
        </div>
      </div>
    </div>
  );
};

export default InformationRow;
