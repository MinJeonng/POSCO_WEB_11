// 처음엔 값을 받는 것을 전역변수로 하니까 두번 value를 받아야하는 번거로움이 있었는데
// function안에다가 넣으니까 한번만 하면 되었다.
// 이 밑에 operator, result1 도 함수안에 넣어도 정상적 실행

// let text1 = document.getElementById('make1');
// let text2 = document.getElementById('make2');
let operator = document.getElementById('operator');
let result1 = document.getElementById('make4');

text1.setAttribute('placeholder', '값 작성');
text2.setAttribute('placeholder', '값 작성');

let calculate = () => {
    // let var1 = text1.value;
    // let var2 = text2.value;
    let var1 = document.getElementById('make1').value;
    let var2 = document.getElementById('make2').value;
    let result = 0;

    switch (operator.value) {
        case '+':
            result = Number(var1) + Number(var2);
            break;
        case '-':
            result = Number(var1) - Number(var2);
            break;
        case 'x':
            result = Number(var1) * Number(var2);
            break;
        case '/':
            result = Number(var1) / Number(var2);
            break;
        default:
            alert('올바른 연산자를 입력해주세요.');
            break;
    }
    result1.value = result; //이렇게 넣어줘야 결과값에 올라가니까.
    return result;
};
let reset = () => {
    document.getElementById('make1').value = '';
    document.getElementById('make2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('make4').value = '';
};
