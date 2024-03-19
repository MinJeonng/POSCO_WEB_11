import './App.css';
import UseCallbackEx from './Components/UseCallbackEx';
import UseMemoEx from './Components/UseMemoEx';
import UseReducerEx from './Components/UseReducerEx';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx postId={9} />
      <hr />
      <UseReducerEx />
    </div>
  );
}

export default App;
