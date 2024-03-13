import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React from 'react';
import SayFunction from './SayFunction';
import OnclickPrac from './OnclickPrac';
import ClassComponent from './ClassComponent';
import StateFunction from './StateFunction';

function App() {
  const prac = () => {
    console.log('콘솔 띄우기 성공');
  };
  return (
    <div className="App">
      <Counter />

      <hr />
      <SayFunction />

      <hr />
      <OnclickPrac
        text="App 컴포넌트에서 넘겨준 text props입니다."
        valid={prac}
      />

      <hr />
      <ClassComponent />

      <hr />
      <StateFunction />
    </div>
  );
}

export default App;
