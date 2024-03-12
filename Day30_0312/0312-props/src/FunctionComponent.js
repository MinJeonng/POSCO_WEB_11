import propTypes from 'prop-types';
/*
1. 
export default function FunctionComponent(props) {
  const { name } = props; //props 안을 구조분해할당해서 한번에 가져올 수 있음
  return (
    //props 파라미터 안에 있는 값을 가지고 와서 쓰는 것
    <div>
      <h1>Hi {props.name}</h1>
      {/* 구조분해할당을 통해 변수 이름만 써도 가능
      <h1>WOW {name}</h1>
    </div>
  );
}
*/

//2. 괄호안에는 props밖에 안받아서 안에다가 객체로 써도 됌
export default function FunctionComponent({ name, message, children }) {
  // const { name } = props; //props 안을 구조분해할당해서 한번에 가져올 수 있음
  return (
    //props 파라미터 안에 있는 값을 가지고 와서 쓰는 것
    <div>
      {/* <h1>Hi {props.name}</h1> */}
      {/* 구조분해할당을 통해 변수 이름만 써도 가능 */}
      <h1>WOW {name}</h1>
      <h1>WOW {message}</h1>
      <div>{children}</div>
    </div>
  );
}
FunctionComponent.defaultProps = {
  name: '홍길동',
};
FunctionComponent.propTypes = {
  //name의 타입을 지정할 수 있음. 꼭 import 해줘야함
  //만약 name의 값에 다른 타입이 들어가면 실행은 되나, 개발자에게 검사탭에서 warning으로 알려주는 것 까지 가능
  //유연한 js의 오류를 조금이나마 잡아주는 역할
  name: propTypes.string,
};
