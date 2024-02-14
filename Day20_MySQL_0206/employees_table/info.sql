
use kdt; 
CREATE TABLE employees (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(31) NOT NULL,
    department VARCHAR(31) NOT NULL,
    salary INT 
);

-- 한번에 insert 가능
INSERT INTO employees (username, department, salary) VALUES 
('홍길동', 'IT개발팀', 5000),
('이몽룡', '인사팀' ,4000),
('향단이' , '재무팀' , 3500),
('임꺽정' ,'인사팀', 4300),
('놀부' , '디자인팀' , 3900),
('김민지' , 'IT개발팀', 5300),
('문동은' , '디자인팀', 4000),
('박연지','재무팀' , 3200),
('이도현' , 'IT개발팀', 5500),
('박지성' , '기획팀' , 3400);



-- 부서를 중복 제거해서 가져옴
SELECT DISTINCT department FROM employees;

-- group by : 특별한 그룹을 묶어서 해당되는 값들의 평균 급여 구하는 그런 것도 가능
-- as : 이름 as 뒤에껄로 변경 가능.
-- select로 부서를 정해서 평균을 구하고 그걸 다시 이름 변경하고, 그룹을 또 부서끼리 묶어서 출력 , 조건을 having을 이용해서 또 붙일 수 있음 4000넘는 것도 추가.
select department, avg(salary) as avg_salary from employees group by department having avg(salary) > 4000;

select sum(salary) as total_salary from employees;

-- employees가 몇명? 즉, 전체 행이 몇개인지. (또 where로 조건을 줄 수 있음)
select count(*) as count_employees from employees where department = 'IT개발팀';