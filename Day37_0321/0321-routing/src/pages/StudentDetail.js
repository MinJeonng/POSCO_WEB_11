import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function KDTstudent() {
  console.log('useParams', useParams()); //{name : '~~~'}
  const { name } = useParams();
  const navigate = useNavigate();
  // 쿼리문에서 값 가져오기
  const searchParams = useSearchParams();
  const keyword = searchParams.get('name'); //있을때만 화면에 나오도록 해야함
  return (
    <>
      <span>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span>입니다.
      </span>
      <br />
      {/* 다른 페이지에선 쿼리문을 이용하지 않기때문에 &&을 써서 필요한 곳에만 사용될 수 있게 적용  */}
      {keyword && (
        <span>
          실제 이름은 <span style={{ color: 'purple' }}>{keyword}</span>입니다.
        </span>
      )}
      <br />
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </>
  );
}
