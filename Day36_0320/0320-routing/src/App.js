import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './styles/App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Routes> : 여러개의 route를 묶어준다. , element : path의 경로의 페이지로 갔을때 보여줘야할 페이지
//path='*' : 404페이지는 위에 모든 페이지들에 해당되지 않으면 404page로 간다! so, route에서도 항상 맨 밑에 작성해줘야함
