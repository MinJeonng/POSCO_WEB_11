//반복문
//for문

for (초기값; 조건식; 증감식) {
    //반복코드
}

//1. 5부터 0까지 1씩 감소
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

//2. 1부터 10까지 중에서 짝수를 출력
//sol1. 반복문과 조건문을 활용
for (let j = 1; j <= 10; j++) {
    if (j % 2 == 0) {
        console.log(j);
    }
}

//sol2. 증감값 변경
for (let z = 2; z <= 10; z = z + 2) {
    console.log(z);
}
// 3. 배열과 함께
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'nany', 'purple'];
for (let p = 0; p < colors.length; p++) {
    console.log(`무지개 ${p + 1} 번째 색상은 ${colors[p]} 입니다.`);
}

//실습 7
const inputNum = Number(prompt('숫자를 입력해주세요'));
for (let num = 1; num <= inputNum; num++) {
    if (num % 13 == 0 && num % 2 == 1) {
        console.log(num);
    }
}

//실습 8 - 이중 for문, 구구단
for (let i = 2; i <= 9; i++) {
    console.log(`---${i}단---`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i}x${j} = ${i * j}`);
    }
}
