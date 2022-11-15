import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock></Clock>
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
