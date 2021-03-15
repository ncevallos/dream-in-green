import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tips from '../assets/tips';

const TipsContainer = (props) => {
  const htmlOfItems = tips.map((tip, i) => {
    return (
      <Carousel.Item key={i}>
        <div className='tips-image'>
          <img className='fluid-img' src={tip.img} alt='' />
        </div>
        <div className='tips-copy'>
          <h2 className='tips-copy__title'>Did you know?</h2>
          <p className='tips-copy__tip'>{tip.tip}</p>
        </div>
      </Carousel.Item>
    );
  });

  return (
    <React.Fragment>
      <Carousel
        activeIndex={props.index}
        controls={false}
        fade={true}
        interval={null}
        indicators={false}
        touch={false}
      >
        {htmlOfItems}
      </Carousel>
    </React.Fragment>
  );
};

export default TipsContainer;
