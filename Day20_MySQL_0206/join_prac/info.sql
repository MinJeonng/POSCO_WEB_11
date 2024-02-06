CREATE TABLE customer(
  id varchar(10) not null primary key,
  name varchar(10) not null,
  birthday date not null

);
INSERT INTO customer (id, name, birthday) VALUES
('aaa','홍길동','1990-02-03'),
('bbb','mark','1992-03-24'),
('ccc','justin','2000-12-23');

--join할 테이블 명을 가지고 와서 조인할 값  이름을 해서 customer_id 이런식으로 나타나게함
-- 다른 테이블이랑 조인할 테이블에는 외래키가 뭔지를 알려줘야함
-- FOREIGN KEY (customer_id) REFERENCES customer(id) : orderlist의 customer_id는 customer 테이블의 id를 참조한다는 의미
-- customer_id 를 외래키라고 지정함


CREATE TABLE orderlist(
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  customer_id VARCHAR(10) NOT NULL,
  product_name VARCHAR(20) NOT NULL,
  quantity INT,
  FOREIGN KEY (customer_id) REFERENCES customer(id) 
);

-- orderlist의 id는 AUTO_INCREMENT니까 값입력해줄 필요없음
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES
('aaa','맥북프로',1),
('ccc', '모니터', 10),
('bbb','핸드폰',20),
('bbb','마우스',4),
('ccc', '키보드', 6);


-- SELECT customer.id, customer.name, orderlist.product_name FROM customer 
-- INNER JOIN orderlist ON customer.id = orderlist.customer_id
-- WHERE orderlist.quantity >= 5;

SELECT a.id, a.name, b.product_name FROM customer as a 
INNER JOIN orderlist as b ON a.id = b.customer_id
WHERE b.quantity >= 5;




-- 
CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(255) NOT NULL
);


CREATE TABLE employees(
  employees_id INT PRIMARY KEY,
  username VARCHAR(31) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO (department_id, department_name) VALUES
(1, '기획팀'),
(2, 'IT개발팀'),
(3, '디자인팀');

INSERT INTO (employees_id, username, department_id) VALUES
(1, '홍길동', 2),
(2, '성춘향', 3),
(3, '이몽룡', NULL),
(4, '임꺽정', 2),
(5, '황진이', 3);

SELECT a.employees_id, a.username, b.department_name 
FROM employees as a INNER JOIN departments as b
ON a.department_id = b.department_id; 
-- inner join은 양쪽에 있는 데이터만 가져옴. null값이 있으면 출력이 안됌 


-- left join은 null이 보여짐
SELECT * 
FROM employees as a LEFT JOIN departments as b
ON a.department_id = b.department_id; 