import React from 'react';

export default function ResultFruit(props) {
  console.log('props', props);
  const { fruit, background, color, content } = props.data;
  return (
    <div>
      <img src={`${fruit}.jpeg`} alt={fruit} />
      <div
        style={{
          backgroundColor: background,
          color: color,
          width: '100px',
          height: '30px',
          margin: '0 auto',
        }}
      >
        {content}
      </div>
    </div>
  );
}
