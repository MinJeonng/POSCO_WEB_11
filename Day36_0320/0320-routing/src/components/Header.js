import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul>
        {/* <Link> : 경로만 바꿔주고 해당하는 컴포넌트를 띄우게 하는 역할, 그래서 새로고침 안해도됌 */}
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </header>
  );
}
