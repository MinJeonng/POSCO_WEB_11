// object(객체) 실습
// object는 여러가지 데이터가 하나로 묶여있는 형태
let cat = {
  //key:value 형태
  name: "베키",
  age: 2,
  isCute:true,
  mew:function(){
    return "wowowolf";
  }

}
console.log(cat.name);
console.log(cat.age);
//함수를 실행시킬땐 함수이름에 ()를 꼭 써줘야 제대로 출력된다.
console.log(cat.mew())

let pet = {
  name : "강아지",
  gender :"여자",
  address : " 서울시 마포구",
  phone : "010-123-234"
}
console.log(pet);
console.log(pet.phone);

//실습2
let introduce = {
  name: "김민정",
  age : 26,
  address : "서울시 서초구",
  phone:function(){
    return "010-9999-9999";
  }
}
console.log(introduce.name);
console.log(introduce.age);
console.log(introduce.address);
console.log(introduce.phone());

//typeof: 데이터가 어떤 타입인지 알려주는 키워드
console.log(typeof "Hello");
console.log(typeof true);
const types = 20;
console.log(typeof types);

//실습3
//introduce는 실습2에 사용한 object
console.log(typeof 20 + " isn't " + typeof "실습" + " data type." );
let text = `Typeof를 boolean이나 null에 사용하면, ${typeof introduce}  결과를 얻을 수 있습니다.`;
console.log(text);

//형변환 : 데이터의 타입을 직접 변환시켜주는 것
//성적을 구하는 프로그램 만들기
// prompt() : 사용자에게 데이터를 입력받게 하는 것

// 밑에 나중에 정리할떄는 주석 지우고 하기
// let mathScore = Number(prompt("수학 점수를 입력하세요: "));
// let engScore = Number(prompt("영어 점수를 입력하세요: "));

// let avg = (mathScore + engScore) / 2;
// console.log(avg);

//문자 형 변환
let num = 123;
console.log(typeof num);

let a = String(num);
console.log(typeof a);

let b = num.toString(); //null과 undefined에서 사용불가
console.log(typeof b);

//숫자 형변환
console.log(Number("35345"));

//실습4
let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);

//연산자
let num_1 = 5;
num_1 += 10;
console.log(num_1)
let result1, result2;
let num_2 = 10;
let nums_2 = 10, num_3 = 15;
//뒤에 ++는 바로 그 단락에서 저장되지 않음
result1 = num_2++;
console.log(result1)

//뒤에 ++는 바로 그 단락에서 적용됨
result2 = ++num_3; //16
result2 = ++num_3; //17
console.log(result2)

// ++num, num++ 이거 차이점 엘리스 교안 찾아보기!

//비교 연산자(일치 연산자)
let d = 123;
let e = '123';

console.log(d == e); //t
console.log(d === e); //f
console.log(d != e); //f
console.log(d !== e); //t

//논리 연산자
let name = "뽀로로";
let age = "18";
let isAdult= '19'

if(name === "뽀로로" && age > 19){
  console.log('통과');
}else{
  console.log("돌아가");
}
//여기 다시 공부
// if(isAdult){ //isAdult가 false냐? 만약 !isAdult이면
//   console.log('통과')
// }
// else(console.log("돌아가"))

//not 연산자는 반대