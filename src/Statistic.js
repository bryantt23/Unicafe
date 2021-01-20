import React from 'react';

export default function Statistic({ text, value }) {
  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  );
}
