import React from 'react';
import { Link } from 'react-router-dom';
import InformationRow from '../components/InformationRow';
import ContactUsForm from '../components/ContactUsForm';

import homeImgFir from '../images/girl-earth.svg';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-6 text-center txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-4 font-weight-bold'>
                Monitor your greenhouse emissions
              </h1>
            </div>
            <p className='lead'>
              Dream in Green teamed up with SparkDev and Microsoft to build this
              easy to use application so that kids from all over the world can
              learn about their impact on the environment and how to create a
              better world.
            </p>
            <Link
              to='/questionnaire'
              className='btn btn-primary my-2 my-lg-0 py-3 px-5'
            >
              Get Started
            </Link>
          </div>
          <div className='col-lg-6'>
            <div className='hero-img-right'>
              <img
                src={homeImgFir}
                className='fluid-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
        </div>
        <InformationRow />
        <div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
