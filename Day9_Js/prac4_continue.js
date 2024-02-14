//반복문제어
/*
let sum = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
*/
//실습 9 - 2또는 3의 배수의 총합

let sum = 0;
let num = 0;
while (num < 100) {
    if (num % 2 == 0 || num % 3 == 0) {
        sum += num;
    }
    num++;
}
console.log(sum);

let sum1 = 0;
for (let num = 0; num < 100; num++) {
    if (num % 2 == 0 || num % 3 == 0) {
        sum1 += num;
    }
}
console.log('sum', sum1);

//continue
let sum2 = 0;
for (let num = 0; num < 100; num++) {
    if (num % 2 !== 0 && num % 3 !== 0) {
        continue;
    }
    sum2 += num;
}
console.log('sum2', sum2);
