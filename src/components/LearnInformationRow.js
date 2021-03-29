import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const LearnInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
            <Popup
        trigger={<div className='image-container'>
        <div className='image transportaion' />
        <div className='title'>Transportation</div>
        <div className='text'>
          Learn about how you chose to travel.
        </div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Modal Title </div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
              Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
              delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
              commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
              explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
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
          Learn about the foods you consume that can affect the environment.
        </div>
      </div>
      </div>
  );
};

export default LearnInformationRow;
