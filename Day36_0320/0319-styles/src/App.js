import CssModuleComponents from './CssModuleComponents';
import SassComponents from './SassComponents';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <CssModuleComponents />

      <hr />
      <SassComponents />
    </div>
  );
}

export default App;
