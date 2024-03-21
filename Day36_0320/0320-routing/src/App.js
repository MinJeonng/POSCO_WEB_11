import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Main from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const [products, setProducts] = useState([]); //기존에 있던 값 대신에 여기서 값을 요청해서 props로 넘겨줄 것

  const getProducts = async () => {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    setProducts(res.data.slice(0, 10));

    console.log('products', res.data.slice(0, 10)); //products에 담겨있음
  };

  useEffect(() => {
    getProducts(); //mount되었을때 실행되도록 하자 , 화면에 처음 렌더링 되었을때 getProducts()를 호출할 것
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Routes> : 여러개의 route를 묶어준다. , element : path의 경로의 페이지로 갔을때 보여줘야할 페이지
//path='*' : 404페이지는 위에 모든 페이지들에 해당되지 않으면 404page로 간다! so, route에서도 항상 맨 밑에 작성해줘야함
