// 함수형 컴포넌트를 만들어보자(App.js를 참고해서)
// 다른 파일에서도 쓰기 위해 exports

function Clock() {
  return (
    <div>
      {/* toLocaleTimeString() : 사용자의 문화권에 맞는 시간표기법으로 시간 리턴 */}
      <h1>현재 시간은 {new Date().toLocaleTimeString()}입니다.</h1>
    </div>
  );
}

export default Clock;
