import React from 'react';
import Statistic from './Statistic';

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
          <table>
            <Statistic text='good' value={good} />
            <Statistic text='neutral' value={neutral} />
            <Statistic text='bad' value={bad} />
            <Statistic text='all' value={all} />
            <Statistic text='average' value={average} />
            <Statistic text='positive' value={positive} />
          </table>
        </div>
      )}
    </div>
  );
}
