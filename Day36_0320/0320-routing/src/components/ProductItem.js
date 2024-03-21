import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, key }) => {
  //product: {id, name, email, body}
  return (
    <div className="ProductItem">
      <Link to={`/products/${product.id}`}>
        <ul key={key}>
          <li>상품명: {product.name}</li>
          <li>상세 설명: {product.body}</li>
        </ul>
      </Link>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default ProductItem;
