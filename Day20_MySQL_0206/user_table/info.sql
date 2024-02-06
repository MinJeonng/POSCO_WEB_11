-- setting
use kdt;
-- id는 알아서 숫자증가시키게 해놔서 값을 넣지 않아도 됌. 

DROP TABLE user;

CREATE TABLE user (
	id INT NOT NULL auto_increment primary key,
    username VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- insert문으로 데이터 삽입
-- 문자는 홑따옴표!
--  번개모양 옆에 커서있는 번개는 한줄만 실행해라 라는 의미. 내가 선택한 한줄

INSERT INTO user (username, age, address) VALUES ('베키', 8, '서울시 서초구');
INSERT INTO user (username, age, address) VALUES ('까미', 3 ,'서울시 서초구');
INSERT INTO user (username, age, address) VALUES ('순이' ,3 ,'서울시 서초구');
INSERT INTO user (username, age, address) VALUES ('김태형', 29 ,'서울시 마포구');
INSERT INTO user (username, age, address) VALUES ('구름이', 10 , '서울시 용산구');
INSERT INTO user (username, age, address) VALUES ('현태형', 20, '서울시 종로구');
INSERT INTO user (username, age, address) VALUES ('미니미', 13, '서울시 영등포');


-- 쿼리문으로 여러 조건 문제 

-- age, username 순으로 테이블이 보여짐
select age, username from user;

-- age가 8이상, 25 이하만 User만 나옴
select * from user where age >= 8 and age <= 25;

-- 원하는 username 찾음
SELECT * FROM user WHERE username = '베키';

-- 큰 값부터 작은 값까지, order by는 where뒤에 작성
SELECT * FROM USER ORDER BY age DESC;

-- 오름차순 정렬 (근데 기본값이 asc라 굳이 안써도 됌)
select * from user order by username asc;

-- 원하는 조건을 username을 기준으로 내림차순
select * from user where age >=10 order by username desc;

-- 비교문자 
-- ~~~서초~~ 다 가져오게 만듦, %가 양옆에 붙으면 저 단어가 들어간 행을 가져올 수 있게
SELECT * FROM user where address LIKE '%서초%';

-- 마지막 글자가 '형'인 user를 조회;
select * from user where username like '__형';

-- 15~30사이의 age를 파악해서 나오게 됌. 설정값 포함해서 나옴 (이상이하)
select * from user where age between 15 and 30;

-- in은 (a,b) a 아니면 b 나오게끔 출력 , limit 뒤에 저 개수만큼 출력
select * from user where age IN (10,29) ORDER BY age DESC LIMIT 2;

-- 주소 값 중 null만 가져와라. (is not null 하면 null이 아닌 것만 가져와라)
SELECT * FROM user WHERE address IS NULL;

-- set : 바꾸고 싶은 값
UPDATE user SET address = '부산시 수영구', age = 25 WHERE id = 1;

-- update, delete는 항상 where이 붙는다고 생각
-- 이렇게 id가 사라지면 그 행이 지워지고 끝이라 10은 못쓰는 번호가 되어버림. key는 삭제하는 순간 날라가버림(무결성원칙떄문에)
DELETE FROM user WHERE id = 10;