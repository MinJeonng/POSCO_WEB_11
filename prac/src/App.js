import './App.css';

function App() {
  let text_2 = '공부중 입니댜';
  let replaxce = text_2.replace(/공부중/, '노는중');
  console.log(replaxce);
  return <div className="App">{replaxce}</div>;
}

export default App;
