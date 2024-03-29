import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import counterReducer from './store/counterReducer';
// import { createStore } from 'redux'; //이전 기능, 추천하지 않음
import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import rootReducer from './store';
import App2 from './App2';
import App3 from './App3';
import { composeWithDevTools } from '@redux-devtools/extension';
import Bank from './Bank';

const root = ReactDOM.createRoot(document.getElementById('root'));
//store 정의 : 전역으로 상태를 관리하는 공간(상태, reducer 가 존재)(하나의 프로젝트에 하나만 존재)

// createStore vs configureStore 차이 공부하기

// const store = createStore(counterReducer); //deprecated

//composeWithDevTools :  확장프로그램 사용하기 위해 추가함
const store = configureStore({ reducer: rootReducer }, composeWithDevTools);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <App2 /> */}
      {/* <App3 /> */}
      <Bank />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
