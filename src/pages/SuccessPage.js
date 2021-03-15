import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import successImg from '../images/success-image.svg';

const SuccessPage = () => {
  const { score } = useParams();
  return (
    <div className='container'>
      <div className='success-hero'>
        <img
          src={successImg}
          className='success-img'
          alt='Woman jumping with cellphone in the background along a check mark'
        />
      </div>
      <div className='success-text'>
        <h1 className='text-primary'>YOU DID IT!</h1>
        <p>Thank you for taking the questionnaire!</p>
      </div>
      <div className='success-score-box'>
        <p>{score}/150</p>
      </div>
      <Link to='/profile' className='success-score-banner fancy-bg'>
        <p>View Your Progress</p>
      </Link>
      <div className='tips-text'>
        <h4>Check out these tips and see how you can improve your score 📗</h4>
      </div>
      <Accordion className='pt-0 pb-0'>
        <Card className='accordion-section'>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <h5>Energy Tips</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Switch lights off!</h6>
              <p>
                When leaving the room turn off the lights and unplug electronic
                devices when they are not in use.
              </p>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='0' className='accordion-tips'>
            <Card.Body>
              <h6>
                🍃 Lower your thermostat in winter and raise it in summer.
              </h6>
              <p>
                Use less air conditioning in the summer; instead opt for fans,
                which require less electricity. And check out these other ways
                to beat the heat without air conditioning.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className='accordion-section'>
          <Accordion.Toggle as={Card.Header} eventKey='1'>
            <h5>Water Tips</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Take shorter showers</h6>
              <p>
                A typical shower uses five to ten gallons of water a minute.
                Limit your showers to the time it takes to soap up, wash down
                and rise off.
              </p>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='1' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Turn off the water while brushing your teeth</h6>
              <p>
                Before brushing, wet your brush and fill a glass for rinsing
                your mouth.{' '}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className='accordion-section'>
          <Accordion.Toggle as={Card.Header} eventKey='2'>
            <h5>Waste Tips</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Reduce your food waste</h6>
              <p>
                Plan your meals ahead of time, freeze the excess and reuse
                leftovers.
              </p>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='2' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Eat low on the food chain</h6>
              <p>
                This means eating mostly fruits, veggies, grains, and beans.{' '}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default SuccessPage;
