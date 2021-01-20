import React from 'react';

export default function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const positive = (good / all) * 100 + '%';
  const average = (good - bad) / all;
  return (
    <div>
      <h1>statistics</h1>
      {!all ? (
        'No feedback given'
      ) : (
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positive}</p>
        </div>
      )}
    </div>
  );
}
