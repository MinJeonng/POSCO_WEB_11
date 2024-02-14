$(document).ready(function () {
    let calendar = $('#calendar');
    let currentDate = new Date();

    // 캘린더 렌더링
    renderCalendar(currentDate);

    // '작성' 버튼 클릭 이벤트
    $('button').click(function () {
        let date = $('#date').val();
        let content = $('#content').val();

        // 작성한 내용을 캘린더에 추가
        if (date && content) {
            let eventDiv = $('<div>').addClass('event').text(content);
            $('#' + date).append(eventDiv);
        }
    });
    // '초기화' 버튼 클릭 이벤트
    $('#reset').click(function () {
        // 모든 이벤트 내용 제거(input 두개 모두 같이 제거)
        $('.event').remove();
        $('#date').val('');
        $('#content').val('');
    });

    // 날짜 클릭 이벤트
    $('.day').click(function () {
        let clickedDate = $(this).attr('id');
        $('#date').val(clickedDate);
    });

    function renderCalendar(date) {
        let year = date.getFullYear();
        let month = date.getMonth();

        // 달력 헤더
        let header = $('<div>')
            .addClass('header')
            .text(year + '년 ' + (month + 1) + '월');
        calendar.append(header);

        // 달력 바디
        let body = $('<div>').addClass('body');

        // 요일 표시를 바디의 첫 번째 행으로 추가
        let dayNames = ['월', '화', '수', '목', '금', '토', '일'];
        let row = $('<div>').addClass('row');
        for (let i = 0; i < 7; i++) {
            let dayNameDiv = $('<div>').addClass('day-name').text(dayNames[i]);
            row.append(dayNameDiv);
        }
        body.append(row);

        for (let day = 1; day <= 31; day++) {
            //한주의 마지막 날인지 확인
            //1주일의 첫날인 경우(7로 나누어 떨어지지 않는 경우) div요소를 row라는 이름으로 생성
            if (day % 7 === 1) {
                row = $('<div>').addClass('row');
            }
            //id 속성은 "년-월-일" 형식으로 설정, text를 사용하여 날짜를 표시
            let dayDiv = $('<div>')
                .addClass('day')
                .attr('id', year + '-' + (month + 1) + '-' + day)
                .text(day);
            row.append(dayDiv);
            if (day % 7 === 0 || day === 31) {
                body.append(row);
            }
        }

        calendar.append(body);
    }
});
