// $(document).ready(function()){
//   console.log("ready() - 문서의 DOM 트리가 완성되면 실행되는 이벤트")
// }
// $(function(){
//   console.log("안녕")
// })

//click()
$('.hello').click(function () {
    $('.hello').css('color', 'pink');
});

//클릭한 것만 색을 바꾸고 싶다.
$('.nums').click(function () {
    // $('.nums').css('color', 'blue'); //클릭하면 블루색바뀜

    //$(this)는 자기자신 = 이벤트가 적용된 요소
    $(this).css('color', 'blue'); //클릭한 것만 색 바뀜
});

$('.nums').on('click', function () {
    $(this).css('color', 'plum');
});

//mouseover(): 마우스 올렸을때
$('.numbers').mouseover(function () {
    // $('.numbers').css('background-color', 'green');
    // $('.numbers').append('<li>.mouseover() call');
    $(this).css('background-color', 'green');
});

//hover(): 마우스 올렸을떄와 뗐을때
// $('.div-hover').hover(
//     function () {
//         //올렸을때
//         $(this).addClass('hover');
//     },
//     function () {
//         //뗐을때
//         $(this).removeClass('hover');
//     }
// );
$('.div-hover').hover(function () {
    $(this).toggleClass('hover');
}); //올리고 떼고가 두번 class로 안받아도 한번에 가능

//scroll()
//ex. 윈도우 창 스크롤 할 경우
$(window).scroll(function () {
    console.log('scroll');
});

//keydown()
$('.input-key').keydown(function (e) {
    if (e.code === 'ArrowUp') {
        //방향키를 움직였을때
        console.log('up');
    } else if (e.code === 'ArrowDown') {
        console.log('down');
    }
});
