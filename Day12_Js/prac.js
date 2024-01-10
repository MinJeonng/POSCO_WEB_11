$('.box').css('width', '300px');
$('.box').css('height', '300px');
$('.box').css('background-color', 'beige');
$('h3').css('text-align', 'center');
$('h3').css('margin-top', '130px');

function changeApple() {
    $('img').attr('src', 'apple.jpeg');
    $('h3').remove();
}
function changeBanana() {
    $('img').attr('src', 'banana.jpeg');
    $('h3').remove();
}
function changeGrape() {
    $('img').attr('src', 'grape.jpeg');
    $('h3').remove();
}
function changePeach() {
    $('img').attr('src', 'peach.jpeg');
    $('h3').remove();
}

//이걸 html에서 img를 없애고 아예 js에서 img태그를 만든다음에
//거기다가 img를 append해보자
