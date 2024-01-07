//반복문
//while 문
/*
while(조건문){
  반복할 코드
}

주의사항 : 조건문에 탈출조건이 있거나 , break가 필수!



//step1. 1부터 5까지 1씩 증가
let step1 = 1;
while (step1 <= 5) {
    console.log(step1);
    step1++;
}
// step2 . 9부터 4까지 1씩 감소
let step2 = 9;
while (step2 >= 4) {
    console.log(step2);
    step2--;
}
//step3. 1부터 10까지 홀수 출력
let step3 = 1;
while (step3 <= 10) {
    if (step3 % 2 == 1) {
        console.log(step3);
    }
    step3++;
}

//step4. break 사용
let step4 = 0;
while (true) {
    console.log(step4);
    step4++;
    if (step4 === 10) {
        //10이 되는 순간 break
        break;
    }
}

//조건문에 탈출조건
let step5 = 0;
while (step5 <= 10) {
    if (step5 % 2 === 0) {
        console.log(step5);
    }
    step5++;
}
*/
//구구단
let i = 2;
let j = 1;
while (i <= 9) {
    console.log(`---${i}단---`);
    while (j <= 9) {
        j++;
        console.log(`${i}x${j} = ${i * j}`);
    }
    i++;
    j = 1; // 다시 또 새로운 3단,4단에서 곱하기 1을 해줘야하니까 reset개념
}
