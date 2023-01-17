import './App.css';
import Header from './components/header';
import Editor from './components/design';
import Infrastructure from './components/infrastructure';
import Laptop from './components/laptop';
import Footer from './components/footer';
4

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <Infrastructure />
      <Laptop />
      <Footer />
    </div>
  );
}

export default App;