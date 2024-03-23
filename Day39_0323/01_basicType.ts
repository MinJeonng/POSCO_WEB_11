// typescript basic type

//명시적 지정
let a: number = 1;

a = 2;
// a = 'hello' -> type error 발생
let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null; //null도 타입으로 존재함

//type 추론(암묵적으로)
let aa = 1; //type 명시를 하지않았지만 number라고 추론한것
// aa = 'df' error발생
let dd; //아무것도 쓰지 않으면 undefined or any 가 뜸
let ee = null; //any : 타입이 뭔지 잘 모르겠을때 any라고 함. 어떠한 타입이 오더라도 오류가 나지 않음, 그러나 지양할 것(자주 쓰게 되면 typescript를 쓰는 이유가 없음)

//배열
let numArr: number[] = [1, 2, 3, 4, 5]; // 이 배열에는 숫자만 들어올 수 있다.
let strArr: Array<string> = ['apple', 'banana', 'melon']; //Array<>표시로도 type 명시 가능

//배열의 원소가 여러 타입일 경우
let arr1: (number | boolean | string)[] = [1, true, 'string']; //()안에 ~한 타입들이 들어갈 수 있다.

//boolean, null, number array 가 원소가 될 수 있는 arr2
let arr2: Array<boolean | null | number[]> = [true, null, [1, 2, 3, 34, 5]];

//어떤 자료형이든 상관없는 배열
let arr3: any[] = [1, 2, 3, 4, 5, 6, 'wow', true, null];

//object 객체
let obj1: object = {
  name: 'codingon',
  grade: 1,
};
