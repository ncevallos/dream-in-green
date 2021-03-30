import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const LearnInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
      <Popup
        trigger={<div className='image-container'>
        <div className='image shopping' />
        <div className='title'>Shopping</div>
        <div className='text'>
        Learn how shopping affects the environment.
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
            <div className="display-4 font-weight-bold text-center mb-3"> Shopping Tips </div>
            <div className="content font-weight-bold">
            🍃 Reduce the amount of stuff you purchase and consider using recycled items when possible.<br>
              </br>
              <br />
            🍃 If youre looking to purchase a new computer, try purchasing a laptop instead of a traditional desktop. 
			  Dekstops require more energy than laptops, making them less environmentally friendly.<br>
              </br>
              <br />
            🍃 Bring your own reusable bag when shopping around. This will decrease the amount of plastic bags used, which can pollute our environment.<br>
              </br>
              <br />
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
      <Popup
        trigger={<div className='image-container'>
        <div className='image clothing' />
        <div className='title'>Clothing</div>
        <div className='text'>
        Learn how apparel production affects the environment.
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
            <div className="display-4 font-weight-bold text-center mb-3"> Clothing Tips </div>
            <div className="content font-weight-bold">
            🍃 Washing your clothes in cold water could save up to 500 pounds of carbon dioxide. Using cold water instead of hot/warm water can also clean your clothes better.<br>
              </br>
              <br />
            🍃 Buying secondhand clothes can save the resources used to otherwise create a new clothing piece. Shopping for second hand items can also save you more money.<br>
              </br>
              <br />
              🍃 When buying new clothes, look for items that are made with eco-friendly and natural fabrics. Some of them include, bamboo, silk, hemp, and organic cotton.<br>
              </br>
              <br />
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
      </div>
  );
};

export default LearnInformationRow;
