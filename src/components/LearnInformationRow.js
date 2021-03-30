import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const LearnInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
            <Popup
        trigger={<div className='image-container'>
        <div className='image transportation' />
        <div className='title'>Transportation</div>
        <div className='text'>
          Learn how your choice of travel can affect the environment.
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
            <div className="display-4 font-weight-bold text-center mb-3"> Transportation Tips </div>
            <div className="content font-weight-bold">
            🍃 Switch lights off! Driving less will reduce the amount of CO2 emitted and it will lessen traffic congestion. 
				Consider taking public transportation, carpooling or riding a bike to your destination.<br>
              </br>
              <br />
              🍃 If you are driving, avoid making unnecesarry braking and acceleration. 
				Studies have found that aggressive driving can result in more fuel consumption compared to consistent and calm driving.<br>
              </br>
              <br />
              🍃 If you are going on a long trip, using cruise control can reduce your fuel consumption.<br>
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
        <div className='image household' />
        <div className='title'>Household</div>
        <div className='text'>
        Learn how much energy is being used and lower your emissions.
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
            <div className="display-4 font-weight-bold text-center mb-3"> Household Tips </div>
            <div className="content font-weight-bold">
              🍃 Consider using LED lightbulbs instead of regular lightbulbs. 
			  LED bulbs may cost more but they use a quarter of the energy compared to the regular ones and last up to 25 times longer<br>
              </br>
              <br />
              🍃 Make sure you turn off all electronic devices when not in use and dont forget to turn off the light when leaving your room<br>
              </br>
              <br />
              🍃 If you use the water heater often, try turning down the heater to 120˚F. Doing this can save you roughly 500 pounds of CO2.<br>
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
        <div className='image food' />
        <div className='title'>Food</div>
        <div className='text'>
        Learn how the foods you consume can affect the environment.
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
            <div className="display-4 font-weight-bold text-center mb-3"> Food Tips </div>
            <div className="content font-weight-bold">
            🍃 Reduce the amount of food you waste by planning your meals ahead of time, freezing any leftovers, and reusing any leftovers that could be left behind.<br>
              </br>
              <br />
            🍃 Consider eating more plant-based meals. Meat and dairy are responsible for 14.5% of manmade global greenhouse gas emissions. 
			  You can reduce your carbon footprint by consuming more vegetables, fruits, and grains.<br>
              </br>
              <br />
            🍃 When doing groceries, choose organic and local foods that are in season. 
			  Opting to purchase locally instead of transporting foods from far away will reduce air pollution and cut back on greenhouse emissions.<br>
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
