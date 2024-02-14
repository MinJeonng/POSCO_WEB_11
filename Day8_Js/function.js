

//함수선언문(가장 기본적인 형태)
function sayHello(){
  console.log("지역 Hello"); //이건 scope이기 때문에 console.log만 하면 출력이 안됌
}
console.log("전역 Hello");
sayHello(); //함수를 호출해줘야 출력됨


//덧셈 기능이 있는 함수 선언문
sumFunction(10,20); //함수 위에 있어도 적용된다 . == 호이스팅 
const num1 = 11; //전역변수
function sumFunction(num2, num3){ //num2, num3 : 매개변수, ()안에 변수들을 매개변수라고 함
  const num1 = 11; //지역변수라서 전역변수의 const 변수랑 이름이 같음에도 잘 실행됌
  const sum = num1 + num2 + num3;
  console.log("지역변수", num1); //가장 먼저 지역변수를 찾고 그게 없으면 부모의 변수를 계속 찾는다.(const num1 = 11;이거를 주석처리하면)
  console.log(sum);
  return sum //return은 늘 함수의 맨 마지막에 사용됨, 값을 다시 전달해주는 역할.
}
// console.log("전역변수", num1);
sumFunction(50, 100); //매개변수와 이때 () 값의 수를 일치시켜야함, ()안의 값 = 인자

let result1 = sumFunction(30,20); //변수에다 함수를 넣을 수 있음.
console.log(result1);




//함수 표현식
// saybye(); //호이스팅이 불가해서 오류가남
let saybye = function(num0){
  console.log("bye");
  console.log(num0);
}
saybye(20);

//화살표 함수
let saybye1 = (num0) => {
  console.log("bye");
  console.log(num0);
  return num0 + 10;
}

saybye1(50);

let result = saybye1(60);
console.log(result);



//실습 1
//함수 선언문
function multifly1(n1,n2){
   let func = n1*n2;
   console.log(func); 
}
multifly1(4,5);

//함수 표현식
let multifly4 = function(n3,n4){
  let mul = n3*n4;
  console.log(mul);
}
multifly4(6,7);

// 화살표 함수
let multifly = (num7, num8) => {
  return num7 * num8;
}
console.log(multifly(3,7));
console.log(multifly(2,2));
// let result7 = multifly(3,7);
// let result8 = multifly(2,2);
// console.log(result7, result8);

//실습2
let square = function(num9){
  console.log(num9**2);
}
square(4);
square(5);
square(11);

//화살표 함수
let square1 = (num10) => {
  console.log(num10 ** 3);
}
square1(6);

