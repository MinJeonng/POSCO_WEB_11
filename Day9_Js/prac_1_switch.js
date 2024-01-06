//조건문
//switch문
/* 기본구조
switch(변수){
  case 값: //변수 === 값
    break;
  case 값1: //변수 === 값1
    break;
  default: //기본값에 해당
    break;
}
break : 조건문, 반복문에서 빠져나갈때 사용하는 키워드
이게 없으면 해당되는 조건문부터 쭉 실행된다.
*/

let a = 2 * 2;
switch (a) {
    case 3:
        console.log('현재 값은 3 입니다.');
        break;
    case 4:
        console.log('현재 값은 4 입니다.');
        break;
    case 5:
        console.log('현재 값은 5 입니다.');
        break;
    default:
        console.log('알 수 없는 값 입니다.'); //default가 나오면 switch문이 끝난거라서 굳이 break를 안써도 된다.
        break;
}

let grade = 'B';
switch (grade) {
    case 'A':
        console.log('학점 A');
        break;
    case 'B':
        console.log('학점 B');
        break;
    case 'C':
        console.log('학점 C');
        break;
    case 'C':
        console.log('학점 D');
        break;
    case 'C':
        console.log('학점 F');
        break;
    default:
        console.log('알 수 없는 값 입니다.');
}
