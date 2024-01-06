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


//실습 4,5
let age = Number(prompt("나이를 입력해주세요"));
let gender = prompt("성별을 입력해주세요");
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





