import './App.css';
import ClassBind from './ClassBind';
import SyntheticEvent from './SyntheticEvent';
import Counter from './Counter';
import HandlerEx from './HandlerEx';
import ColorChange from './ColorChange';

function App() {
  return (
    <div className="App">
      <ClassBind />

      <hr />
      <Counter />

      <hr />
      <HandlerEx />

      <hr />
      <ColorChange />
    </div>
  );
}

export default App;
