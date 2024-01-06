//조건문
//if문

/*
조건은 항상 true||false가 와야함
if(조건) {
  조건이 참일 때 실행
}else{
  조건이 거짓일 떄 실행
}
*/

/*
if( 5> 6){
  console.log("큽니다");
} else{
  console.log("작습니다.");
}

let isShow = true;
let checked = false;

//거짓일때 실행되어라.

if (isShow) {
  console.log("show");
}
//이 조건이 거짓일때 실행하고 싶으면 not 연산자 사용하기.
// 즉, 원래 checked가 false 값이라 콘솔 출력이 안되는데 !로 했기 때문에 조건이 false임에도 출력이 되는 것!!!!
if(!checked){
  console.log('checked');
}

//if /else if/ else
let name = "임씨";
if( name === '홍길동'){
  console.log("홍길동입니다.")
}else if(name ==="성춘"){
  console.log("성춘향입니다")
}else if(name === "이몽룡"){
  console.log("이몽룡입니다.")
}else{
  console.log("변사또입니다.")
}
*/

/*
//if중첩문
const myID = 'abc';
const myPw = "2342";
const inputID = prompt("아이디입력");
const inputPW = prompt("비밀번호 입력");
console.log(inputID, inputPW);
if(myID === inputID){
  if(myPw === inputPW){
    console.log('로그인에 성공했습니다');

  }else{
    console.log("비밀번호가 틀렸습니다.");
  }
}else{
  console.log('아이디가 틀립니다.');
}
*/

/*
//삼항 연산자
// ? 다음이 참!!! 위의 if 중첩문이랑 비교하면서 보기
let myID = 'abc';
let myPW = '1234';
const inputId = prompt('아이디를 입력하세요');
const inputPw = prompt('비밀번호를 입력하세요');

// myID === inputId ? console.log("존재하는 아이디") : console.log("아이디가 틀립니다.");

//중첩도 가능, 문단 나눠놓은거 보면 두번째 문단 두개 log는 참이고, 맨 밑에 아이디 나오는 : 뒤에가 거짓일때 실행
myID === inputId
    ? myPW === inputPw
        ? console.log('로그인에 성공하였습니다.')
        : console.log('비밀번호가 틀렸습니다.')
    : console.log('아이디가 틀립니다.');
*/

//삼항연산자 실습
//new Date() : 현재 시간을 보이는 것
// getHours() : 시간만을 보이게 하는
let now = new Date().getHours();
0 <= now <= 11 ? console.log('오전') : console.log('오후');

/*
//실습 4,5
let age = Number(prompt("나이를 입력해주세요"));
let gender = prompt("성별을 입력해주세요 (남자/여자 중 하나로 입력해주세요.)");
if(age >=20 ){
  if(gender === "여자"){
    console.log("성인여자");
  }
  else{
    console.log("성인남자");}
  }
else if(age >= 17){
  if(gender === "여자"){
    console.log("여자 고등학생");
  }else{
    console.log("남자 고등학생")
  }
}
else if(age >=14){
  if(gender === "여자"){
    console.log("여자 중학생");
  }else{
    console.log("남자 중학생")
  }
}
else if(age >= 8){
  if(gender === "여자"){
    console.log("여자 초등학생");
  }else{
    console.log("남자 초등학생")
  }
}
else if(age >= 0){
  if(gender === "여자"){
    console.log("여자 유아")
  }else{
    console.log("남자 유아");
}
}
*/

/*
// 수정 보완(1)- 실습 5  : 그러나 이것도 반복되는 문구가 너무 많다.

let age1 = Number(prompt("나이를 입력해주세요"));
let gender1 = prompt("성별을 입력해주세요 (남자/여자 중 하나로 입력해주세요.)");

if(gender1 === "여자"){
  if(age >=20 ){
    console.log(`성인 ${gender}`);
  }else if(age >=17){
    console.log(`고등학생 ${gender}`);
  }else if(age >=14){
    console.log(`중학생 ${gender}`);
  }else if(age >=8){
    console.log(`초등학생 ${gender}`);
  }else {
    console.log(`유아 ${gender}`);}
}else{
  if(age >=20 ){
    console.log(`성인 ${gender}`);
  }else if(age >=17){
    console.log(`고등학생 ${gender}`);
  }else if(age >=14){
    console.log(`중학생 ${gender}`);
  }else if(age >=8){
    console.log(`초등학생 ${gender}`);
  }else {
    console.log(`유아 ${gender}`);}
}
*/

/*
//성별을 기준으로 했을 때 (함수를 이용하자!)

let age = Number(prompt("나이를 입력해주세요"));
let gender = prompt("성별을 입력해주세요 (남자/여자 중 하나로 입력해주세요.)");

if(gender === "남자"){
  ageFunc(age, gender);
}else if(gender === "여자"){
  ageFunc(age, gender);
}else{
  alert('성별을 다시 입력해주세요');
}
function ageFunc(age, gender){
  if(age >= 20 ){
    console.log(`성인 ${gender}`);
  }else if(age >= 17){
    console.log(`고등학생 ${gender}`);
  }else if(age >= 14){
    console.log(`중학생 ${gender}`);
  }else if(age >= 8){
    console.log(`초등학생 ${gender}`);
  }else if(age >= 0){
    console.log(`유아 ${gender}`);
  }else{
    alert("나이를 다시 입력해주세요.");
  }
}
*/
