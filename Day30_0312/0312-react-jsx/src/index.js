import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';
import Practice from './Practice';
import Practice_second from './Practice_second';

const root = ReactDOM.createRoot(document.getElementById('root'));
//index.html을 바꾸기 위해서 이 파일을 사용. 직접 index.html을 바꿀 순 없음
root.render(
  // <h2>Hello, world</h2>
  // 이 부분에서 화면에 무엇을 띄울지 변경가능함.
  //아래처럼 어떤 파일을 가져와서 쓸건지설정가능

  // 4. 코딩온 실습 문제들
  // <React.StrictMode>
  //   <Practice_second />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  /*
//2. Clock 렌더링
//React Virtual DOM은 내용이 변경된 부분만 업데이트
//Clock.js를 보면 변경되는 부분은 시간밖에 없기 때문에 h1안에 글자들은 가만히 있고 시간만 계속 변하는 것을 알 수 있음, 새로고침을 하지 않아도 동적UI가 가능하게 됌
// 브라우저에서 전체가 아닌 '시간' 부분만 새로고침 되고 있다.
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

*/

  //3. 애벌레 Practice 렌더링
  // root.render(
  <React.StrictMode>
    <Practice />
  </React.StrictMode>
  // );
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
