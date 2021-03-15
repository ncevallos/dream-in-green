import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import TipsContainer from '../components/TipsContainer';
import { useAuth } from '../states/userState';
import { buildAnswers } from '../utils';
import questions from '../assets/questions';

const Questionnaire = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState({});
  let history = useHistory();
  const { user, addScoreToDb } = useAuth();

  const handleFinish = async () => {
    let total = 0;

    for (const key in score) {
      total += score[key];
    }

    try {
      await addScoreToDb(user.uid, total, new Date());
    } catch (e) {
      console.log(e);
    }

    history.push(`/success/${total}`);
  };

  const handleSelect = (selectedIndex, e) => {
    if (e.target.classList.contains('next')) {
      if (score[14] > -1) {
        handleFinish();
      } else if (score[selectedIndex - 1] > -1) {
        setIndex(selectedIndex);
        console.log("score contains ",score);
      } else {
        alert('You must select an answer!');
      }
    } else if (e.target.classList.contains('prev')) {
      setIndex(selectedIndex);
    }
  };

  const htmlOfItems = questions.map((question, i) => {
    return (
      <Carousel.Item key={i}>
        <h2 className='question-title'>{question.ques}</h2>
        {buildAnswers(question, i, score, setScore)}
      </Carousel.Item>
    );
  });

  return (
    <div>
      <div className='container-fluid'>
        <div className='row questionnaire-row'>
          <div className='col-lg-6 questionnaire-left'>
            <TipsContainer index={index} />
          </div>
          <div className='col-lg-6 px-md-5 questionnaire-right'>
            <h2 className='questionnaire-step-counter'>
              Question {index + 1} of 15
            </h2>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              nextIcon={
                <div className='py-3 px-5 btn btn-primary next'>
                  {index === 14 ? 'Submit' : 'Next'}
                </div>
              }
              prevIcon={
                index === 0 ? (
                  ''
                ) : (
                  <div className='py-3 px-5 btn btn-primary prev'>Back</div>
                )
              }
              bsPrefix='c-carousel'
              indicators={true}
              style={{ minHeight: 500 + 'px' }}
            >
              {htmlOfItems}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;