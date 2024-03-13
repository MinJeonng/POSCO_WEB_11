import { useState } from 'react';
const StateFunction = () => {
  const [message, setMessage] = useState(0);
  console.log(useState(0));

  const onIncrease = () => {
    setMessage(message + 1);
  };
  const onDecrease = () => {
    setMessage(message - 2);
  };
  return (
    <>
      <h2>{message}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-2</button>
    </>
  );
};
export default StateFunction;
