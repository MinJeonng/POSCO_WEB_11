const btn = document.getElementById('btn');
const def = document.getElementById('default');
const input = document.getElementById('input');

//btn.addEventListener("이벤트 이름",콜백함수)
btn.addEventListener('click', function (event) {
    event.preventDefault;
    console.log(event);
    console.log(event.target);
    // console.log('HIHIHIHIHI');
});
btn.addEventListener('mouseover', function () {
    console.log('요소에 커서를 올렸을 때');
});
btn.addEventListener('mouseout', function () {
    console.log('마우스가 요소를 벗어날떄');
});
btn.addEventListener('mousedown', function () {
    console.log('마우스를 누르고 있는 상태');
});

//input에다가 쓰는게 적당함.
input.addEventListener('focus', function () {
    console.log('포커스가 갔을떄');
    // alert('입력');
});
//포커스가 벗어나는 순간
input.addEventListener('blur', function () {
    console.log('blur');
});
//길이 제한할떄, 타자를 칠 때 발생
input.addEventListener('keydown', function () {
    console.log('키를 누르는 순간에만 발생');
});

//this - js에서는 자기 자신을 의미함
//해당 함수가 속해있던 객체의 참조
// 무언가를 클릭할 때 불러오는 함수(콜백함수)에서 this는 그 무언가를 의미함.

//preventDefault()
def.addEventListener('click', function (e) {
    e.preventDefault(); //클릭을 눌렀을때 전송을 막는 event
    //원래 form안에 있는 버튼에 타입을 정하지 않으면 전송됐는데 이걸 통해서 전송을 막았음
    console.log(this);
    this.textContent = '클릭함'; //나 자신을 바꿔버림
});
