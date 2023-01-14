import './App.css';
import Header from './components/header';
import Editor from './components/design';
import Infrastructure from './components/infrastructure';
import Laptop from './components/laptop';


function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <Infrastructure />
      <Laptop />
    </div>
  );
}

export default App;