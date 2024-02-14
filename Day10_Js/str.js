let str = 'Happy day~!  ';
/*
console.log(str.length); //빈 문자 포함 문자열길이
console.log(str.toUpperCase()); //대문자로 변환
console.log(str.toLowerCase()); //소문자로 변환
//toUppercase(), toLowerCase() 보통 회원가입시 아이디 중복을 막기위해 자주 사용된다.

console.log(str.indexOf('y')); //찾고싶은 문자가 여러개 있어도 맨 첫번째 문자만 몇번쨰 인덱스인지 반환
console.log(str.slice(2)); //()안의 인덱스 수부터 보여짐
console.log(str.slice(2, 5)); //2에서부터 n-1까지 잘라서 보여짐

console.log(str.slice(2, -3)); //음수가 붙으면 반대에서부터 자름

console.log(str.replace('a', 's')); //문자 변경(단, 첫번째 문자만 가능)
console.log(str.replaceAll('y', 'i')); // 모든 문자 y를 i로 변경
console.log(str.repeat(2)); // 문자열 반복
console.log(str.trim.length);

console.log(str.split(''));
console.log(str.split(' '));
console.log(str.split('p')); // () 안의 문자는 공백문자가 되면서 사라진다.
console.log(str.split('y'));
console.log(str.split('Happy')); //공백문자가 되면서 사라짐*/

//객체 안에 들어가있는 함수를 메소드

const colors = ['red', 'orange', 'yellow'];
//메소드 체이닝
console.log(colors.join('&&')); //join()  join()안에 있는 문자를 기준으로 명함,
console.log(str.trim().toLowerCase().split('p')); // 이런식으로 쓰려고 노력해야함

let hello = 'Hello~';
helloArr = hello.split(''); //한글자씩 split. 왜냐면 split()안의 문자가 공백문자가 되니까, 공백이 하나씩 생기는 것.
console.log(helloArr);
let reverseHello = helloArr.reverse();
console.log(reverseHello);
let helloAgain = reverseHello.join('');
console.log(helloAgain);
//한번에 표시
console.log(hello.split('').reverse().join(''));
