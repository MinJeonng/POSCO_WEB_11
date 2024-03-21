import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentDetail from './pages/StudentDetail';
import NotFound from './pages/NotFound';
import StudentHeader from './components/StudentHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentHeader />} />
          <Route path="/student/:name" element={<StudentDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
