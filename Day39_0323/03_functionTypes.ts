//func type

//선택적 매개변수 - ? 처리, 맨 뒤에 있어야 한다.
function print(a: number, b?: number, c?: number) {
  console.log('print()출력');
  console.log(a);
  console.log(b);
  console.log(c);
}
print(2, 4, 5);
print(3, 4); // 3 4 undefined
print(2);

//매개변수에 기본값 할당 가능
function print2(a: number, b: number, c = 100) {
  //c와 같이 매개변수에서 기본값 할당함
  console.log('print2()출력');
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(2, 4, 5);
print2(4, 5); // 4 5 100

function sayHello(): void {
  console.log('히사시부리'); //void라고 하면 Return이 필요없음
}
sayHello();

function sayHello1(): string {
  return 'hello';
}
console.log(sayHello1()); //void가 아니고 직접 타입 지정한 함수를 선언하려면 console이용

//화살표 함수 가능
const squareArea = (x: number, y: number): number => {
  //매개변수 뒤에 타입은 명시해도 안해도 그만, return 타입임 만약뭘해도 number라면
  return x * y;
};
console.log(squareArea(2, 3));

//interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string; //매개변수는 number이고, 결과값은 string이라는 의미
}

const codingon: Greet = {
  name: 'codingon',
  hi() {
    return '저는' + this.name;
  },
  bye(count: number) {
    return `작별인사를 ${count}번 했어요`;
  },
};
console.log(codingon.hi());
console.log(codingon.bye(3));

//never
// : 함수의 끝에 절대 도달하지 않는 함수
function goingOn(): never {
  while (true) {
    console.log('gol');
  }
} //무한루프이기 때문에 함수의끝에 도달할 수 없다.
