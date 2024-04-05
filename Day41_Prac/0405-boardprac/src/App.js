import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostCreateForm from './components/PostCreateForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<PostCreateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
