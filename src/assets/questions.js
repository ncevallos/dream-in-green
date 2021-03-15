const questions = [
  {
    ques: "It's a nice and sunny day outside, do you...",
    ans: [
      {
        value: 0,
        ans: "Stay cozy inside and turn the air conditioner on.",
      },
      {
        value: 5,
        ans:
          'Go for a short walk, but come back home not long after',
      },
      {
        value: 10,
        ans:
          'Get together with some friends, maybe you can freshen up at the pool or go get some ice cream!',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'You just finished drinking a bottle of water, do you...',
    ans: [
      {
        value: 0,
        ans: 'Throw it in the trash.',
      },
      {
        value: 10,
        ans: 'Put it aside for recycling.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'Your phone/tablet is starting to get a little too slow, do you...',
    ans: [
      {
        value: 10,
        ans: 'Try and see if you can get it fixed.',
      },
      {
        value: 5,
        ans:
          'Get a new one and donate/sell the older one.',
      },
      {
        value: 0,
        ans: 'Get a new one and throw the old one in the trash.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques:
      "You are walking out to run a quick errand,, do you...",
    ans: [
      {
        value: 0,
        ans: "Leave the air conditioner and lights on.",
      },
      {
        value: 5,
        ans: "Shut off air conditioner but leave the lights on, it's only going to be a minute anyway!",
      },
      {
        value: 10,
        ans: 'Turn the light off, just in case.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'On average, how long are your showers',
    ans: ['25 minutes', '5 minutes'],
    type: 'slider',
  },
  {
    ques:
      "You and your friends get together to visit someone, do you...",
    ans: [
      {
        value: 0,
        ans: 'Each drive their own separate vehicle.',
      },
      {
        value: 7,
        ans: 'Carpool together.',
      },
      {
        value: 10,
        ans: 'Bike/walk to his house.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques:
      "You got new clothes! But you have some older ones you don't wear anymore, do you...:",
    ans: [
      {
        value: 0,
        ans: "Toss the old ones out, they're probably too old anyway...",
      },
      {
        value: 3,
        ans: "Use them as rags for cleaning around the house before tossing them",
      },
      {
        value: 10,
        ans:
          'Try and separate the ones in better shape and donate them',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'On average, how long do use your electronic devices each day?',
    ans: [
      {
        value: 10,
        ans: 'Less than 6 hours.',
      },
      {
        value: 5,
        ans: 'between 6 and 10 hours.',
      },
      {
        value: 0,
        ans: 'More than 10.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: "When you're going on a vacation, do you... ",
    ans: [
      {
        value: 3,
        ans: 'Travel by plane',
      },
      {
        value: 7,
        ans: 'Travel by bus',
      },
      {
        value: 10,
        ans: 'Travel by train',
      },
      {
        value: 0,
        ans: 'Travel by car',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'When your family gets groceries, do they...',
    ans: [
      {
        value: 0,
        ans: 'Buy from big chain stores such as Walmart, Target, and Costco.',
      },
      {
        value: 5,
        ans: 'Smaller family owned supermarkets.',
      },
      {
        value: 10,
        ans: 'Local farmer markets.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques:
      'How many times per week do you eat meat (beef, chicken, pork, etc.)?',
    ans: [
      {
        value: 10,
        ans: 'None.',
      },
      {
        value: 8,
        ans: 'Less than 2.',
      },
      {
        value: 5,
        ans: 'Between 2 and 4.',
      },
      {
        value: 0,
        ans: 'More than 5.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'On average, how long do you keep the lights on during the day?',
    ans: ['24 hours', '0 hours'],
    type: 'slider',
  },
  {
    ques: 'On average, how much do you commute to school and/or work?',
    ans: ['More than 10 miles', 'Less than 1 mile'],
    type: 'slider',
  },
  {
    ques: 'When you brush your teeth, do you leave the water running?',
    ans: [
      {
        value: 0,
        ans: 'Yes.',
      },
      {
        value: 10,
        ans: 'No.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'Its Saturday and you need new clothes, do you...',
    ans: [
      {
        value: 10,
        ans: 'Go to a local shop or thrift store.',
      },
      {
        value: 5,
        ans: 'Go to a local retail store nearby.',
      },
      {
        value: 0,
        ans: 'Purchase clothes online.',
      },
    ],
    type: 'multipleChoice',
  },
];

export default questions;
