$('.box').css('width', '300px');
$('.box').css('height', '300px');
$('.box').css('background-color', 'beige');
$('p').css('text-align', 'center');
$('p').css('margin-top', '130px');

function changeApple() {
    $('img').attr('src', 'apple.jpeg');
    $('p').remove();
}
function changeBanana() {
    $('img').attr('src', 'banana.jpeg');
    $('p').remove();
}
function changeGrape() {
    $('img').attr('src', 'grape.jpeg');
    $('p').remove();
}
function changePeach() {
    $('img').attr('src', 'peach.jpeg');
    $('p').remove();
}
