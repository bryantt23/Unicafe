import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button
          text='good'
          handleClick={() => {
            setGood(good + 1);
          }}
        ></Button>
        <Button
          text='neutral'
          handleClick={() => {
            setNeutral(neutral + 1);
          }}
        ></Button>
        <Button
          text='bad'
          handleClick={() => {
            setBad(bad + 1);
          }}
        ></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
