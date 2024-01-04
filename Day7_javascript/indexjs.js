// alert("링크방식") - indexjs.html에서 쓰임

/*
//var
var name = "홍길동";
// var : 중복할당이 가능하지만 순서대로 입력한거에 따라 사라짐
var name = "나비";
// 값 할당을 하지 않으면 undefined라고 뜸
var age;
// 재할당을 할땐 다 쓰는게 아니라 아래와 같이 쓰면됌
age = 20;
//clg 만 쓰면 자동으로 쓰여짐
console.log(age); */

/*
//let
// 변수 선언시 동일한 이름 불가능, 중복선언 안되면 빨간줄로 표현됌
let  name = "홍길동";
//let name = "나비"; 중복선언은 불가능
console.log(name);
name = "나비"; //원래 있는 값에 데이터만 바꿔주는 것이기 때문에 가능함.
console.log(name);
*/

/*
//const 상수
const AGE = 20; //값이 꼭 할당되어야지 오류안남, 즉, 고정된 값이어서 재할당이 안됌. 한번 지정되면 데이터 바꿀 수 없음
//AGE = 30;  이렇게 불가.
*/

/*
// 데이터 타입(자료형)
let myName = "홍길동";
let email = 'jdjdj@naver.com';
let city = "서울";
console.log(myName, email, city);
console.log("안녕 " + myName , "입니다."); //다른거랑 붙일때 , 랑 + 도 되지만 +로 쓰는게 더 나음

// 요즘엔 다 이렇게 쓰니까 백틱문자쓰기!! ${} 안에다가 변수 쓰면됌.
console.log(`하윙 ${email} 입니다`);
*/

//데이터타입 - 숫자형
let number = 123;
console.log(number);

//Boolean
const CHECKED = true;
const ISSHOW = false;
console.log(CHECKED, ISSHOW);

//Undefinde - 미할당데이터
let noData;
console.log(noData);

//Null - 의도적으로 비어있음을 의미할 때 사용
let empty = null;
console.log(empty);

//Array
let fruits = ["lemon", "apple", "orange", "pineapple" ];
console.log(fruits[0], fruits[3]);
//배열의 길이
console.log(fruits.length);
//마지막 순서에 추가됌
fruits.push("bear");
// 마지막 순서껄 빼기
fruits.pop();
// 맨 앞에 값 추가
fruits.unshift("melon");
// 맨 앞 값 삭제
fruits.shift();
//찾을 값이 어디에 있는지 인덱스 값을 확인할 수 있음
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("bear")); //찾는 값이 없으면 -1이 출력됌
//찾을 값의 존재 유무! 없을땐 false출력
console.log(fruits.includes("orange"));
console.log(fruits.includes("papaya"));
//배열값 반전
console.log(fruits.reverse());
console.log(fruits); //반전시키고 나서 이 행을 실행하면 반전된 값이 알아서 적용되서 나옴.b