// import logo from './logo.svg';
//css도 import해서 쓰면된다.
import './App.css';

function App() {
  const name = '베키';
  // const animal = '갱얼쥐'
  const styles = {
    color: 'red',
    fontSize: '30px', //원래 font-size인데 camelCase로 하는것
    backgroundColor: 'skyblue',
  };

  //여기에서는 '//'로 주석이 가능

  return (
    <>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>start!</p>
        {/* 위에 p태그 내가 만듦 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        {/* jsx문법 */}
        {/* 1. 하나로 감싸진 요소여야함 */}
        {/* 2. JS표현식 사용 가능  
         - {}로 감싸면 js 표현식 사용 가능, 밑에 {}쓴것처럼
         - {}에서 삼항 연산자 사용가능(if,for문은 사용불가)
      */}

        <div>{name}안녕?</div>
        <div>반갑다?</div>
        <div>{name === 'Code' ? 'react 연습중이에요' : '하구있다구요!'}</div>

        {/* 
           3. style 속성
           - 리액트에서 DOM 요소에 스타일 적용시 문자열이 아닌 객체를 사용한다.
           - style 이름 중 하이픈(-) 포함시 camelCase로 작성해야한다.
        */}
        {/* 객체로 위에서 생성해서 아래에서 적용해도됌 */}
        <div style={styles}>style을 객체로 생성해서 한 경우</div>
        {/* style 바로적용 */}
        <div
          style={{
            color: 'blue',
            fontSize: '30px', //원래 font-size인데 camelCase로 하는것
            backgroundColor: 'pink',
          }}
        >
          안에서 객체로 생성한 경우
        </div>

        {/* 
        4. className 사용
        - 기존에 쓰던 class 속성이 아닌 className 속성 사용 why? js에는 class가 있어서 겹치기 떄문에 div class = "" 이렇게가 아님

        5. 종료 태그가 없는 태그의 사용
        - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing 쓰면 된다.
        - ex. <br> -> <br /> 이렇게! 이게 셀프 클로징 or <br></br>

        6. 주석
        - // : Jsx 외부에서 쓸 수 있음
        - {**} : Jsx 내부에서 사용 (원래 주석 형태는 //도 끝에 써야하는데 이 주석을 유지하기위해 {**}라고 쓴것)
        */}
      </div>

      {/* <div>부모가 없다.</div> */}
    </> //아무 의미가 없지만 부모태그로 묶어주기 위해서 사용함
  );
}

export default App;
