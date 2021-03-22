import React from 'react';

const LearnInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
      <div className='image-container'>
        <div className='image shopping' />
        <div className='title'>Shopping</div>
        <div className='text'>
          Learn how shopping affects the environment.
        </div>
      </div>
      <div className='image-container'>
        <div className='image clothing' />
        <div className='title'>Clothing</div>
        <div className='text'>
          Learn how apparel production affects the environment. 
        </div>
      </div>
      </div>
  );
};

export default LearnInformationRow;
