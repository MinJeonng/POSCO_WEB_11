// //하나의 모듈 파일에 하나의 모듈 만들기
const a = 10;
const b = 100;
function connect() {
    return a + b;
}
module.exports = connect; //이 함수를 외부에서 사용할 수 있음

//하나의 모듈 파일에 여러개 모듈 생성
const c = 100;
const d = 'd 변수';
const e = 50;
module.exports = { c, d, e };
