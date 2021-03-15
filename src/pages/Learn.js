import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import LearnInformationRow from '../components/LearnInformationRow';
import LearnInformationSecondRow from '../components/LearnInformationSecondRow';
import Card from 'react-bootstrap/Card';

const Tips = () => {
  return (
    <div className='tips-page-container'>
      <div className='jumbotron jumbotron-fluid tips-jumbotron darkgreen-bg'>
        <div className='container'>
          <h1 className='display-4 text-center'>Learn</h1>
          <p>
            Your carbon footprint is the total amount of greehouse gas emissions
            that come from the production (or use) of a product or service.
            Think of how you chose to travel, the foods you consume, and how
            much energy is being used in your home. Science is complex, and alot
            of the time it can be overwhelming to understand what it all means.
          </p>
        </div>
      </div>
      <LearnInformationRow />
      <LearnInformationSecondRow />
      <div className='container'>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              Transportation
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                🚗 Driving less will reduce the amount of CO2 emitted and it
                will lessen traffic congestion. Consider taking public
                transportation, carpooling or riding a bike to your destination.
                <br />
                🚗 If you are driving, avoid making unnecesarry braking and
                acceleration. Studies have found that aggressive driving can
                result in more fuel consumption compared to consistent and calm
                driving.
                <br />
                🚗 If you are going on a long trip, using cruise control can
                reduce your fuel consumption.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              Household
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>
                🏠 Consider using LED lightbulbs instead of regular lightbulbs.
                LED bulbs may cost more but they use a quarter of the energy
                compared to the regular ones and last up to 25 times longer.
                <br />
                🏠 Make sure you turn off all electronic devices when not in use
                and dont forget to turn off the light when leaving your room.
                <br />
                🏠 If you use the water heater often, try turning down the
                heater to 120˚F. Doing this can save you roughly 500 pounds of
                CO2.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
              Food
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
                🍲 Reduce the amount of food you waste by planning your meals
                ahead of time, freezing any leftovers, and reusing any leftovers
                that could be left behind.
                <br />
                🍲 Consider eating more plant-based meals. Meat and dairy are
                responsible for 14.5% of manmade global greenhouse gas
                emissions. You can reduce your carbon footprint by consuming
                more vegetables, fruits, and grains.
                <br />
                🍲 When doing groceries, choose organic and local foods that are
                in season. Opting to purchase locally instead of transporting
                foods from far away will reduce air pollution and cut back on
                greenhouse emissions.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='3'>
              Shopping
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                🛍️ Reduce the amount of stuff you purchase and consider using
                recycled items when possible.
                <br />
                🛍️ If youre looking to purchase a new computer, try purchasing a
                laptop instead of a traditional desktop. Dekstops require more
                energy than laptops, making them less environmentally friendly.
                <br />
                🛍️ Bring your own reusable bag when shopping around. This will
                decrease the amount of plastic bags used, which can pollute our
                environment.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='4'>
              Clothing
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='4'>
              <Card.Body>
                👚 Washing your clothes in cold water could save up to 500
                pounds of carbon dioxide. Using cold water instead of hot/warm
                water can also clean your clothes better.
                <br />
                👚 Buying secondhand clothes can save the resources used to
                otherwise create a new clothing piece. Shopping for second hand
                items can also save you more money.
                <br />
                👚 When buying new clothes, look for items that are made with
                eco-friendly and natural fabrics. Some of them include, bamboo,
                silk, hemp, and organic cotton.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default Tips;
