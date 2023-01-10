import './App.css';
import Header from './components/header';
import Editor from './components/design';
import Infrastructure from './components/infrastructure';


function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <Infrastructure />
    </div>
  );
}

export default App;