use kdt;

CREATE TABLE membership (
	id VARCHAR(10) NOT NULL PRIMARY KEY,
	pw VARCHAR(20) NOT NULL,
	name VARCHAR(5) NOT NULL,
	gender ENUM(‘F’ , ‘M’ , ‘’) DEFAULT ‘’,
	birthday DATE NOT NULL,
	age INT(3) NOT NULL DEFAULT 0
);


INSERT INTO membership (id, pw, name, gender, birthday, age) VALUES 
('hong1234', 'dkkek', '강혁', 'M','1990-01-31',33),
('sexysung' , 'd98skjf','리리' , 'F' , '1992-03-31' ,31),
('pweosl', 'dkfj39', '한조' ,'M' ,'1970-05-02',53),
('sswindown','39rkso','위도우', 'F','1984-10-18',39),
('lalaland','99slowp','크랠','M','1976-06-27',47),
('mamamlis','29dfemsi','미리미' ,'F','2001-06-03',22),
('lastli', '30spoqp','마지막','M','1999-11-11',24);

SELECT * FROM membership; 

-- SELECT * FROM kdt.membership;

-- 5.1 : 모든 회원목록을 가져오는데, 이때 birthday 컬럼의 값을 기준으로 오름차순 정렬
SELECT * FROM membership ORDER BY birthday ASC;

-- 5.2 : 회원 목록 중 gender 컬럼의 값이 'M' 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬
SELECT * FROM membership where gender = 'M' ORDER BY name DESC;

-- 5.3 : 1990년대 태어난 회원의 id, name 컬럼을 가져오기
SELECT id, name FROM membership where birthday LIKE '199%';

-- 5.4 : 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오
SELECT * FROM membership where birthday LIKE '%-06-%' ORDER BY birthday ASC;

-- 5.5 : gender 값이 'M'이고, 1970년대에 태어난 회원의 목록을 가져오시오.
SELECT * FROM membership where gender = 'M' AND birthday LIKE '197%';

-- 5.6 : 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져와라.
SELECT * FROM membership ORDER BY age DESC LIMIT 3;

-- 5.7 : 모든 회원목록 중 나이가 25이상 50이하인 회원의 목록 출력
SELECT * FROM membership where age BETWEEN 25 AND 50;

-- 5.8 : id 컬럼의 값이 hong1234인 레코드와 pw 컬럼의 값을 12345678로 변경
-- update or delete는 조회하는게 아니므로 select문으로 보여달라고 하기전에는 즉각적으로 테이블이 보여지는 것이 아님!
UPDATE membership SET pw = '12345678' WHERE id = 'hong1234';

-- 5.9 : id 컬럼의 값이 lastli 레코드 삭제
DELETE FROM membership WHERE id = 'lastli';
SELECT * FROM membership; 



