export default function SyntheticEvent() {
  function syntheticClick(e) {
    console.log(e);
    console.log('Synthetic Event Click!');
    //콘솔에 기록되는 e 객체는 SyntheticEvent (합성이벤틑)
    //: 리액트가 DOM이 아닌 VirtualDOM을 사용하는 것처럼
    // 웹 브라우저의 nativeEvent가 아닌 nativeEvent를 감싼 SyntheticEvent 사용

    //즉, 리액트에서 onClick, onChange 등과 같은 이벤트들은 브라우저의 기본 이벤트가 아닌, 브라우저의 이벤트들을 포함하고 있는 리액트의 고유한 이벤트 객체
  }

  function printInputValue(e) {
    console.log(e.target.value); //input안에 value가 바뀔대마다 콘솔에서 출력함!(input안의 값의 변화를 보고싶으면 onChange사용하면 된다.)
  }
  return (
    <div>
      <button onClick={syntheticClick}>synthetic event 콘솔 찍기</button>
      <br />
      <input type="text" placeholder="입력하세요" onChange={printInputValue} />
    </div>
  );
}
