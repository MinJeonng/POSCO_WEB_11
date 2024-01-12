//클래스 조작
function addClass() {
    //함수이름과 메소드 이름을 같게 한 것 뿐이지 다른 것.
    $('#hi').addClass('font-size');
}
function removeClass() {
    $('#hi').removeClass('font-size'); //특정 클래스 삭제
    // $('#hi').removeClass(); //속해있는 모든 클래스를 삭제해버림
}
function hasClass() {
    console.log($('#hi').hasClass('font-size'));
    //true or false 반환
    //해당 클래스가 지정한 요소를 가지고 있는가 boolean 값 으로 반환
}
function toggleClass() {
    $('#hi').toggleClass('bg-color');
    //클래스가 있으면 삭제하고, 없으면 추가
    //여기선 bg-color가 적용되어 있으면 삭제되고 없으면 추가하고..(add & remove를 같이 하는 것)
}
function switchClass() {
    $('#hi').switchClass('color-blue', 'color-purple', 1000);
    //시간에서 1000은 1초라는 의미
}
