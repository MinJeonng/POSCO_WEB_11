const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS'; //이런식으로 변수를 따로선언해서 리듀서 여러개 사용될때 헷갈리지 않게 하고, 중복을 방지해준다. -> 액션을 발생시킬때 쓰눈 것
// 그러나 이 위의 방법은 효율적이지 못해서(늘 외우고 잇을수도 없고 꼭 한개에만 사용되는건 아니니까) 아래처럼 추가적으로 함수로 만들어서 사용함

//컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 함수 사용
export const plus = () => ({ type: PLUS }); //한개여서 Return 생략가능 //이때 type : PLUS는 문자열이 아니라 위에서 정의해준 그 플러스(counter/PLUS)임
export const minus = () => {
  //return 있게 하려면 이 방법
  return { type: MINUS };
};

//state 초기값 정의
const initialState = {
  number: 50,
};
//reducer 정의 : 상태 변화를 일으키는 함수 // 매개변수 --> (현재상태, 액션)
const counterReducer = (state = initialState, action) => {
  //action은 항상 객체 : 어떤 변화인지 type으로 판단을 한다.(type : 'sss', payload : ?) payload라는건 어떠한 값이 들어있을 것
  //type의 값을 가지고 swith문을 가지고 확인을 했었음
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};
export default counterReducer;
