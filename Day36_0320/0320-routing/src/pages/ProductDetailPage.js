import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  console.log(useParams()); // localhost:3000/products/2 = {productId :  '2'}
  console.log('productId', productId); // productId 2

  // const targetproduct = productInfos[Number(productId) - 1]; 여기서 이걸로 productInfos 가져왔다가 api요청으로 받은 파일을 받게됌
  const targetproduct = products[Number(productId) - 1]; // 2번째 인덱스 값이 들어감, 타입스크립트로 넘어가면 명확하게 타입을 적어줘야 함
  const { id, name, email, body } = targetproduct;
  //navigate를 이용하려면 변수 하나 생성해야함
  //Link를 이용하는게 아니라
  const navigate = useNavigate();
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동</button>
      <ul>
        <li>상품 번호: {id}</li>
        <li>상품명: {name}</li>
        <li>상품 번호: {email}</li>
        <li>상품 내용: {body}</li>
      </ul>
    </div>
  );
};

export default ProductDetailPage;
